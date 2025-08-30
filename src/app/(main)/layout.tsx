"use client";

import { useEffect, useState } from "react";
import { AppSidebar } from "../_components/app-sidebar";
import { MainLoading } from "../_components/main-components";
import { SidebarProvider } from "@/providers/sidebar-context";

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
        <SidebarProvider>
          <div className="flex w-full">
            <AppSidebar />
            <main className="w-full">{children}</main>
          </div>
        </SidebarProvider>
      )}
    </>
  );
}
