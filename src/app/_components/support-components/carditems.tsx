import {
  ArrowDownRight,
  ArrowUpRight,
  CirclePlus,
  Eye,
  Star,
  User,
} from "lucide-react";
export function carditems() {
  return [
    {
      icon: <Eye size={16} />,
      title: "Pageviews",
      index: "50.8K",
      className: "bg-[#1C1D2F] border-[#343b4f] border-[1px]",
      indexPercent: "28.4%",
      arrowIcon: <ArrowUpRight size={14} className="text-green-500" />,
      iconClass: "text-green-500 bg-green-500/10",
    },
    {
      icon: <User size={16} />,
      title: "Monthly users",
      index: "23.6K",
      className: "bg-[#1C1D2F] border-[#343b4f] border-[1px]",
      indexPercent: "12.6%",
      arrowIcon: <ArrowDownRight size={14} className="text-red-500" />,
      iconClass: "text-red-500 bg-red-500/10",
    },
    {
      icon: <CirclePlus size={16} fill="#fff" color="#1C1D2F" />,
      title: "New sign ups",
      index: "756",
      className: "bg-[#1C1D2F] border-[#343b4f] border-[1px]",
      indexPercent: "3.1%",
      arrowIcon: <ArrowUpRight size={14} className="text-green-500" />,
      iconClass: "text-green-500 bg-green-500/10",
    },
    {
      icon: <Star size={16} fill="#fff" />,
      title: "Subscriptions",
      index: "2.3K",
      className: "bg-[#1C1D2F] border-[#343b4f] border-[1px]",
      indexPercent: "8.1%",
      arrowIcon: <ArrowUpRight size={14} className="text-green-500" />,
      iconClass: "text-green-500 bg-green-500/10",
    },
  ];
}
