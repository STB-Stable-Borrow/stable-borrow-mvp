import React from "react";
import bgImage from "../assets/landing/bg.png";
import { useLocation } from "react-router-dom";
import Header from "./landingPage/Header";


function LandingBody({children}) {
  const location = useLocation()
  console.log(location)
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-[#00000080]"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="relative flex flex-col justify-between h-[100vh] z-10 py-[37px] px-[80px]">
        <Header />
        {children}
      </div>
    </div>
  );
}

export default LandingBody;
