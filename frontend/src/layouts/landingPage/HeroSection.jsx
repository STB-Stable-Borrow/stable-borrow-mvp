import React from "react";
import heroImage from "../../assets/landing/Hero_Image.svg";
import next from "../../assets/landing/next.svg";
import { Link } from "react-router-dom";

function HeroSection() {
  const handleConnectWallet = () => {
    console.log("connect walllet");
  };

  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <div className="w-[550px]">
          <h1 className="text-[#FFFFFF] text-6xl font-black font-sans">
            Borrow STC, Earn as you Play and Exchange Tokens with Ease!
          </h1>
        </div>
        <div className="mt-[14px] w-[480px] h-[104px]">
          <p className="text-base text-[#FFFFFF] font-sans">
            Stable Borrow (STB), a Web3 Platform where users can Borrow $STC,
            Earn and Exchange Tokens at-a-go using our Simple and Swift UI with
            Unique Protocols embedded in our Smart Contracts!...{" "}
              <span className="text-[#865DFF] font-bold underline underline-offset-4">
            <Link to="/about">
               
                Learn more
            </Link>

              </span>
          </p>
          <div>
            <Link to="/info">
            <button
              className={`mt-[27px] text-[#FFFFFF] bg-[#009FBD] py-[17px] px-[58px] rounded-lg`}
              onClick={handleConnectWallet}
            >
              <div className="flex gap-2">
                <p>Get started</p>
                <img src={next} alt="next icon" />
              </div>
            </button>
            </Link>
       
          </div>
        </div>
      </div>
      <div>
        <img src={heroImage} alt="stb vector" className="w-[440px] h-[417px]" />
      </div>
    </div>
  );
}

export default HeroSection;
