import React, { useState } from "react";
import secure from "../../../assets/dashboard/secure.svg";
import wright from "../../../assets/dashboard/wright.svg";
import SecurityModal from "./SecurityModal";

function Verification({ showSecurityModal, setShowSecurityModal }) {
  const handleSecure = () => {
    setShowSecurityModal(true);
  };

  return (
    <div className="flex flex-col items-center text-[#B0B0B0] font-semibold text-sm gap-[1.87rem] relative">
      <div className="w-full h-auto border-[3.5px] border-[#009FBD80] rounded-[1.88rem] py-[0.88rem] px-[3.12rem] flex flex-col items-center text-center gap-2 ">
        <p>
          Verify Beneficiary wallet belongs to you by signing a message sent to
          the wallet.
        </p>
        <p>
          <span className="text-[#009fbd] ">Note:</span> Gas fee is not needed
          to sign the message
        </p>
        <button className="bg-[#009FBD] text-white flex items-center justify-center gap-2 w-[10.63vw] h-[4.54vh] rounded-[0.44rem] ">
          Proceed <img src={wright} alt="" className="w-[1.50em] h-[1.50em]" />
        </button>
      </div>
      <div className="w-full h-auto border-[3.5px] border-[#009FBD80] rounded-[1.88rem] py-[1.54rem] px-[3.12rem] flex flex-col items-center text-center gap-[1.88rem] ">
        <p>You need to verify you are human to proceed.</p>
        <p>
          <span className="text-[#009fbd] ">Note:</span> This will be
          automatically generated.
        </p>
      </div>
      <button
        className="bg-[#585858] text-[#B0B0B0] flex items-center justify-center gap-2 w-[14.74vw] h-[4.54vh] rounded-[0.44rem] mx-auto"
        onClick={handleSecure}
      >
        Secure My Token{" "}
        <img src={secure} alt="" className="w-[1.50em] h-[1.50em]" />
      </button>
    </div>
  );
}

export default Verification;
