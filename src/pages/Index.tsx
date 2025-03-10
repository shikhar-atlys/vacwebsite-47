import React from "react";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import ProcessSection from "@/components/sections/ProcessSection";
import HistorySection from "@/components/sections/HistorySection";
import CalculatorSection from "@/components/sections/CalculatorSection";
import TrackingSection from "@/components/sections/TrackingSection";
import BookingSection from "@/components/sections/BookingSection";
import TrackingDetailsSection from "@/components/sections/TrackingDetailsSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <main className="font-['Inter',sans-serif]">
        <div className="">
          <Header />
          <HeroSection />
          <ProcessSection />
          <HistorySection />
          <CalculatorSection />
          <TrackingSection />
          <BookingSection />
          <TrackingDetailsSection />
          <FaqSection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Index;
