import React, {useContext, useEffect} from "react";
import borrow from "../assets/info/Borrow.svg";
import exchange from "../assets/info/Exchange.svg";
import earn from "../assets/info/Earn.svg";
import { Link, useNavigate } from "react-router-dom";
import LandingBody from "../layouts";
import { useAbout } from "../context/aboutContext";
import { Web3ModalContext } from "../contexts/web3ModalContext";

function Info() {
  const { navigateToAbout } = useAbout();
  const navigate = useNavigate();
  return (
    <LandingBody>
      <body className="md:mx-[60px] md:mt-[48px] flex justify-between text-white  min-h-[calc(100vh-180px)] overflow-hidden  ">
        <div className=" flex-col flex justify-between md:w-[45%] ">
          <div className="border border-[#009FBD]  rounded-[30px] flex flex-col items-center gap-[5px] px-[6px] py-2 md:h-[48%]  ">
            <img src={borrow} alt="" className="w-[80px] " />
            <h1 className="font-black border-b-2 border-[#009FBD] text-sm ">
              Borrow STC
            </h1>
            <p className="text-center mx-4 mt-2 text-[#FFFFFF] text-xs ">
              <span className="font-bold text-white">Stable Coin ($STC)</span>{" "}
              is Stable Borrow (STB) Official Token, it’s a fully Decentralized
              and collateral backed token that’s maintains 1usd as it’s price
              making it a Stable Token ...{" "}
              <Link
                to="/about"
                className="text-[#865DFF] underline underline-offset-2 hover:underline cursor-pointer "
                onClick={() => navigateToAbout("Borrow")}
              >
                learn more
              </Link>
            </p>
            <button className="bg-[#009FBD] hover:bg-opacity-75 rounded-lg text-xs px-[20px] py-2 mt-2" onClick={() => {navigate("/borrow")}}>
              Borrow now
            </button>
          </div>
          <div className="text-xs border border-[#009FBD]  rounded-[30px] flex flex-col items-center gap-[5px] px-[6px] py-2 md:h-[48%]  ">
            <img src={earn} alt="" className="w-[70px] " />
            <h1 className="font-black border-b-2 border-[#009FBD] text-sm ">
              Earn STC
            </h1>
            <p className="text-center mx-4 mt-2 text-[#FFFFFF] ">
              Register as an haunter today to earn as you play by haunting
              vaults in liquidation and regulating prices. Earn various tokens
              that can be exchanged to any token via exchange UI ...
              <Link
                to="/about"
                className="text-[#865DFF] underline underline-offset-2 hover:underline "
                onClick={() => navigateToAbout("Earn")}
              >
                learn more
              </Link>
            </p>
            <button onClick={() => {navigate("/register")}} className="bg-[#009FBD] hover:bg-opacity-75 rounded-lg text-xs px-[20px] py-2 mt-2">
              Earn now
            </button>
          </div>
        </div>
        <div className="text-xs border border-[#009FBD]  rounded-[30px] flex flex-col items-center gap-[10px] py-[6px] px-[20px] w-[45%] ">
          <img src={exchange} alt="" className="w-[80px] " />
          <h1 className="font-black border-b-2 border-[#009FBD] text-sm ">
            Exchange
          </h1>

          <p className="text-center mx-4 mt-2 text-[#FFFFFF] ">
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
            <Link
              to="/about"
              className="text-[#009FBD] hover:underline "
              onClick={() => navigateToAbout("Exchange")}
            >
              learn more
            </Link>
          </p>
          <button className="bg-[#9114de] hover:bg-opacity-75 rounded-lg text-xs px-[20px] py-2 mt-2">
            Exchange
          </button>
        </div>
      </body>
    </LandingBody>
  );
}

export default Info;
