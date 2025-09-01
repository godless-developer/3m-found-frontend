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

type Option = {
  value: string;
  label: string;
};

type Props = {
  searchTerm: string;
  setSearchTerm: (v: string) => void;
  selectedType: string;
  setSelectedType: (v: string) => void;
  options: Option[];
  tooltip: string;
  selectDate: string;
  inputHolder: string;
};

export function AddFileSearchSelect({
  searchTerm,
  setSearchTerm,
  selectedType,
  setSelectedType,
  options,
  tooltip,
  selectDate,
  inputHolder,
}: Props) {
  return (
    <div className="flex justify-between items-center">
      <div className="relative">
        <Search className="absolute top-2.5 left-2" size={17} color="#797777" />
        <Input
          placeholder={inputHolder}
          className="pl-8 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex gap-4">
        <InfoTooltip text={tooltip} side="left" />
        <Select
          value={selectedType}
          onValueChange={(value) => setSelectedType(value)}
        >
          <SelectTrigger className="w-[165px] cursor-pointer">
            <SelectValue placeholder={selectDate} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Сонголтууд</SelectLabel>
              {options.map((opt) => (
                <SelectItem
                  key={opt.value}
                  value={opt.value}
                  className="cursor-pointer"
                >
                  {opt.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
