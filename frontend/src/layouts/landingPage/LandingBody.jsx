import React from "react";
import bgImage from "../../assets/landing/bg.png";
import Header from "./Header";
import HeroSection from "./HeroSection";
import Footer from "./Footer";


function LandingBody() {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-[#00000080]"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="relative flex flex-col justify-between h-[100vh] z-10 py-[37px] px-[80px]">
        <Header />
        <HeroSection />
        <Footer />
      </div>
    </div>
  );
}

export default LandingBody;
