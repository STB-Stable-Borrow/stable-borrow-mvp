import React from "react";
import clapLeft from "../../../assets/dashboard/clap-left.svg";
import clapRight from "../../../assets/dashboard/clap-right.svg";
import medal from "../../../assets/dashboard/medal.svg";

function EarnSuccess() {
  return (
    <div className="w-full h-[64.91vh] flex items-center justify-center bg-[#202225] rounded-[15px] ">
      <div className="bg-[#292C31] rounded-[12px] w-[38.28vw] flex flex-col items-center justify-center pb-[7.22vh] px-[3.19vw] pt-[2vh] ">
        <div className="flex justify-between items-center w-full">
          <img src={clapLeft} alt="" className="w-[9.48vw] h-[9.48vw] " />
          <img src={clapRight} alt="" className="w-[9.48vw] h-[9.48vw] " />
        </div>
        <img src={medal} alt="" className="w-[7.86vw] h-[7.86vw] mt-[-7vh] " />
        <h1 className="text-[#009FBD]  font-semibold mb-[3.52vh] text-2xl ">
          Congratulations!
        </h1>
        <p className="text-center text-[#009fbd]  font-semibold text-sm ">
          Vault-01 has been Haunted successfully! <br />
          Your Payout is 100 XDC
        </p>
      </div>
    </div>
  );
}

export default EarnSuccess;
