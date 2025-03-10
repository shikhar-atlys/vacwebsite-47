import React from "react";
import { LucideIcon } from "lucide-react";

interface ProcessCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="p-5">
      <div className="text-2xl text-[#2B4570] mb-[15px]">
        <Icon size={24} />
      </div>
      <div className="font-medium mb-2.5">{title}</div>
      <div className="text-sm text-[#666]">{description}</div>
    </div>
  );
};

export default ProcessCard;
