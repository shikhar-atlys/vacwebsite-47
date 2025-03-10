import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="text-center px-0 py-[60px]" id="hero">
      <div>
        <h1 className="text-[32px] font-semibold text-[#1a1a1a] mb-5 max-sm:text-2xl">
          Seamless Indian Visa & Passport Services in Seoul
        </h1>
        <h2 className="text-lg text-[#666] mb-[30px] max-sm:text-base">
          Get fast, reliable, and hassle-free assistance for all your Indian
          consular needs.
        </h2>
      </div>
      <p className="max-w-[800px] text-[#666] text-base leading-[1.6] mx-auto my-0 bg-[#214872] text-white p-6 rounded">
        Simplifying your consular journey—whether you need a visa, passport,
        or other services, we provide step-by-step guidance to make the process
        effortless. Explore our services below to get started.
      </p>
    </section>
  );
};

export default HeroSection;
