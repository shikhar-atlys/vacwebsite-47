import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FaqItemProps {
  question: string;
  answer?: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-solid border-b-[#ddd]">
      <div
        className="cursor-pointer px-0 py-[15px] flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        aria-expanded={isOpen}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen(!isOpen);
            e.preventDefault();
          }
        }}
      >
        <div>{question}</div>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>
      {answer && (
        <div
          className={cn(
            "px-0 pb-[15px] text-[#666]",
            isOpen ? "block" : "hidden",
          )}
        >
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqItem;
