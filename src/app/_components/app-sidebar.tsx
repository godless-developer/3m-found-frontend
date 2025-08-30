"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ChartColumnBig,
  FileUp,
  ListPlus,
  Sparkles,
  Users,
} from "lucide-react";
import { useSidebar } from "@/providers/sidebar-context";

export function AppSidebar() {
  const { active, setActive } = useSidebar();

  const labels = [
    { name: "dashboard", label: "Хянах самбар", icon: <ChartColumnBig /> },
    { name: "file", label: "Файл нэмэх", icon: <FileUp /> },
    { name: "ai", label: "AI туслах", icon: <Sparkles /> },
    { name: "task", label: "Task нэмэх", icon: <ListPlus /> },
    { name: "users", label: "Нийт ажилчид", icon: <Users /> },
  ];

  return (
    <Sidebar className="border-r-[1px] border-[#333]">
      <SidebarContent className="bg-[#0C101C] border-none text-white p-4 font-[DM Sans]">
        <SidebarGroup>
          <SidebarGroupContent className="flex gap-6 items-center px-2 pb-16">
            <Avatar className="w-12 h-12">
              <AvatarImage src="/profile.jpg" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-[#ffffff] font-bold text-[14px]">Tuka Bro</h1>
              <h6 className="text-[12px] font-bold text-[#898989]">Frontcin</h6>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-6">
              {labels.map((item) => {
                const isActive = active === item.name;
                return (
                  <div
                    key={item.name}
                    onClick={() => setActive(item.name)}
                    className={`flex items-center gap-2 p-2 rounded-[8px] transition-colors duration-300 cursor-pointer
                      ${
                        isActive
                          ? "bg-[#1B202F] text-[#7CC8F5]"
                          : "bg-transparent"
                      }`}
                  >
                    <div
                      className={`${
                        isActive ? "text-[#7CC8F5]" : "text-white"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <span>{item.label}</span>
                  </div>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
