import React, {useEffect, useState} from "react";
import back from "../../../assets/dashboard/back.svg";
import approve from "../../../assets/dashboard/approve.svg";
import { useDashboard } from "../../../contexts/dashboardContext";
import { getVault, payDebt } from "../../../lib/stbContract";
import { Big } from "big.js";

function PaybackSTCIndex({_web3, _stcBalance, _stb, _account}) {
  const {vaultId, onVaultClick, savePaybackRes,handleLoading} = useDashboard();

  const [xdcIn, setXdcIn] =useState(null);
  const [vaultInfo, setVaultInfo] =useState(null);
  const paybackBtn = document.getElementById("payback-btn");

  //get vault details
  useEffect(() => {
    (async () => {
      await getVault(_stb, parseInt(vaultId)).then((res) => {
        setVaultInfo(res);
      })
    })();
}, []);


  const handlePayback = async() => {
    if(paybackBtn && paybackBtn.style.backgroundColor === "rgb(0, 159, 189)" && xdcIn && parseFloat(xdcIn) > 0.0)
    {
      const amount = _web3.utils.toWei(String(xdcIn), "ether")
      handleLoading()
      await payDebt(_stb, vaultId, _account, amount ).then((res) => {
        handleLoading()
        savePaybackRes(res);
      })
    }
  }

  return (
    <div className="w-[760px] bg-[#202225] rounded-[30px] mx-auto pt-[3.0vh] pb-[4.2969vh] flex items-center flex-col">
      <h1 className="text-[#009FBD] font-bold text-[1.125rem] mb-[4.1vh] ">
        How much STC would you like to Pay Back?
      </h1>
      {vaultInfo && (
        <h2 className="text-[#FF1F1F] ">Total STC Debt: {new Big(vaultInfo.totalDebt).div("10e17").toFixed(4)} STC</h2>
      )}
      {!vaultInfo && (
        <h2 className="text-[#FF1F1F] ">Total STC Debt: </h2>
      )}
      <div className="text-[#292C31] relative ">
        <input
          type="number"
          className="w-[428px] h-[4.49vh] bg-[#B0B0B0] rounded-lg pl-[21px] placeholder:text-[#292C31] "
          placeholder="Enter Amount"
          onChange={(e) => {setXdcIn(e.target.value)}}
          onInput={(e) => {
            if(paybackBtn && parseFloat(e.target.value) > 0.0 && parseFloat(e.target.value) <= parseFloat(_stcBalance)) {
              paybackBtn.style.backgroundColor = "#009FBD"
            }else{
              paybackBtn.style.backgroundColor = "#585858"
            }
          }}
          value={xdcIn}
        />{" "}
        <p className="absolute top-0 right-2">STC</p>
      </div>
      <p className="text-white mb-[7.91vh] ">Balance: {_stcBalance} STC</p>
      <div className="text-white w-[350px] text-[1rem] mb-[6.738vh] ">
        <div className="flex w-full justify-between">
          <h3>Total STC to Pay:</h3>
          <p className="w-[100px]">${xdcIn}</p>
        </div>
        <div className="flex w-full justify-between">
          <h3>Current Price:</h3>
          <p className="w-[100px]">$1</p>
        </div>
        {vaultInfo && (
          <div className="flex w-full justify-between">
          <h3>New STC debt:</h3>
          <p className="w-[100px]">{(new Big(vaultInfo.totalDebt).div("10e17").toFixed(4) - parseFloat(xdcIn)).toFixed(4)}</p>
        </div>
        )}
        {!vaultInfo && (
          <div className="flex w-full justify-between">
          <h3>New STC debt:</h3>
          <p className="w-[100px]"></p>
        </div>
        )}
      </div>
      <div className="flex justify-between gap-[110px] ">
        <button onClick={() => onVaultClick(vaultId)}  className="border border-[#009FBD] w-[169px] h-[49px] rounded-lg text-white hover:opacity-75 flex items-center gap-2 justify-center">
          <img src={back} alt="" />
          Back
        </button>
        <button onClick={handlePayback} id="payback-btn" className="text-[#B0B0B0] bg-[#585858] w-[169px] h-[49px] rounded-lg hover:bg-opacity-75 flex items-center gap-2 justify-center">
          Payback
          <img src={approve} alt="" />
        </button>
      </div>
    </div>
  );
}

export default PaybackSTCIndex;
