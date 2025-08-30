"use client";

import { useEffect, useState } from "react";
import {
  MainAddFile,
  MainAddTask,
  MainAiSupport,
  MainAllUsers,
  MainDashboard,
} from "../_components/main-components";
import { Skeleton } from "@/components/ui/skeleton";
import { MiniLoading } from "../_components/support-components";
import { useSidebar } from "@/providers/sidebar-context";

export default function Home() {
  const { active } = useSidebar();
  const [loading, setLoading] = useState(true); //--> file db deer hadgaldag bolsnii daraa loading aa idewhjvvlnee shvvv
  const labels = [
    { name: "dashboard", label: "Хянах самбар" },
    { name: "file", label: "Файл нэмэх" },
    { name: "ai", label: "AI туслах" },
    { name: "task", label: "Task нэмэх" },
    { name: "users", label: "Нийт ажилчид" },
  ];

  const activeLabel = labels.find((item) => item.name === active)?.label || "";

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [active, activeLabel]);

  return (
    <div className="flex h-screen w-full">
      <main
        className={`flex-1 w-full h-screen pl-1 ${
          active === "users"
            ? " bg-[#101522]"
            : "bg-gradient-to-bl from-[#101522] from-55% to-[#492E6D]"
        } overflow-auto`}
      >
        <header className="w-[100%] shrink-0 px-9 py-6 flex justify-between items-center border-b-[1px] border-[#2D2F48]">
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
          <div className="px-8 py-8 w-full flex-1 overflow-y-auto">
            {active === "dashboard" && <MainDashboard />}
            {active === "file" && <MainAddFile />}
            {active === "ai" && <MainAiSupport />}
            {active === "task" && <MainAddTask />}
            {active === "users" && <MainAllUsers />}
          </div>
        )}
      </main>
    </div>
  );
}
