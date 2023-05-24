import React from "react";

import SuccessfulModal from "./SuccessfulModal";
import PaybackSTCIndex from "./PaybackSTCIndex";
import FailedModal from "./FailedModal";

function PaybackSTC() {
  return (
    <>
      <div>
        <h1 className="w-full bg-[#202225] text-center text-[#B0B0B0] font-bold text-[1.125rem] border-[#585858] border-dashed border rounded-[7px] h-[4.5989vh] mb-[1.53vh] flex justify-center items-center gap-[31px] ">
          Payback STC
        </h1>
        {/* <PaybackSTCIndex /> */}
        {/* <SuccessfulModal /> */}
        <FailedModal />
      </div>
    </>
  );
}

export default PaybackSTC;
