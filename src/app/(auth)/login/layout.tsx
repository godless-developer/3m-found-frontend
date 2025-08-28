"use client";

import { MainLoading } from "@/app/_components/main-components";
import { useEffect, useState } from "react";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return <>{loading ? <MainLoading /> : <>{children}</>}</>;
}
