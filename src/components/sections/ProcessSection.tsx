import React from "react";
import ProcessCard from "@/components/ui-custom/ProcessCard";
import { Calendar, FileCheck, Clipboard, Check } from "lucide-react";

const ProcessSection: React.FC = () => {
  const processSteps = [
    {
      icon: Calendar,
      title: "Book an appointment",
      description: "Schedule your slot at a time that suits you.",
    },
    {
      icon: FileCheck,
      title: "Track Your Application",
      description: "Monitor progress on your application status.",
    },
    {
      icon: Clipboard,
      title: "Get it sorted",
      description: "We'll handle the complete application process for you.",
    },
    {
      icon: Check,
      title: "Service fees",
      description: "Transparent pricing with all inclusive services.",
    },
  ];

  return (
    <section className="text-center px-0 py-[60px]" id="process">
      <h2 className="text-2xl text-[#1a1a1a] mb-10">
        Effortless and transparent consular services. Get started with a simple
        step-by-step process.
      </h2>
      <div className="grid grid-cols-[repeat(4,1fr)] gap-[30px] mt-10 max-md:grid-cols-[repeat(2,1fr)] max-sm:grid-cols-[1fr]">
        {processSteps.map((step, index) => (
          <ProcessCard
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
