import React from "react";
import vaultmgt from "../../assets/borrow/vaultmgt.svg";
import generate from "../../assets/borrow/generate.svg";
import confirmations from "../../assets/borrow/confirmations.svg";

function BorrowNav({ handleVault, handleGenerateSTC, handleConfirm }) {
  let textColor = "text-[#585858]";
  let bgColor = "bg-[#585858]]";

  if (vaultmgt) {
    textColor = "text-white";
  }
  if (generate) {
    textColor = "text-white";
  }
  if (confirmations) {
    textColor = "text-white";
  }

  if (vaultmgt) {
    bgColor = "bg-white";
  }
  if (generate) {
    bgColor = "bg-white";
  }

  return (
    <div className="text-white  bg-[#202225]  flex items-center  justify-between h-[7.47vh] px-[33px] rounded-[15px] ">
      <div className="flex items-center gap-2  font-semibold ">
        <img src={vaultmgt} alt="" className="w-[20px] " />
        <p
          className={`
            ${textColor}
        `}
        >
          Vault Management
        </p>
      </div>
      <div className={`w-[135px] h-[2px] ${bgColor}`}></div>
      <div className="flex items-center gap-2 justify-between">
        <img src={generate} alt="" className="w-[20px] " />
        <p className={`${textColor}`}>Generate STC</p>
      </div>
      <div className={`${bgColor} w-[132px] h-[2px] `}></div>
      <div className="flex items-center gap-2 justify-between">
        <img src={confirmations} alt="" className="w-[20px] " />
        <p className={`${textColor}`}>Confirmations</p>
      </div>
    </div>
  );
}

export default BorrowNav;
