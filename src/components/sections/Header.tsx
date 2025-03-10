import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-0 py-5">
      <div>
        <img
          src="https://placehold.co/40x40/2B4570/2B4570"
          alt="Logo"
          width={40}
          height={40}
        />
      </div>
      <nav className="flex gap-[30px] max-sm:hidden">
        <a href="#services" className="text-[#333] cursor-pointer text-sm">
          Services
        </a>
        <a href="#process" className="text-[#333] cursor-pointer text-sm">
          Registration process
        </a>
        <a href="#calculator" className="text-[#333] cursor-pointer text-sm">
          Time & charges
        </a>
        <a href="#faq" className="text-[#333] cursor-pointer text-sm">
          Help
        </a>
        <a href="#contact" className="text-[#333] cursor-pointer text-sm">
          Contact us
        </a>
      </nav>
    </header>
  );
};

export default Header;
