import React, {useContext, useEffect} from "react";
import LandingBody from "../layouts/index";
import HeroSection from "../layouts/landingPage/HeroSection";
import Footer from "../layouts/landingPage/Footer";
import Web3ModalProvider from "../contexts/web3ModalContext";
import bgImage from "../assets/landing/bg.png";
import Header from "../layouts/landingPage/Header";
import { useBorrow } from "../contexts/borrowContext/borrowContext";
import { Web3ModalContext } from "../contexts/web3ModalContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const {connect, disconnect} = useContext(Web3ModalContext);
  const {resetVaultSetup} = useBorrow();
  const navigate = useNavigate();

  //reset vault setup
  useEffect(() => {
    resetVaultSetup();
  }, []);
 
  //handles wallet connection
  const handleConnectWallet = async() => {
    await connect().then((res) => {
      if(res) {
        navigate("/info")
      }
    });
  }

  // handles wallet disconnection
  const handleDisconnectWallet = () => {
    disconnect();
  }

  return (
    <div>
      <LandingBody  _handleConnectWallet={handleConnectWallet}>
        <Web3ModalProvider>
        <div className=" h-[70%]">
          <HeroSection _handleConnectWallet={handleConnectWallet} />
        </div>
        <Footer />
        </Web3ModalProvider>
      </LandingBody>
    </div>
  );
}

export default Home;
