import React from "react";
import failed from "../../../assets/dashboard/failed.svg";

function FailedModal() {
  return (
    <div className="bg-[#202225] w-[760px] rounded-[30px] flex flex-col items-center font-semibold pt-[14.746vh] pb-[10.156vh] mx-auto ">
      <img
        src={failed}
        alt=""
        className="w-[151px] h-[14.746vh] mb-[4.39vh] "
      />
      <h1 className="text-[#FF1F1F] mb-[5.1758vh] ">
        Your Transaction has Failed!
      </h1>
      <p className="text-center text-white w-[433px]">
        <span className="text-[#FF1F1F] ">Note:</span> You will be redirected
        back to the previous page in the next two seconds, don’t cancel or
        refresh this page.
      </p>
    </div>
  );
}

export default FailedModal;
