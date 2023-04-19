import React from "react";
import logoStb from "../../assets/landing/stb-logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img className="w-[259px] h-[59px]" src={logoStb} alt="Stb Logo" />
      </div>
      <div className="flex justify-betweeen items-center gap-[41px] text-[#FFFFFF] font-semibold">
        <ul className="flex gap-[41px] font-sans  text-lg cursor-pointer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/exchange">Exchange</Link>
          </li>
          {window.location.pathname !== "/" && (
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          )}
        </ul>

        {window.location.pathname === "/" && (
          <button className="border border-[#009FBD] px-[17px] py-[10px] rounded-lg">
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
