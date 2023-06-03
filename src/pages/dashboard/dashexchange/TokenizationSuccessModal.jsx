import React from "react";
import success from "../../../assets/dashboard/success.svg";

function TokenizationSuccessModal() {
  return (
    <div className="h-full w-full">
      <h1 className="w-full bg-[#202225] text-[#B0B0B0] font-bold text-[1.125rem] border-[#585858] border-dashed border rounded-[7px] py-[0.5vh] mb-[1.56vh] flex items-center  justify-center ">
        Tokenization
      </h1>
      <div className="bg-[#202225] w-[39.58vw] rounded-[30px] flex flex-col items-center font-semibold pt-[14.746vh] pb-[10.156vh] mx-auto ">
        <img
          src={success}
          alt=""
          className="w-[151px] h-[14.746vh] mb-[4.39vh] "
        />
        <h1 className="text-[#009FBD] mb-[5.1758vh] ">
          Your Transaction was Successful!
        </h1>
        <p className="text-center text-white w-[433px]">
          <span className="text-[#009FBD] ">Note: </span> You will be redirected
          to Exchange in five(5) seconds, don’t cancel or refresh this page.
        </p>
      </div>
    </div>
  );
}

export default TokenizationSuccessModal;
