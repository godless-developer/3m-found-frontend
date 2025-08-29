"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { IUser } from "./userProvider";

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
  userInfo: IUser | null;
  setUserInfo: (user: IUser | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setTokenState] = useState<string | null>(() => {
    return localStorage.getItem("sessionToken");
  });

  const [userInfo, setUserState] = useState<IUser | null>(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const setToken = (newToken: string | null) => {
    setTokenState(newToken);
    if (newToken) {
      localStorage.setItem("sessionToken", newToken);
    } else {
      localStorage.removeItem("sessionToken");
    }
  };

  const setUserInfo = (newUser: IUser | null) => {
    setUserState(newUser);
    if (newUser) {
      localStorage.setItem("user", JSON.stringify(newUser));
    } else {
      localStorage.removeItem("user");
    }
  };

  return (
    <AuthContext.Provider value={{ token, setToken, userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
};
