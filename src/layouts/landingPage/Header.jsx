import React, {useContext, useCallback} from "react";
import logoStb from "../../assets/landing/stb-logo.svg";
import { Link, useLocation } from "react-router-dom";
import { Web3ModalContext } from "../../contexts/web3ModalContext";

function Header() {
  const location = useLocation();
  const { account, connect, disconnect} = useContext(Web3ModalContext);

  //handles wallet connection
  const handleConnectWallet = () => {
    connect();
  }

  // handles wallet disconnection
  const handleDisconnectWallet = () => {
    disconnect();
  }


  return (
    <div className="flex justify-between items-center">
      <div>
        <Link to='/'>
          <img className="w-[259px] h-[59px]" src={logoStb} alt="Stb Logo" />
        </Link>
      </div>
      <div className="flex justify-betweeen items-center gap-[41px] text-[#FFFFFF] font-semibold">
        <ul className="flex gap-[41px] font-sans  text-lg cursor-pointer">
          <li>
            <Link to="/about" className={location.pathname === "/about" ? "text-[#009FBD]" : ""}>About</Link>
          </li>
          <li>
            <Link to="/exchange" className={location.pathname === "/exchange" ? "text-[#009FBD]" : ""}>Exchange</Link>
          </li>
          {/* {location.pathname !== "/" && (
            <li>
              <Link to="/contact" className={location.pathname === "/contact" ? "text-[#009FBD]" : ""}>Contact</Link>
            </li>
          )} */}
        </ul>

        {location.pathname === "/" && (
          <button className="border border-[#009FBD] px-[17px] py-[10px] rounded-lg" onClick={handleConnectWallet}>
          Connect Wallet
        </button>
        )}
      </div>
    </div>
  );
}

export default Header;