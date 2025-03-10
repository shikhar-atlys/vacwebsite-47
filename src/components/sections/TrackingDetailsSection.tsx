import React from "react";
import FeatureItem from "@/components/ui-custom/FeatureItem";

const TrackingDetailsSection: React.FC = () => {
  const trackingSteps = [
    {
      title: "Pre-stage tracking for payment",
      description: "Track your fee payment status and confirmation",
    },
    {
      title: "Live status updates",
      description: "Get real-time updates on your application progress",
    },
    {
      title: "Search right by applicant",
      description: "Track multiple applications simultaneously",
    },
  ];

  return (
    <section className="px-0 py-10" id="tracking-details">
      <h2 className="text-2xl mb-[30px]">
        Track your application in real-time
      </h2>
      <div className="grid grid-cols-[repeat(3,1fr)] gap-[30px] max-md:grid-cols-[1fr]">
        {trackingSteps.map((step, index) => (
          <FeatureItem
            key={index}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};

export default TrackingDetailsSection;
