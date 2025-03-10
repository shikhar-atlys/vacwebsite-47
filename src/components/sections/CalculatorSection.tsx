import React, { useState, useRef, useEffect } from "react";
import Button from "@/components/ui-custom/Button";

const CalculatorSection: React.FC = () => {
  const [serviceType, setServiceType] = useState("");
  const [visaType, setVisaType] = useState("");
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isVisaDropdownOpen, setIsVisaDropdownOpen] = useState(false);
  const serviceDropdownRef = useRef<HTMLDivElement>(null);
  const visaDropdownRef = useRef<HTMLDivElement>(null);
  
  const serviceOptions = [
    "Visa Application",
    "Passport Renewal",
    "Document Authentication",
    "Consular Assistance"
  ];

  const visaOptions = [
    "Tourist Visa",
    "Business Visa",
    "Student Visa",
    "Work Visa"
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(event.target as Node)) {
        setIsServiceDropdownOpen(false);
      }
      if (visaDropdownRef.current && !visaDropdownRef.current.contains(event.target as Node)) {
        setIsVisaDropdownOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCalculate = () => {
    // In a real application, this would calculate fees based on the service type
    console.log("Calculating fees for:", serviceType);
    // You could show a toast notification or update state to display results
  };

  return (
    <section className="text-center px-0 py-[60px] mt-5 bg-gray-50" id="calculator">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-sm uppercase tracking-wider text-[#2B4570] font-semibold mb-2">Fees & charges</div>
        <h2 className="text-4xl font-bold mb-4">Transparency is key</h2>
        <p className="text-base text-[#666] mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover a transparent breakdown of all fees associated with your consular services.
          Use our fee calculator to get an accurate estimate of your total cost.
        </p>
        
        {/* Main container with flex row layout */}
        <div className="flex flex-col lg:flex-row gap-8 justify-around">
          {/* Fees section */}
          <div className="flex flex-col gap-4 lg:w-[30%]">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="text-white bg-[#2B4570] p-3 rounded-lg flex-1 flex flex-col justify-center items-center">
                <div className="text-xl font-bold mb-1">₹2,500</div>
                <div className="text-sm">Government fees</div>
              </div>
              <div className="text-white bg-[#2B4570] p-3 rounded-lg flex-1 flex flex-col justify-center items-center">
                <div className="text-xl font-bold mb-1">₹2,500</div>
                <div className="text-sm">ICWF fees</div>
              </div>
            </div>
            <div className="text-white bg-[#2B4570] p-3 rounded-lg flex flex-col justify-center items-center">
              <div className="text-xl font-bold mb-1">₹800</div>
              <div className="text-sm">Yusuf Bin Ahmed Kanoo WLL Service Fee</div>
            </div>
          </div>

          {/* Calculator form section */}
          <div className="lg:w-[40%] bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <svg className="text-[#2B4570] w-6 h-6" viewBox="0 0 24 24" fill="none">
                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 15h-5v-1h5v1zm0-3h-5v-1h5v1zm0-3h-5V9h5v2zm-7 6H8v-1h2v1zm0-3H8v-1h2v1zm0-3H8V9h2v2zM6 4h12v3H6V4z" fill="currentColor"/>
              </svg>
              <span className="text-[#2B4570] text-base font-medium">Use the fee calculator to estimate your total cost</span>
            </div>

            <form className="flex flex-col gap-5">
              <div className="relative" ref={serviceDropdownRef}>
                <label className="block text-left text-sm font-medium mb-2">
                  Select your service type <span className="text-red-500">*</span>
                </label>
                <div 
                  className="w-full border rounded-lg p-3 border-solid border-[#ddd] bg-white flex justify-between items-center cursor-pointer hover:border-[#2B4570] transition-colors"
                  onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                >
                  <span className={`${serviceType ? "text-black" : "text-gray-400"} text-sm`}>
                    {serviceType || "Select"}
                  </span>
                  <span className="text-gray-400">▼</span>
                </div>
                {isServiceDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-[#ddd] rounded-lg mt-1 shadow-lg z-10">
                    {serviceOptions.map((option) => (
                      <div 
                        key={option} 
                        className="p-3 hover:bg-gray-100 cursor-pointer text-left"
                        onClick={() => {
                          setServiceType(option);
                          setIsServiceDropdownOpen(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative" ref={visaDropdownRef}>
                <label className="block text-left text-sm font-medium mb-2">
                  Select your visa type <span className="text-red-500">*</span>
                </label>
                <div 
                  className="w-full border rounded-lg p-3 border-solid border-[#ddd] bg-white flex justify-between items-center cursor-pointer hover:border-[#2B4570] transition-colors"
                  onClick={() => setIsVisaDropdownOpen(!isVisaDropdownOpen)}
                >
                  <span className={`${visaType ? "text-black" : "text-gray-400"} text-sm`}>
                    {visaType || "Select"}
                  </span>
                  <span className="text-gray-400">▼</span>
                </div>
                {isVisaDropdownOpen && (
                  <div className="absolute top-full left-0 right-0 bg-white border border-[#ddd] rounded-lg mt-1 shadow-lg z-10">
                    {visaOptions.map((option) => (
                      <div 
                        key={option} 
                        className="p-3 hover:bg-gray-100 cursor-pointer text-left"
                        onClick={() => {
                          setVisaType(option);
                          setIsVisaDropdownOpen(false);
                        }}
                      >
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#2B4570] text-white py-3 px-4 rounded-lg hover:bg-[#1e3151] transition-colors flex items-center justify-center gap-2 text-base font-medium mt-2"
              >
                Get total cost <span className="text-lg">→</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
