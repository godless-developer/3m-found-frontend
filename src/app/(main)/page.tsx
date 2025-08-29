"use client";

import { useEffect, useState } from "react";
import {
  MainAddFile,
  MainAddTask,
  MainAiSupport,
  MainAllUsers,
  MainDashboard,
} from "../_components/main-components";
import { AppSidebar } from "../_components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { MiniLoading } from "../_components/support-components";
import { useUser } from "@/providers/userProvider";

export default function Home() {
  const [active, setActive] = useState("file");
  const [loading, setLoading] = useState(true);
  const labels = [
    { name: "dashboard", label: "Хянах самбар" },
    { name: "file", label: "Файл нэмэх" },
    { name: "ai", label: "AI туслах" },
    { name: "task", label: "Task нэмэх" },
    { name: "users", label: "Нийт ажилчид" },
  ];

  const activeLabel = labels.find((item) => item.name === active)?.label || "";
  const { user } = useUser();
  useEffect(() => {
    setLoading(true);
    localStorage.setItem("sessionToken", "haha");
    localStorage.setItem(
      "user",
      JSON.stringify({
        first_name: "sodgerel",
        email: "sodgerel.g@techpack.mn",
      })
    );

    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [active, activeLabel]);
  console.log(user);

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <div className="w-[0%]">
          <AppSidebar onSelect={setActive} active={active} />
        </div>
        <main className="flex-1 h-screen pl-1 bg-gradient-to-bl from-[#101522] from-55% to-[#492E6D] overflow-auto">
          <header className="w-full h-[8%] px-9 py-6 flex justify-between items-center border-b-[1px] border-[#2D2F48]">
            <h1
              className="font-[DM Sans] font-bold text-[24px]"
              title={activeLabel}
            >
              {loading ? (
                <Skeleton className="h-[30px] w-[150px] rounded-lg bg-white/50" />
              ) : (
                `${activeLabel}`
              )}
            </h1>
          </header>
          {loading ? (
            <MiniLoading />
          ) : (
            <div className="px-8 py-12 w-full h-[92%]">
              {active === "dashboard" && <MainDashboard />}
              {active === "file" && <MainAddFile />}
              {active === "ai" && <MainAiSupport />}
              {active === "task" && <MainAddTask />}
              {active === "users" && <MainAllUsers />}
            </div>
          )}
        </main>
      </div>
    </SidebarProvider>
  );
}
