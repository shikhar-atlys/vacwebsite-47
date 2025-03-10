import React from "react";

interface FeatureItemProps {
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ title, description }) => {
  return (
    <div className="mb-[30px]">
      <div className="font-medium mb-2.5">{title}</div>
      <div className="text-[#666] text-sm">{description}</div>
    </div>
  );
};

export default FeatureItem;
