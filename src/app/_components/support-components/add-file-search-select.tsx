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
export function AddFileSearchSelect() {
  return (
    <div className="flex justify-between items-center">
      <div className="relative">
        <Search className="absolute top-2.5 left-2" size={17} color="#797777" />
        <Input placeholder="Хайх..." className="pl-8 outline-none" />
      </div>
      <div>
        <Select>
          <SelectTrigger className="w-[150px] cursor-pointer">
            <SelectValue placeholder="Төрөл сонгох" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Төрөлүүд</SelectLabel>
              <SelectItem
                value="apple"
                className="cursor-pointer transition-all duration-300 ease-in-out"
              >
                Word files
              </SelectItem>
              <SelectItem
                value="banana"
                className="cursor-pointer transition-all duration-300 ease-in-out"
              >
                Excel files
              </SelectItem>
              <SelectItem
                value="blueberry"
                className="cursor-pointer transition-all duration-300 ease-in-out"
              >
                PDF files
              </SelectItem>
              <SelectItem
                value="grapes"
                className="cursor-pointer transition-all duration-300 ease-in-out"
              >
                Ts,Js files
              </SelectItem>
              <SelectItem
                value="pineapple"
                className="cursor-pointer transition-all duration-300 ease-in-out"
              >
                Other files
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
