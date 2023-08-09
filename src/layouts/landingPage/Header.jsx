import React, { useContext } from "react";
import logoStb from "../../assets/landing/stb-logo.svg";
import { Link, useLocation } from "react-router-dom";

function Header({ _handleConnectWallet_ }) {
  const location = useLocation();

  return (
    <div className="flex justify-between items-center bg-red-500">
      <div>
        <Link to="/">
          <img
            className="w-[13.50vw] h-[5.46vh]"
            src={logoStb}
            alt="Stb Logo"
          />
        </Link>
      </div>
      <div className="hidden lg:flex justify-betweeen items-center gap-[2.14vw] text-[#FFFFFF] font-semibold  ">
        <ul className="flex gap-[2.14vw]   text-sm cursor-pointer">
          <li className="hover:opacity-75">
            <Link
              to="/about"
              className={`${
                location.pathname === "/about" ? "text-[#009FBD]" : ""
              }  `}
            >
              About
            </Link>
          </li>
          <li className="hover:opacity-75">
            <Link
              to="/exchange"
              className={`   ${
                location.pathname === "/exchange" ? "text-[#009FBD] " : ""
              }`}
            >
              Exchange
            </Link>
          </li>
          {/* {location.pathname !== "/" && (
            <li>
              <Link to="/contact" className={location.pathname === "/contact" ? "text-[#009FBD]" : ""}>Contact</Link>
            </li>
          )} */}
        </ul>

        {location.pathname === "/" && (
          <button
            className="border border-[#009FBD] px-[0.90vw] py-[0.93vh] rounded-lg hover:opacity-75 text-sm "
            onClick={_handleConnectWallet_}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
