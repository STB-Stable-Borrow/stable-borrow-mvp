import React, { useState,useEffect } from "react";
import arrow from "../../../assets/dashboard/arrow.svg";
import vaultsData from "../../../data/vaultsData";
import { useNavigate } from "react-router-dom";
import { useBorrow } from "../../../contexts/borrowContext/borrowContext";

function HomeIndex({isReg, totalLck, totalDebt, xdcPrc, hauntedVlts, liquidatedVlts, colRatio, allVaults}) {

  const [isBorrowOverview,setIsBorrowOverview] = useState(false)
  const [isEarnOverview,setIsEarnOverview] = useState(false)
  const navigate = useNavigate();
  const {setFromDashborrow, setFromDashearn} = useBorrow();

  const getArrayLength = (_array) => {
    let finalRes = [];
    _array.forEach((item) => {
      if (item.created_at > 0) {
        finalRes.push(item);
      }
    });
    return finalRes.length;
  }

  useEffect(() => {
    if (totalLck || totalDebt !== null){
      setIsBorrowOverview(true)
    }
    if ( hauntedVlts !== null){
      setIsEarnOverview(true)
    }
  },[totalLck, totalDebt,hauntedVlts])
  
  return (
    <div className=" overflow-hidden ">
      <div className=" text-[#D9D9D9] flex justify-around mb-[5.09vh]   ">
        <div className={`${!isBorrowOverview && "opacity-10 cursor-not-allowed"} border-[2px] border-dashed border-[#585858] px-[1.04vw]   h-[34.26vh] min-w-[33.56vw] rounded-[40px] py-[1.94vh] bg-gradient-to-b 180deg from-[#009fbd] -52.27 to-[#344e53] 127.2% flex flex-col gap-[2.78vh] items-center `}>
          <h1 className="font-semibold">Borrow Overview</h1>
          <div className="flex justify-between gap-[19px] h-[16.20vh] ">
            <div className="bg-[#12A92A]  px-[1.88vw] rounded-[20px] flex flex-col items-center justify-center ">
              <h1 className="text-[0.675rem] font-bold ">Total Locked</h1>
              <p className="text-[1.25rem] font-medium">${(xdcPrc * totalLck).toFixed(4)}</p>
            </div>
            <div className="bg-[#FF1F1F] px-[1.88vw] rounded-[20px] flex flex-col items-center justify-center ">
              <h1 className="text-[0.675rem] font-bold ">Total Debt</h1>
              <p className="text-[1.25rem] font-medium">${1 * totalDebt}</p>
            </div>
          </div>
          {allVaults && allVaults.length < 10 && (
             <button onClick={() => {
              setFromDashborrow(true);
              navigate("/borrow")
            }} className={`${!isBorrowOverview && "cursor-not-allowed"} bg-[#009FBD] w-[12.66vw] py-[0.85vh] rounded-lg flex items-center justify-center gap-2 text-[0.85rem] text-white hover:bg-opacity-75`}>
              Borrow Now{" "}
              <img src={arrow} alt="" className="w-[2.22vh] h-[2.22vh] " />
            </button>
          )}
          {allVaults && allVaults.length > 10 && (
             <button disabled={true} className={`${!isBorrowOverview && "cursor-not-allowed"} bg-[#009FBD] w-[12.66vw] py-[0.85vh] rounded-lg flex items-center justify-center gap-2 text-[0.85rem] text-white hover:bg-opacity-75`}>
              Borrow Now{" "}
              <img src={arrow} alt="" className="w-[2.22vh] h-[2.22vh] " />
            </button>
          )}
          {!allVaults && (
             <button disabled={true} className={`${!isBorrowOverview && "cursor-not-allowed"} bg-[#009FBD] w-[12.66vw] py-[0.85vh] rounded-lg flex items-center justify-center gap-2 text-[0.85rem] text-white hover:bg-opacity-75`}>
              Borrow Now{" "}
              <img src={arrow} alt="" className="w-[2.22vh] h-[2.22vh] " />
            </button>
          )}
        </div>
        <div className={`${!isEarnOverview && "opacity-10 cursor-not-allowed"} border-[2px] border-dashed border-[#585858] px-[1.04vw]   h-[34.26vh] min-w-[33.56vw] rounded-[40px] py-[1.94vh] bg-gradient-to-b 180deg from-[#865DFF] -52.27 to-[#344e53] 127.2%  flex flex-col gap-[2.78vh] items-center`}>
          <h1 className="font-semibold">Earn Overview</h1>
          <div className="flex justify-between gap-[19px] h-[16.20vh] ">
            <div className="bg-[#12A92A] h-[16.20vh] py-[0.81vh]  px-[1.88vw] rounded-[20px] flex flex-col items-center justify-between ">
              <div className="flex flex-col items-center">
                <h1 className="text-[0.675rem] font-bold ">
                  Total Vaults Haunted:
                </h1>
                {hauntedVlts && (
                  <p className="text-[1.25rem] mt-[-0.74vh] font-medium">{getArrayLength(hauntedVlts)}</p>
                )}
                {!hauntedVlts && (
                  <p className="text-[1.25rem] mt-[-0.74vh] font-medium"></p>
                )}
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-[0.675rem] font-bold ">Total Payout:</h1>
                <p className="text-[1.25rem] mt-[-0.74vh] font-medium">
                  350000.0000 XDC
                </p>
              </div>
            </div>
            <div className="bg-[#C16E08] py-[0.81vh]  px-[1.88vw] rounded-[20px] flex flex-col items-center justify-between ">
              <div className="flex flex-col items-center">
                <h1 className="text-[0.675rem] font-bold ">
                  Current Collateral Ratio:
                </h1>
                <p className="text-[1.25rem] mt-[-0.74vh] font-medium">{colRatio}</p>
              </div>
              <div className="flex flex-col items-center">
                <h1 className="text-[0.675rem] font-bold ">
                  Total Vaults in Liquidation:
                </h1>
                {liquidatedVlts && (
                  <p className="text-[1.25rem] mt-[-0.74vh] font-medium">{getArrayLength(liquidatedVlts)}</p>
                )}
                {!liquidatedVlts && (
                   <p className="text-[1.25rem] mt-[-0.74vh] font-medium"></p>
                )}
              </div>
            </div>
          </div>
          {!isReg && (
            <button  onClick={() => {
              setFromDashearn(true);
              navigate("/register")
            }} className={`${!isEarnOverview && "cursor-not-allowed"} bg-[#865DFF] w-[12.66vw] py-[0.85vh] rounded-lg flex items-center justify-center gap-2 text-[0.85rem] text-white hover:bg-opacity-75 `}>
              Earn Now{" "}
              <img src={arrow} alt="" className="w-[2.22vh] h-[2.22vh] " />
            </button>
          )}
          {isReg && (
            <button disabled={true} className={`${!isEarnOverview && "cursor-not-allowed"} bg-[#865DFF] w-[12.66vw] py-[0.85vh] rounded-lg flex items-center justify-center gap-2 text-[0.85rem] text-white hover:bg-opacity-75 `}>
              Earn Now{" "}
              <img src={arrow} alt="" className="w-[2.22vh] h-[2.22vh] " />
            </button>
          )}
        </div>
      </div>
      <h1 className="w-full bg-[#202225] text-center text-[#B0B0B0] font-bold text-[1.125em] border-[#585858] border-dashed border rounded-[7px] h-[4.35vh] mb-[1.48vh] ">
        History
      </h1>
      <div className="table w-full text-[#B0B0B0] text-[1rem]  ">
        <div className="bg-[#202225] h-[5.76vh] flex justify-between items-center pl-[22px] border-b border-[#B0B0B0]  ">
          <h1 className="w-[300px]">Activity</h1>
          <h1 className="w-[300px]">Date and Time</h1>
          <h1 className="w-[300px]">Tx Hash</h1>
        </div>
        <div className="h-[21.85vh] bg-[#292C31] overflow-auto ">
          {vaultsData.map((vault, index) => (
            <div
              className="flex justify-between items-center pl-[22px] py-[1.94vh] border-b border-[#B0B0B0]  "
              key={index}
            >
              <h1 className="w-[300px]">{vault.activity}</h1>
              <h1 className="w-[300px] ">
                {vault.date} | {vault.time}
              </h1>
              <h1 className="w-[300px]">{vault.txHash}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeIndex;
