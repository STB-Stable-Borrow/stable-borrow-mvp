import React from "react";
import LandingBody from "../layouts/index";
import HeroSection from "../layouts/landingPage/HeroSection";
import Footer from "../layouts/landingPage/Footer";

function Home() {
  return (
    <div>
      <LandingBody>
        <div className=" h-[70%]">
          <HeroSection />
        </div>
        <Footer />
      </LandingBody>
    </div>
  );
}

export default Home;
