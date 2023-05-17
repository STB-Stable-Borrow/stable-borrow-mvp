import React, {useContext} from "react";
import LandingBody from "../layouts/index";
import HeroSection from "../layouts/landingPage/HeroSection";
import Footer from "../layouts/landingPage/Footer";
import Web3ModalProvider from "../contexts/web3ModalContext";
import { Web3ModalContext } from "../contexts/web3ModalContext";
import bgImage from "../assets/landing/bg.png";
import Header from "../layouts/landingPage/Header";

function Home({ children }) {
  return (
    <div>
     <div className="relative min-h-screen">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-[#00000080]"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="relative flex flex-col justify-between h-[100vh] py-[20px] px-[80px]">
        <Header />
        <Web3ModalProvider>
        <div className=" h-[70%]">
          <HeroSection />
        </div>
        <Footer />
        </Web3ModalProvider>
        {children}
      </div>
    </div>

    </div>
    
  );
}

export default Home;
