import React from "react";
import ProcessCard from "@/components/ui-custom/ProcessCard";
import { Calendar, FileSearch, MapPin, CircleDollarSign } from "lucide-react";

const ProcessSection: React.FC = () => {
  const processSteps = [
    {
      icon: Calendar,
      title: "Book an appointment",
      description: "Schedule your visit in just a few clicks",
      features: [
        "Step-by-step booking guide",
        "Easy online scheduling"
      ]
    },
    {
      icon: FileSearch,
      title: "Track Your Application",
      description: "Stay updated on your application status",
      features: [
        "Real-time status updates",
        "SMS & email notifications"
      ]
    },
    {
      icon: MapPin,
      title: "Find a centre",
      description: "Locate the nearest application centre for you",
      features: [
        "Wide network of centres to choose from",
        "Check real-time availability"
      ]
    },
    {
      icon: CircleDollarSign,
      title: "Service fees",
      description: "Transparent pricing for all consular services",
      features: [
        "Breakdown of applicable fees",
        "Government of India payment links"
      ]
    },
  ];

  return (
    <section className="py-16 max-w-[1200px] mx-auto my-0 p-5" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium mb-4">
            Our services
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Effortless and transparent consular services. Get started with a simple 
            step-by-step process.
          </h2>
          <a href="#" className="inline-flex items-center text-blue-600 hover:underline">
            All services <span className="ml-1">→</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First row */}
          <ProcessCard
            icon={processSteps[0].icon}
            title={processSteps[0].title}
            description={processSteps[0].description}
            features={processSteps[0].features}
          />
          <ProcessCard
            icon={processSteps[1].icon}
            title={processSteps[1].title}
            description={processSteps[1].description}
            features={processSteps[1].features}
          />
          
          {/* Second row */}
          <ProcessCard
            icon={processSteps[2].icon}
            title={processSteps[2].title}
            description={processSteps[2].description}
            features={processSteps[2].features}
          />
          <ProcessCard
            icon={processSteps[3].icon}
            title={processSteps[3].title}
            description={processSteps[3].description}
            features={processSteps[3].features}
          />
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
