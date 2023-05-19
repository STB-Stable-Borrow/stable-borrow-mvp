import React, {useState} from "react";
import back from "../../assets/borrow/back.svg";
import gen from "../../assets/borrow/gen.svg";
import { useBorrow } from "../../contexts/borrowContext/borrowContext";

function Generate({ onNextButtonClicked, onBackButtonClicked, _xdcPrice, _colRatio }) {
  const {totalStcOut,totalXdcIn} = useBorrow();

  console.log("totalin: ", totalXdcIn)
  console.log("totalout: ", totalStcOut)
  
  return (
    <div className="bg-[#292C31] rounded-[12px] flex flex-col gap-[4vh] w-[735px] py-[2vh] px-[86px] ">
      <div className="flex flex-col gap-[10px] font-bold ">
        <div className="flex items-center justify-between">
          <h1>Total XDC to Deposit Amount:</h1>
          <p>${totalXdcIn * _xdcPrice}</p>
        </div>
        <div className="flex items-center justify-between">
          <h1>Total STC To Generate Amount:</h1>
          <p>${totalStcOut}</p>
        </div>
        <div className="flex items-center justify-between">
          <h1>XDC To Deposit:</h1>
          <p>{totalXdcIn}</p>
        </div>
        <div className="flex items-center justify-between">
          <h1>STC To Generate:</h1>
          <p>{totalStcOut}</p>
        </div>
        <div className="flex items-center justify-between">
          <h1>Current XDC Price:</h1>
          <p>${_xdcPrice}</p>
        </div>
        <div className="flex items-center justify-between">
          <h1>Liquidity Ratio:</h1>
          <p>{_colRatio}</p>
        </div>
      </div>
      <p className="text-center">
        <span className="text-[#865DFF] ">Note:</span> Total XDC Amount may vary depending on price action but XDC to deposit must be the same verify on your wallet before you approve transaction. Thanks
      </p>
      <div className="flex items-center justify-center gap-[110px] mt-[5.19vh] mb-[5.5vh] ">
        <button
          className="border border-[#009FBD] w-[164px] h-[7.95vh] rounded-lg flex items-center justify-center gap-2 bg-inherit hover:opacity-75 "
          onClick={onBackButtonClicked}
        >
          <img src={back} alt="" />
          Back
        </button>
        <button
          className="bg-[#009FBD] w-[210px] h-[7.95vh] rounded-lg flex items-center justify-center gap-2  hover:bg-opacity-75 "
          onClick={onNextButtonClicked}
        >
          Generate
          <img src={gen} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Generate;
