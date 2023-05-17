import React, {useContext} from "react";
import LandingBody from "../layouts/index";
import HeroSection from "../layouts/landingPage/HeroSection";
import Footer from "../layouts/landingPage/Footer";
import Web3ModalProvider from "../contexts/web3ModalContext";
import { Web3ModalContext } from "../contexts/web3ModalContext";

function Home() {
  const {isClicked} = useContext(Web3ModalContext);

  console.log("state: ", isClicked)
  return (
    <div>
     
       
      <LandingBody>
        <Web3ModalProvider>
        {!isClicked && (
          <div className=" h-[70%]">
          <HeroSection />
        </div>
        )}
        </Web3ModalProvider>
       
        
        
        <Footer />
      </LandingBody>
    </div>
    
  );
}

export default Home;
