import React from "react";
import FeatureItem from "@/components/ui-custom/FeatureItem";
import Button from "@/components/ui-custom/Button";

const BookingSection: React.FC = () => {
  const features = [
    {
      title: "Real-time slot availability",
      description: "View available slots in real-time and choose a time that fits your schedule",
    },
    {
      title: "AI-Powered document verification",
      description:
        "Before confirming your appointment, our AI system automatically checks your documents for accuracy and completeness",
    },
    {
      title: "Live tracking of appointment slots",
      description:
        "Stay updated with live tracking to see available and booked slots as they happen",
    },
    {
      title: "Bulk booking prevention",
      description:
        "We've put in place measures to prevent bulk bookings by limiting the number of appointments per phone number or email ID",
    },
  ];

  return (
    <section className="py-16 container mx-auto px-6" id="booking">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left column - Heading and description */}
        <div>
          <h2 className="text-4xl font-normal mb-8 text-gray-900">Book your appointment easily</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Our appointment booking system ensures a smooth and efficient process for you.
            With real-time updates and advanced features, scheduling your appointment is
            quicker than ever.
          </p>
          <Button variant="link" className="text-blue-700 font-medium flex items-center gap-2">
            Learn more 
            <span className="text-xl">→</span>
          </Button>
        </div>

        {/* Right column - Features list */}
        <div className="flex flex-col space-y-8">
          {features.map((feature, index) => (
            <div key={index} className="border-b border-gray-200 pb-8">
              <div className="flex items-start gap-3">
                <span className="text-[#214872] text-xl">✱</span>
                <div>
                  <h3 className="text-xl text-[#214872] font-medium mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
