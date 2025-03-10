import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-0 py-5">
      <div>
        <img
          src="/YusufBinaAhmad.svg"
          alt="Logo"
          width={261}
          height={65}
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
