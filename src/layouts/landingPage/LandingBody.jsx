import React from "react";
import bgImage from "../../assets/landing/bg.png";
import Header from "./Header";
import { useLocation } from "react-router-dom";

function LandingBody({children, _handleConnectWallet }) {
  const location = useLocation();

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-[#00000080]"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="relative flex flex-col justify-between h-[100vh] z-10 py-[20px] px-[80px]">
        <Header _handleConnectWallet_={_handleConnectWallet} />
        {children}
      </div>
    </div>
  );
}

export default LandingBody;
