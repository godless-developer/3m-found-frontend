"use client";

import { IUser } from "@/providers/userProvider";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Callback() {
  const params = useSearchParams();
  const router = useRouter();
  const code = params.get("code");
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    if (code) {
      fetch("http://localhost:4000/auth/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Backend Response:", data);

          // sessionToken-г localStorage-д хадгалах (эсвэл cookie)
          localStorage.setItem("sessionToken", data.sessionToken);
          localStorage.setItem("user", data.user);

          setUser(data.user);

          // 🎯 Login амжилттай бол нүүр хуудас руу шилжүүлнэ
          router.push("/");
        });
    }
  }, [code, router]);

  if (!code) return <p>No code provided</p>;

  return (
    <div>
      <h2>Microsoft Login Successful 🎉</h2>
      {user && (
        <div>
          <p>Welcome, {user.first_name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}
