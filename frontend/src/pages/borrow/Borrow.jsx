import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/borrow/logo.svg";
import BorrowNav from "./BorrowNav";
import { useBorrow } from "../../contexts/borrowContext/borrowContext";
import VaultMgt from "./VaultMgt";
import Generate from "./Generate";
import Confirmations from "./Confirmations";

function Borrow() {
  const {
    vault,
    genateSTC,
    confirm,
    handleVault,
    handleGenerateSTC,
    handleConfirm,
  } = useBorrow();
  return (
    <div className="w-screen h-screen bg-[#292C31] ">
      <Link to={"/"}>
        <img
          src={logo}
          alt=""
          className=" pt-[6vh] pl-[6.2vw] mb-[5.87vh] h-[9.57vh] "
        />
      </Link>
      <div className="mx-[147px]    ">
        <BorrowNav
          handleConfirm={handleConfirm}
          handleGenerateSTC={handleGenerateSTC}
          handleVault={handleVault}
          vault={vault}
          genateSTC={genateSTC}
          confirm={confirm}
        />
        <div className="bg-[#202225] w-full mt-[3.2vh] flex items-center justify-center text-white rounded-[15px] h-[70vh] ">
          {vault && <VaultMgt />}
          {genateSTC && <Generate />}
          {confirm && <Confirmations />}
        </div>
      </div>
    </div>
  );
}

export default Borrow;
