import React from "react";
import back from "../../../assets/dashboard/back.svg";
import approve from "../../../assets/dashboard/approve.svg";

function PaybackSTCIndex() {
  return (
    <div className="w-[760px] bg-[#202225] rounded-[30px] mx-auto pt-[3.0vh] pb-[4.2969vh] flex items-center flex-col">
      <h1 className="text-[#009FBD] font-bold text-[1.125rem] mb-[4.1vh] ">
        How much STC would you like to Pay Back?
      </h1>
      <h2 className="text-[#FF1F1F] ">Total STC Debt: 100000.00 STC</h2>
      <div className="text-[#292C31] relative ">
        <input
          type="number"
          className="w-[428px] h-[4.49vh] bg-[#B0B0B0] rounded-lg pl-[21px] placeholder:text-[#292C31] "
          placeholder="Enter Amount"
        />{" "}
        <p className="absolute top-0 right-2">STC</p>
      </div>
      <p className="text-white mb-[7.91vh] ">Balance: 100000.00 STC</p>
      <div className="text-white w-[350px] text-[1rem] mb-[6.738vh] ">
        <div className="flex w-full justify-between">
          <h3>New Liquidation Price:</h3>
          <p className="w-[100px]">$1234.00</p>
        </div>
        <div className="flex w-full justify-between">
          <h3>New collateralization ratio:</h3>
          <p className="w-[100px]">123.00%</p>
        </div>
        <div className="flex w-full justify-between">
          <h3>New STC debt:</h3>
          <p className="w-[100px]">10000.00</p>
        </div>
      </div>
      <div className="flex justify-between gap-[110px] ">
        <button className="border border-[#009FBD] w-[169px] h-[49px] rounded-lg text-white hover:opacity-75 flex items-center gap-2 justify-center">
          <img src={back} alt="" />
          Back
        </button>
        <button className="text-[#B0B0B0] bg-[#585858] w-[169px] h-[49px] rounded-lg hover:bg-opacity-75 flex items-center gap-2 justify-center">
          Payback
          <img src={approve} alt="" />
        </button>
      </div>
    </div>
  );
}

export default PaybackSTCIndex;
