import React from "react";
import FeatureItem from "@/components/ui-custom/FeatureItem";
import Button from "@/components/ui-custom/Button";

const BookingSection: React.FC = () => {
  const features = [
    {
      title: "Real-time slot availability",
      description: "View available slots and book your time easily.",
    },
    {
      title: "All Required document verification",
      description:
        "Before confirming your appointment, we'll ensure you have all the necessary documents to avoid any delays.",
    },
    {
      title: "Live tracking of appointment slots",
      description:
        "Track updates and track timing to see available and booked slots in real-time.",
    },
    {
      title: "Bulk booking prevention",
      description:
        "Our smart system prevents bulk slot bookings to ensure fair access to all users.",
    },
  ];

  return (
    <section className="px-0 py-[60px]" id="booking">
      <div className="max-w-[800px] mb-10">
        <h2 className="text-2xl mb-5">Book your appointment easily</h2>
        <p className="mb-5">
          Our appointment booking system ensures reliable and efficient service
          for our customers. We offer multiple time slots for you to choose
          from, making it easy to schedule an appointment to suit your needs.
        </p>
        <Button variant="link">Learn more</Button>
      </div>
      <div className="grid grid-cols-[repeat(2,1fr)] gap-[30px] max-md:grid-cols-[1fr]">
        {features.map((feature, index) => (
          <FeatureItem
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default BookingSection;
