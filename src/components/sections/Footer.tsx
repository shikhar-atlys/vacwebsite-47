import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-6 border-t border-[#ddd]">
      <div className="max-w-[1200px] mx-auto px-5">
        <p className="text-sm text-[#666]">
          © {new Date().getFullYear()} Indian Visa & Passport Services. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
