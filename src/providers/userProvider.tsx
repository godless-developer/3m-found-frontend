"use client";
import { MainLoading } from "@/app/_components/main-components";
import {
  QueryObserverResult,
  RefetchOptions,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useState } from "react";

export interface IUser {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number?: number; //ask
  dob?: Date;
  address?: string; //ask
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
  user: IUser;
  handleLogout: () => void;
  refetch: (
    options?: RefetchOptions | undefined
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ) => Promise<QueryObserverResult<any, Error>>;
  isLoading: boolean;
};
const UserContext = createContext<UserContextType>({} as UserContextType);
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const {
    data: user,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const storedUser = localStorage.getItem("user");
      const parsedUser = JSON.parse(storedUser!);
      console.log(parsedUser);
      console.log(parsedUser.email);

      try {
        const response = await axios.get(
          `http://localhost:4000/users/byEmail/${parsedUser.email}`
        );

        console.log(response.data);

        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("sessionToken");
    router.push("/login");
  };
  // const updateUser=()=>{
  // }

  return (
    <UserContext.Provider
      value={{
        user: user,
        handleLogout,
        refetch,
        isLoading,
      }}
    >
      {isLoading ? <MainLoading /> : children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    console.log("context is not defined");
  }
  return context;
};
