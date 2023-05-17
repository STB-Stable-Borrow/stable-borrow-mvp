import React from "react";
import error from "../../assets/borrow/error.svg";

function ErrorConfirm() {
  return (
    <div className="bg-[#292C31] rounded-[12px] flex flex-col items-center gap-[4vh] w-[500px] py-[10vh] px-[50px] ">
      <img src={error} alt="" className="w-[50px]" />
      <p className="text-[#E32424] text-center ">
        Oops! Error while generating vault and requested STC!
      </p>
      <p className="text-center">
        <span className="text-[#E32424] ">Note:</span> Inputed XDC as deposit in
        previous steps was not removed from your wallet, make sure you have
        enough XDC to cover both gas fee and deposit and try again.
      </p>
    </div>
  );
}

export default ErrorConfirm;
