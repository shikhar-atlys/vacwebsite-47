import React from "react";

const TrackingSection: React.FC = () => {
  return (
    <section className="bg-[#2B4C7E] text-white text-center px-0 py-16" id="tracking">
      <h2 className="text-4xl font-normal mb-6">Effortless Booking & Tracking</h2>
      <p className="text-white/90 max-w-[800px] mx-auto my-0 mb-6">
        From scheduling your appointment in real-time to tracking your application progress securely, 
        manage your consular services with ease.
      </p>
      <a href="#" className="text-white hover:text-white/90 inline-flex items-center">
        Here's how <span className="ml-2">↓</span>
      </a>
    </section>
  );
};

export default TrackingSection;
