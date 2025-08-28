"use client";

import { useEffect, useState } from "react";
import { AppSidebar } from "../_components/app-sidebar";
import { MainLoading } from "../_components/main-components";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <MainLoading />
      ) : (
        <div className="flex w-full">
          <AppSidebar />
          <main className="flex-1 w-full">{children}</main>
        </div>
      )}
    </>
  );
}
