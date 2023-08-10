import React from "react";
import heroImage from "../../assets/landing/Hero_Image.svg";
import next from "../../assets/landing/next.svg";
import { Link } from "react-router-dom";

function HeroSection({ _handleConnectWallet }) {
  return (
    <div className="flex justify-between w-full items-center mt-[10.15vh] flex-col-reverse md:flex-row bg-red-500 ">
      <div className="">
        <h1 className="text-[#FFFFFF] text-[1.5rem] text-center md:text-start  md:text-[2.5rem] font-black w-[40vw] leading-tight">
          Borrow STC, Earn as you Play and Exchange Tokens with Ease!
        </h1>
        <div className="mt-[1.30vh] mb-[4.07vh] ">
          <p className="text-sm text-[#FFFFFF] w-[35.05vw] leading-tight text-center md:text-start md:text-[0.875rem]  ">
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
            className={`py-[1.29vh] px-[2.08vw] text-sm text-[#FFFFFF] bg-[#009FBD]  rounded-lg hover:opacity-75 md:py-[1.57vh] md:px-[3.02vw] md:text-base `}
            onClick={_handleConnectWallet}
          >
            <div className="flex gap-2 items-center">
              <p>Get started</p>
              <img src={next} alt="next icon" />
            </div>
          </button>
        </Link>
      </div>
      <img
        src={heroImage}
        alt="stb vector"
        className="w-[10.87rem] h-[10rem] md:w-[35.12vw] md:h-[60.87vh] "
      />
    </div>
  );
}

export default HeroSection;
