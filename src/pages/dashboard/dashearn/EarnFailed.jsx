import React from "react";
import handLeft from "../../../assets/dashboard/hand-left.svg";
import handRight from "../../../assets/dashboard/hand-right.svg";
import oops from "../../../assets/dashboard/oops.svg";

function EarnFailed() {
  return (
    <div className="w-full h-[64.91vh] flex items-center justify-center bg-[#202225] rounded-[15px] ">
      <div className="bg-[#292C31] rounded-[12px] w-[38.28vw] flex flex-col items-center justify-center pb-[7.22vh] px-[3.19vw] pt-[2vh] ">
        <div className="flex justify-between items-center w-full">
          <img src={handLeft} alt="" className="w-[9.48vw] h-[9.48vw] " />
          <img src={handRight} alt="" className="w-[9.48vw] h-[9.48vw] " />
        </div>
        <img src={oops} alt="" className="w-[7.86vw] h-[7.86vw] mt-[-7vh] " />
        <h1 className="text-[#FF1F1F]  font-semibold mb-[3.52vh] text-2xl ">
          Ooppss!
        </h1>
        <p className="text-center text-[#009fbd]  font-semibold text-sm ">
          Unable to Liquidate Vault-01 now!
          <br />
          Better luck next time!
        </p>
      </div>
    </div>
  );
}

export default EarnFailed;
