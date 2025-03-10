import React, { useState } from "react";
import Button from "@/components/ui-custom/Button";

const CalculatorSection: React.FC = () => {
  const [serviceType, setServiceType] = useState("");

  const handleCalculate = () => {
    // In a real application, this would calculate fees based on the service type
    console.log("Calculating fees for:", serviceType);
    // You could show a toast notification or update state to display results
  };

  return (
    <section className="text-center px-0 py-[60px]" id="calculator">
      <h2 className="text-2xl mb-5">Transparency is key</h2>
      <p className="text-[#666] mb-[30px]">
        Discover a transparent breakdown of all fees associated with your
        consular services. Use our fee calculator to get an accurate estimate of
        your total cost.
      </p>
      <div className="flex justify-center gap-5 mb-[30px] max-sm:flex-col max-sm:items-center">
        <div className="text-[white] text-2xl font-semibold bg-[#2B4570] px-10 py-5 rounded-lg max-sm:w-full max-sm:max-w-[300px]">
          ₹3,800
        </div>
        <div className="text-[white] text-2xl font-semibold bg-[#2B4570] px-10 py-5 rounded-lg max-sm:w-full max-sm:max-w-[300px]">
          ₹2,500
        </div>
      </div>
      <form
        className="max-w-[400px] mx-auto my-0"
        onSubmit={(e) => {
          e.preventDefault();
          handleCalculate();
        }}
      >
        <div>
          <input
            type="text"
            placeholder="Enter your service type"
            className="w-full border rounded mb-[15px] p-3 border-solid border-[#ddd]"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            aria-label="Service type"
          />
        </div>
        <Button type="submit">Calculate now</Button>
      </form>
    </section>
  );
};

export default CalculatorSection;
