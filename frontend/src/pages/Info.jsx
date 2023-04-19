import React from "react";
import bgImage from "../assets/landing/bg.png";
import Header from "../layouts/landingPage/Header";
import borrow from "../assets/info/Borrow.svg";
import exchange from "../assets/info/Exchange.svg";
import earn from "../assets/info/Earn.svg";
import { Link } from "react-router-dom";

function Info() {
  return (
    <div
      className="min-h-screen w-screen md:px-[80px] md:pt-[37px] md:pb-[10px]     "
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Header />
      <body className="md:mx-[60px] md:mt-[48px] flex justify-between text-white  min-h-[calc(100vh-180px)] overflow-hidden  ">
        <div className=" flex-col flex justify-between md:w-[45%] ">
          <div className="border border-[#009FBD]  rounded-[30px] flex flex-col items-center gap-[5px] px-[6px] md:h-[48%]  ">
            <img src={borrow} alt="" className="w-[120px] " />
            <h1 className="font-bold  underline text-sm">Borrow $STC</h1>
            <p className="text-xs text-center ">
              Stable Coin ($STC) is Stable Borrow (STB) Official Token, it’s a
              fully Decentralized and collateral backed token that’s maintains
              1usd as it’s price making it a Stable Token ...{" "}
              <Link to="/faqs" className="text-[#865DFF] hover:underline ">
                learn more
              </Link>
            </p>
            <button className="w-[120px] h-[30px] bg-[#009FBD] hover:bg-opacity-75 rounded-lg text-xs  ">
              Borrow now
            </button>
          </div>
          <div className="border border-[#009FBD]  rounded-[30px] flex flex-col items-center gap-[10px] p-[6px] h-[48%]  ">
            <img src={earn} alt="" className="w-[80px] " />
            <h1 className="font-bold underline text-sm">Earn $STC</h1>
            <p className="text-xs text-center ">
              Register as an haunter today to earn as you play by haunting
              vaults in liquidation and regulating prices. Earn various tokens
              that can be exchanged to any token via exchange UI ...
              <Link to="/faqs" className="text-[#865DFF] hover:underline ">
                learn more
              </Link>
            </p>
            <button className="w-[120px] h-[30px] bg-[#009FBD] hover:bg-opacity-75 rounded-lg text-xs ">
              Earn now
            </button>
          </div>
        </div>
        <div className="border border-[#009FBD]  rounded-[30px] flex flex-col items-center gap-[10px] p-[6px] w-[45%] ">
          <img src={exchange} alt="" className="w-[80px] " />
          <h1 className="font-bold underline text-sm">Exchange</h1>
          <p className="text-xs text-center px-[28px] ">
            Stable Swap is Stable Borrow Official Exchange, it’s a Decentralized
            Exchange with Unique Protocols that allows users Swap Tokens and
            earn as a Liquidity provider and Pool Creator.
            <br />
            <br /> Our unique automatic market maker protocol allows users
            exchange Tokens instantly without waiting for orders to be filled
            and automatically determine the exchange rate on each transaction
            and at same time makes both interest earned and tokens deposited
            available for liquidity providers. <br />
            <br /> Stable Swap keeps it’s users safe through unique security on
            and off chain to screen each token listed by project owners and take
            damage deposit in advance to keep scam tokens away ...
            <Link to="/faqs" className="text-[#865DFF] hover:underline ">
              learn more
            </Link>
          </p>
          <button className="w-[120px] h-[30px] bg-[#865DFF] hover:bg-opacity-75 rounded-lg text-xs mt-[20px] ">
            Exchange
          </button>
        </div>
      </body>
    </div>
  );
}

export default Info;
