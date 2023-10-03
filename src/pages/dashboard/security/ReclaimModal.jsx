import React from "react";
import check from "../../../assets/dashboard/check.svg";

function ReclaimModal() {
  return (
    <div className="text-[#B0B0B0]">
      <h3 className="font-black text-[#009FBD] text-center mb-[2.19em] ">
        Your STB Soulbound Token has been Reclaimed Successfully!
      </h3>
      <p className=" text-sm text-center font-semibold mb-[3.5rem]">
        <span className="text-[#009FBD]">NOTE: </span>Your token will be
        currently insecure, manually secure it under security by providing
        answers to some questions and verifying that you are a human.
      </p>
      <button className="w-[10.36vw] flex  text-white items-center justify-center gap-2 h-[4.54vh] mx-auto bg-[#009FBD] rounded-[0.44rem] text-sm">
        Done <img src={check} alt="" className="w-[1.24em]" />
      </button>
    </div>
  );
}

export default ReclaimModal;
