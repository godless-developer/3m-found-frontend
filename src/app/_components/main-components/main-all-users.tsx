"use client";
import * as React from "react";
import {
  AddFileSearchSelect,
  FilteredUsers,
  FooterMainAllUsers,
  HeaderMainAllUsers,
} from "../support-components";
import { Users, yearRanges } from "@/lib";

export function MainAllUsers() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [selectedRange, setSelectedRange] = React.useState<string>("");

  const filteredUsers = FilteredUsers({
    Users,
    searchTerm,
    selectedRange,
  });
  // Он сарын хамгийн эрт, хамгийн сүүлд орсон ажилчдыг олох
  const employmentDates = filteredUsers
    .map((u) => new Date(u.DateOfEmployment))
    .sort((a, b) => a.getTime() - b.getTime());

  const firstEmployment =
    employmentDates.length > 0
      ? employmentDates[0].toISOString().split("T")[0]
      : null;

  const lastEmployment =
    employmentDates.length > 0
      ? employmentDates[employmentDates.length - 1].toISOString().split("T")[0]
      : null;

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="w-full overflow-x-auto rounded-lg p-1">
        <AddFileSearchSelect
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedType={selectedRange}
          setSelectedType={setSelectedRange}
          options={[{ value: "all", label: "Бүгд" }, ...yearRanges]}
          tooltip="Бүх ажилдын ерөнхий мэдээлэл"
          selectDate="Он сар"
          inputHolder="Ажилтны нэрээр..."
        />
        <HeaderMainAllUsers />
        <div className="max-h-[500px] overflow-y-auto text-sm">
          {filteredUsers.map((user, index) => (
            <div
              key={user.email}
              className={`grid grid-cols-5 relative group ${
                index % 2 === 0 ? "bg-[#0B1739]" : "bg-[#101522]"
              }`}
            >
              {["name", "DateOfEmployment", "department", "role", "email"].map(
                (field) => (
                  <div key={field} className="p-3 truncate relative">
                    <span>{user[field as keyof typeof user]}</span>
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
      <FooterMainAllUsers
        filteredUsers={filteredUsers}
        firstEmployment={firstEmployment}
        lastEmployment={lastEmployment}
      />
    </div>
  );
}
