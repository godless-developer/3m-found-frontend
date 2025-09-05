/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useAuth } from "@/providers/authProvider";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Callback() {
  const params = useSearchParams();
  const router = useRouter();
  const code = params.get("code");

  const { setToken, setUserInfo, userInfo } = useAuth();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    // only fetch if sessionToken is not already set
    if (code && !userInfo) {
      const body: any = { isWeb: true };
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        body.email = parsedUser.email;
      }
      body.code = code;

      fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Backend Response:", data);

          const sessionToken = data.session_token || data.sessionToken;

          if (!sessionToken) {
            console.error("No session token received from backend");
            return;
          }

          setToken(sessionToken);
          setUserInfo(data.user);

          // 🎯 Redirect after login
          router.push("/");
        })
        .catch((err) => {
          console.error("Auth error:", err);
        });
    }
  }, [code, router, setToken, setUserInfo, userInfo]);

  if (!code) return <p>No code provided</p>;

  return (
    <div>
      <h2>Microsoft Login Successful 🎉</h2>
      {userInfo && (
        <div>
          <p>Welcome, {userInfo.first_name}</p>
          <p>Email: {userInfo.email}</p>
        </div>
      )}
    </div>
  );
}
