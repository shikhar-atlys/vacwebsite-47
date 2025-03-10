import React from "react";
import FeatureItem from "@/components/ui-custom/FeatureItem";

const TrackingDetailsSection: React.FC = () => {
  const trackingSteps = [
    {
      title: "Five stage tracking for passport and visa services",
      description: "Easily track the progress of your passport and visa applications",
    },
    {
      title: "Live status updates",
      description: "Receive live updates on your application status at each stage, ensuring you're always in the loop",
    },
    {
      title: "Secure login for applicants",
      description: "Log in securely to track your application's progress, access updates, and manage your details with ease.",
    },
  ];

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id="tracking-details">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Track your application in real-time</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Stay informed and in control of your application process with our comprehensive tracking system.
        </p>
        <a href="#" className="inline-flex items-center text-blue-700 mt-4 hover:underline">
          Learn more <span className="ml-1">→</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
