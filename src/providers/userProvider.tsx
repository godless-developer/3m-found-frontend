"use client";

import { MainLoading } from "@/app/_components/main-components";
import {
  QueryObserverResult,
  RefetchOptions,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { createContext, useContext } from "react";

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: number;
  dob?: Date;
  address?: string;
  profile_img?: string;
  gender?: string;
  password?: string;
  coordinate?: string;
  longitude?: number;
  latitude?: number;
  user_role_id: string;
  status?: string;
}

type UserContextType = {
  user: IUser | null;
  handleLogout: () => void;
  refetch: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<IUser | null, Error>>;
  isLoading: boolean;
};

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery<IUser | null>({
    queryKey: ["users"],
    queryFn: async () => {
      const storedUser = localStorage.getItem("user");

      if (!storedUser) {
        return null;
      }

      let parsedUser: IUser;
      try {
        parsedUser = JSON.parse(storedUser);
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
        return null;
      }

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/users/byEmail/${parsedUser.email}`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching user:", error);
        return null;
      }
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("sessionToken");
    router.push("/login");
  };

  return (
    <UserContext.Provider
      value={{
        user: user ?? null,
        handleLogout,
        refetch,
        isLoading,
      }}
    >
      {isLoading ? <div>...loading</div> : children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }
  return context;
};
