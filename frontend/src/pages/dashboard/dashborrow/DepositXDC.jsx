import React from "react";
import DepositXDCIndex from "./DepositXDCIndex";
import SuccessfulModal from "./SuccessfulModal";
import FailedModal from "./FailedModal";

function DepositXDC() {
  return (
    <div>
      <h1 className="w-full bg-[#202225] text-center text-[#B0B0B0] font-bold text-[1.125rem] border-[#585858] border-dashed border rounded-[7px] h-[4.5989vh] mb-[1.53vh] flex justify-center items-center gap-[31px] ">
        Deposit XDC
      </h1>
      {/* <DepositXDCIndex /> */}
      {/* <SuccessfulModal /> */}
      <FailedModal />
    </div>
  );
}

export default DepositXDC;
