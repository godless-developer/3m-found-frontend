"use client";

import { useEffect, useState } from "react";
import { AppSidebar } from "../_components/app-sidebar";
import { MainLoading } from "../_components/main-components";
import { Providers } from "@/providers/queryClientProvider";
import { UserProvider } from "@/providers/userProvider";
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
      <Providers>
        <UserProvider>
          {loading ? (
            <MainLoading />
          ) : (
            <SidebarProvider>
              <div className="flex w-full">
                <AppSidebar />
                <main className="flex-1 w-full">{children}</main>
              </div>
            </SidebarProvider>
          )}
        </UserProvider>
      </Providers>
    </>
  );
}
