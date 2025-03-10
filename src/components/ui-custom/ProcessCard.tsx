import React from "react";
import { LucideIcon, Check } from "lucide-react";

interface ProcessCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

const ProcessCard: React.FC<ProcessCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
}) => {
  return (
    <div className="p-6 bg-gray-50 rounded-lg text-left h-full">
      <div className="text-2xl text-[#2B4570] mb-[15px]">
        <Icon size={24} />
      </div>
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <p className="text-sm text-[#666] mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <div className="h-4 w-4 rounded-full bg-[#2B4570] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="h-2 w-2 text-white" />
            </div>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProcessCard;
