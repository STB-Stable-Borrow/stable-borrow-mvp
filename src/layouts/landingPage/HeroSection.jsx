import React from "react";
import heroImage from "../../assets/landing/Hero_Image.svg";
import next from "../../assets/landing/next.svg";
import { Link } from "react-router-dom";

function HeroSection({ _handleConnectWallet }) {
  return (
    <div className="flex justify-between w-full items-center mt-[10.15vh] ">
      <div className="">
        <h1  className="text-[#FFFFFF] text-[2.5rem] font-black w-[40vw] leading-tight">
          Borrow STC, Earn as you Play and Exchange Tokens with Ease!
        </h1>
        <div className="mt-[1.30vh] mb-[4.07vh] ">
          <p className="text-[0.875rem] text-[#FFFFFF] w-[35.05vw] leading-tight  ">
            Stable Borrow (STB), a Web3 Platform where users can Borrow $STC,
            Earn and Exchange Tokens at-a-go using our Simple and Swift UI with
            Unique Protocols embedded in our Smart Contracts!...{" "}
            <span className="text-[#865DFF] font-bold underline underline-offset-4">
              <Link to="/about">Learn more</Link>
            </span>
          </p>
        </div>
        <Link>
          <button
            className={` text-[#FFFFFF] bg-[#009FBD] py-[1.57vh] px-[3.02vw] rounded-lg hover:opacity-75`}
            onClick={_handleConnectWallet}
          >
            <div className="flex gap-2">
              <p>Get started</p>
              <img src={next} alt="next icon" />
            </div>
          </button>
        </Link>
      </div>
      <img
        src={heroImage}
        alt="stb vector"
        className=" w-[35.12vw] h-[60.87vh] "
      />
    </div>
  );
}

export default HeroSection;
