import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Ellipsis } from "lucide-react";
interface MiniCardProps {
  icon: React.ReactNode;
  title: string;
  index: string;
  className?: string;
  indexPercent?: string;
  arrowIcon?: React.ReactNode;
  iconClass?: string;
}
export function MiniCard({
  icon,
  title,
  index,
  className,
  indexPercent,
  arrowIcon,
  iconClass,
}: MiniCardProps) {
  return (
    <Card className={`${className}`}>
      <CardHeader className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {icon}
          <p>{title}</p>
        </div>
        <div className="flex items-center">
          <Ellipsis />
        </div>
      </CardHeader>
      <CardContent className="flex items-center gap-2">
        <p className="font-semibold">{index}</p>
        <div
          className={`flex mt-1 border-[0.5px] text-[12px] rounded-sm gap-1 px-1 items-center ${iconClass}`}
        >
          <p>{indexPercent}</p>
          {arrowIcon}
        </div>
      </CardContent>
    </Card>
  );
}
