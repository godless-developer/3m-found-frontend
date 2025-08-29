import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

type InfoTooltipProps = {
  text: string; // tooltip дээр гаргах текст
  side?: "top" | "right" | "bottom" | "left"; // байрлал
  icon?: React.ReactNode; // icon-ыг customize хийх
};

export function InfoTooltip({ text, side = "top", icon }: InfoTooltipProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="inline-flex items-center cursor-pointer">
            {icon || <HelpCircle className="w-4 h-4 text-gray-400" />}
          </span>
        </TooltipTrigger>
        <TooltipContent
          side={side}
          className="backdrop-blur-[10px] bg-white/10 border-none shadow-none"
        >
          <p className="text-white">{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
