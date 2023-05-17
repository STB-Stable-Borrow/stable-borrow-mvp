import React from "react";
import back from "../../assets/borrow/back.svg";
import gen from "../../assets/borrow/gen.svg";

function Generate({ onNextButtonClicked, onBackButtonClicked }) {
  return (
    <div className="bg-[#292C31] rounded-[12px] flex flex-col gap-[4vh] w-[735px] py-[2vh] px-[86px] ">
      <div className="flex flex-col gap-[10px] font-bold ">
        <div className="flex items-center justify-between">
          <h1>XDC to Deposit:</h1>
          <p>$100000.00</p>
        </div>
        <div className="flex items-center justify-between">
          <h1>STC to Generate:</h1>
          <p>$100000.00</p>
        </div>
        <div className="flex items-center justify-between">
          <h1>Stability Fee:</h1>
          <p>$100000.00</p>
        </div>
        <div className="flex items-center justify-between">
          <h1>Liquidity Fee:</h1>
          <p>$100000.00</p>
        </div>
        <div className="flex items-center justify-between">
          <h1>Liquidity Ratio:</h1>
          <p>$100000.00</p>
        </div>
      </div>
      <p className="text-center">
        <span className="text-[#865DFF] ">Note:</span> The amount of STC you are
        generating is putting your vault at risk of Liquidation.
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
