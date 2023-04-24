import React from "react";
import arrow from "../../assets/borrow/arrow.svg";
import dash from "../../assets/borrow/dash.svg";
import approve from "../../assets/borrow/approve.svg";
import back from "../../assets/borrow/back.svg";
import next from "../../assets/borrow/next.svg";

function VaultMgt() {
  return (
    <div>
      <div className="flex items-center pt-[2.5vh] px-[34px] gap-[16px] text-sm">
        <div className="bg-[#292c31] py-[12px] px-[24px] w-[400px] rounded-[12px] ">
          <h1 className="text-[#865DFF] text-center font-bold ">
            Configure your Vault
          </h1>
          <p className="text-center mb-[2.6vh] ">
            Simulate your vault by configuring the amount of collateral to
            deposit.
          </p>
          <div className=" mb-[2.1vh] ">
            <div className="flex items-center justify-between mb-1">
              <p>Deposit XDC</p>
              <p className="text-[#865dff] ">
                Balance: <span className="text-white">10000000.00 XDC</span>
              </p>
            </div>
            <div className="w-full relative text-[#292C31]">
              <input
                type="number"
                placeholder="Enter Amount"
                className="w-full bg-[#D5D5D5] rounded-[7px] h-[5.46vh] px-[21px] placeholder:text-[#292C31]  "
              />
              <h1 className="absolute top-1 right-[21px] font-semibold">XDC</h1>
            </div>
          </div>

          <div className="bg-[#202225] flex flex-col items-center py-[1vh] rounded-[12px] ">
            <h1 className="text-[#865DFF] text-center font-bold ">
              Generated STC
            </h1>
            <p className="mb-[2.75px]">
              Max: <span>10000000.00 STC</span>
            </p>
            <div className=" relative text-[#292C31]">
              <input
                type="number"
                className="w-[302px] bg-[#D5D5D5] rounded-[7px] h-[5.46vh] px-[21px]  "
              />
              <h1 className="absolute top-1 right-[21px] font-semibold">XDC</h1>
            </div>
          </div>
          <img src={dash} alt="" className="my-[1.4vh]" />
          <h1 className="text-[#865DFF] text-center font-bold ">
            Vault Changes
          </h1>
          <div className="text-xs">
            <div className="flex justify-between items-center">
              <h1>Collateralization Ratio:</h1>
              <small>0.00% → 211.04%</small>
            </div>
            <div className="flex justify-between items-center">
              <h1>Liquidation Price:</h1>
              <small>$0.00 → $1,560.00</small>
            </div>
            <div className="flex itme justify-between items-center">
              <h1>Max Gas Fee:</h1>
              <small>n/a</small>
            </div>
          </div>
        </div>
        <img src={arrow} alt="" className="w-[30px]" />
        <div className="bg-[#292c31] py-[12px] px-[24px] w-[400px] rounded-[12px] ">
          <h1 className="text-[#865DFF] text-center font-bold ">
            Configure your Vault
          </h1>
          <p className="text-center mb-[2.76vh] ">
            Simulate your vault by configuring the amount of collateral to
            deposit.
          </p>
          <p className="text-center mb-[2vh] ">
            <span className="text-[#865DFF] ">Note:</span> STB is only approved
            to transfer the collateral amount passed not less or more than.
          </p>
          <div className="flex flex-wrap justify-between gap-y-[3.3vh] mb-[5.27vh] text-xs ">
            <div className="w-[150px]  h-[8vh] bg-[#202225] rounded-[10px] py-[1.6vh] px-[13px] ">
              <h1 className="text-xs">Liquidation Price:</h1>
              <p className="font-bold">$0.00</p>
            </div>
            <div className="w-[150px]  h-[8vh] bg-[#202225] rounded-[10px] py-[1.6vh] px-[13px] ">
              <h1 className="text-xs">Collateralization Ratio:</h1>
              <p className="font-bold">$0.00</p>
            </div>
            <div className="w-[150px]  h-[8vh] bg-[#202225] rounded-[10px] py-[1.6vh] px-[13px] ">
              <h1 className="text-xs">Liquidation Price:</h1>
              <p className="font-bold">$0.00</p>
            </div>
            <div className="w-[150px]  h-[8vh] bg-[#202225] rounded-[10px] py-[1.6vh] px-[13px] ">
              <h1 className="text-xs">Current Price:</h1>
              <p className="font-bold">$0.00</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="w-[198px] h-[6.6vh] bg-[#865DFF] flex items-center justify-center gap-2 hover:bg-opacity-75 rounded-lg ">
              Approve
              <img src={approve} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[110px] mt-[3.19vh] mb-[5.5vh] ">
        <button className="border border-[#009FBD] w-[164px] h-[5.95vh] rounded-lg flex items-center justify-center gap-2 bg-inherit hover:opacity-75 ">
          <img src={back} alt="" />
          Back
        </button>
        <button className="bg-[#009FBD] w-[164px] h-[5.95vh] rounded-lg flex items-center justify-center gap-2  hover:bg-opacity-75 ">
          Next
          <img src={next} alt="" />
        </button>
      </div>
    </div>
  );
}

export default VaultMgt;
