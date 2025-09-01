import { User } from "lucide-react";

export function HeaderMainAllUsers() {
  return (
    <div className="grid grid-cols-5 text-left text-sm font-semibold sticky top-0 z-10">
      <div className="p-3 w-[150px] flex items-center gap-2">
        <User size={14} fill="#350f6a" strokeWidth={3} />
        <p>Нэр</p>
      </div>
      <div className="p-3 w-[180px]">Ажилд орсон огноо</div>
      <div className="p-3 w-[160px]">Хэлтэс</div>
      <div className="p-3 w-[180px]">Албан тушаал</div>
      <div className="p-3 w-[220px]">Мэйл хаяг</div>
    </div>
  );
}
