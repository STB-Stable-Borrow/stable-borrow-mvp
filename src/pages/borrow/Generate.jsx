import React, { useState, useEffect } from "react";
import back from "../../assets/borrow/back.svg";
import gen from "../../assets/borrow/gen.svg";
import { useBorrow } from "../../contexts/borrowContext/borrowContext";
import { createVault } from "../../lib/stbContract";

function Generate({
  onNextButtonClicked,
  onBackButtonClicked,
  _xdcPrice,
  _colRatio,
  _stb,
  _account,
  _web3,
}) {
  const { totalStcOut, totalXdcIn, handleGenerateSTCNext } = useBorrow();

  //handles generate click event
  const handleGenerate = async () => {
    const amt = _web3.utils.toWei(String(totalXdcIn), "ether");
    await createVault(_stb, _account, amt).then((res) => {
      handleGenerateSTCNext(res);
    });
  };

  return (
    <div className="bg-[#292C31] rounded-[12px] flex flex-col gap-[4vh] w-[735px] py-[2vh] px-[86px] ">
      <div className="flex flex-col gap-[2vh] font-bold ">
        <div className="flex items-center justify-between">
          <h1 className="text-[] ">Total XDC to Deposit Amount:</h1>
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
      <p className="text-center text-[.75rem] ">
        <span className="text-[#865DFF] ">Note:</span> Total XDC Amount may vary
        depending on price action but XDC to deposit must be the same verify on
        your wallet before you approve transaction. Thanks
      </p>
      <div className="flex items-center justify-center gap-[110px] mt-[3.19vh] mb-[3.5vh] text-[.75rem] ">
        <button
          className="border border-[#009FBD] w-[8.54vw] h-[5.95vh] rounded-lg flex items-center justify-center gap-2 bg-inherit hover:opacity-75 "
          onClick={onBackButtonClicked}
        >
          <img src={back} alt="" className="w-[1.25vw] h-[1.25vw] " />
          Back
        </button>
        <button
          className="bg-[#009FBD] w-[8.54vw] h-[5.95vh] rounded-lg flex items-center justify-center gap-2  hover:bg-opacity-75 "
          onClick={handleGenerate}
        >
          Generate
          <img src={gen} alt="" className="w-[1.25vw] h-[1.25vw] " />
        </button>
      </div>
    </div>
  );
}

export default Generate;
