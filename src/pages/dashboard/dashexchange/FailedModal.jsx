import React from "react";
import failed from "../../../assets/dashboard/failed.svg";

function TokenizationFailedModal({_setConfirmationRes}) {
  return (
    <div onLoad={() => {
      setTimeout(() => {
        _setConfirmationRes(null);
      }, 5000);
    }} className="bg-[#202225] w-[39.58vw] rounded-[30px] flex flex-col items-center font-semibold pt-[14.746vh] pb-[10.156vh] mx-auto ">
      <img
        src={failed}
        alt=""
        className="w-[151px] h-[14.746vh] mb-[4.39vh] "
      />
      <h1 className="text-[#FF1F1F] mb-[5.1758vh] ">Transaction Failed!</h1>
      <p className="text-center text-white w-[433px]">
        <span className="text-[#FF1F1F] ">Note: </span>You will be redirected to
        the previous page in five(5) seconds, don’t cancel or refresh this page.
      </p>
    </div>
  );
}

export default TokenizationFailedModal;
