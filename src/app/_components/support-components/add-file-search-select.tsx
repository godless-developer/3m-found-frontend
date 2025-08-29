import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InfoTooltip } from "./info-tooltip";

type Props = {
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  selectedType: string;
  setSelectedType: (v: string) => void;
};

export function AddFileSearchSelect({
  searchTerm,
  setSearchTerm,
  selectedType,
  setSelectedType,
}: Props) {
  return (
    <div className="flex justify-between items-center">
      <div className="relative">
        <Search className="absolute top-2.5 left-2" size={17} color="#797777" />
        <Input
          placeholder="Хайх..."
          className="pl-8 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex gap-4">
        <InfoTooltip
          text="Энэ бол байгууллагатайгаа холбоотой бүхий л дотоод журам, мэдээлэлээ нэг дор хадгалдаг булан шүү"
          side="left"
        />
        <Select
          value={selectedType}
          onValueChange={(value) => setSelectedType(value)}
        >
          <SelectTrigger className="w-[150px] cursor-pointer">
            <SelectValue placeholder="Төрөл сонгох" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Төрөлүүд</SelectLabel>
              <SelectItem value="all">All files</SelectItem>
              <SelectItem value="word">Word files</SelectItem>
              <SelectItem value="excel">Excel files</SelectItem>
              <SelectItem value="pdf">PDF files</SelectItem>
              <SelectItem value="code">Ts/Js files</SelectItem>
              <SelectItem value="other">Other files</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
