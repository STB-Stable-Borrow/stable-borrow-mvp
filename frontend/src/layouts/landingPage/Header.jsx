import React from "react";
import logoStb from "../../assets/landing/stb-logo.svg";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img className="w-[259px] h-[59px]" src={logoStb} alt="Stb Logo" />
      </div>
      <div className="flex justify-betweeen gap-[41px] text-[#FFFFFF]">
        <ul className="flex gap-[41px]">
          <li className="font-semibold ">About</li>
          <li>Exchange</li>
        </ul>

        <button>Connect Wallet</button>
      </div>
    </div>
  );
}

export default Header;
