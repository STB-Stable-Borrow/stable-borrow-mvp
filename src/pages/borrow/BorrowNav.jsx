import React from "react";
import vaultmgt from "../../assets/borrow/vaultmgt.svg";
import generate from "../../assets/borrow/generate.svg";
import confirmations from "../../assets/borrow/confirmations.svg";
import { useBorrow } from "../../contexts/borrowContext/borrowContext";

function BorrowNav() {
  const { vault, generateSTC, confirm } = useBorrow();
  return (
    <div className="text-white  bg-[#202225]  flex items-center  justify-between h-[7.47vh] px-[33px] rounded-[15px] ">
      <div className="flex items-center gap-2  font-semibold ">
        <img
          src={vaultmgt}
          alt=""
          className={`w-[20px]  ${vault ? "" : "opacity-75"} `}
        />
        <p
          className={`
            ${vault ? "text-white" : "text-[#8B8E94]"}
        `}
        >
          Vault Management
        </p>
      </div>
      <div
        className={`w-[135px] h-[2px]  ${
          generateSTC ? "bg-white" : "bg-[#8B8E94]"
        }`}
      ></div>
      <div className="flex items-center gap-2 justify-between">
        <img
          src={generate}
          alt=""
          className={`w-[20px]  ${generateSTC ? "" : "opacity-75"} `}
        />
        <p className={` ${generateSTC ? "text-white" : "text-[#8B8E94]"}`}>
          Generate STC
        </p>
      </div>
      <div
        className={` ${
          confirm ? "bg-white" : "bg-[#8B8E94]"
        } w-[132px] h-[2px] `}
      ></div>
      <div className="flex items-center gap-2 justify-between">
        <img
          src={confirmations}
          alt=""
          className={`w-[20px]  ${confirm ? "" : "opacity-75"} `}
        />
        <p className={` ${confirm ? "text-white" : "text-[#8B8E94]"}`}>
          Confirmations
        </p>
      </div>
    </div>
  );
}

export default BorrowNav;
