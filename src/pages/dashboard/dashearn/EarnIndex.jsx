import React,{useState} from "react";
import haunt from "../../../assets/dashboard/haunt.svg";
import filter from "../../../assets/dashboard/filter.svg";
import search from "../../../assets/dashboard/search.svg";
import vaultsData from "../../../data/vaultsData";
import { motion, AnimatePresence } from 'framer-motion';

function EarnIndex({web3, stb, account, colRatio, hauntedVlts, liquidatedVlts, _onHauntClick}) {
  const [isBouncing, setIsBouncing] = useState(true);
  const getArrayLength = (_array) => {
    let finalRes = [];
    _array.forEach((item) => {
      if (item.created_at > 0) {
        finalRes.push(item);
      }
    });
    return finalRes.length;
  }

  return (
    <div className="">
      <h1 className="w-full bg-[#202225] flex items-center justify-center text-[#B0B0B0] font-bold text-[1.125em] border-[#585858] border-dashed border rounded-[7px] h-[4.35vh] mb-[1.48vh] ">
        Overview
      </h1>
      <div className="flex justify-center items-center gap-[40px] mb-[5.93vh]  ">
        <div className="w-[22.84vw] h-full rounded-[20px] bg-[#12A92A] flex flex-col items-center justify-center text-[#D9D9D9] py-[1.3vh] gap-[2.59vh]  ">
          <div className="flex flex-col items-center">
            <h1 className="font-bold">Total Vaults Haunted:</h1>
            {hauntedVlts && (
                  <p className="mt-[-5px] text-[1.5em]  font-medium ">{getArrayLength(hauntedVlts)}</p>
            )}
            {!hauntedVlts && (
                <p className="mt-[-5px] text-[1.5em]  font-medium "></p>
            )}
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-bold">Total Payout:</h1>
            <p className="mt-[-5px] text-[1.5em] font-medium ">350000.0000 XDC</p>
          </div>
        </div>
      <div onClick={_onHauntClick} className="bg-[#202225] rounded-[20px] h-[16.61vh] w-[6.56vw] flex items-center justify-center haunt border-[3px] border-[#009FBD] cursor-pointer">

      <AnimatePresence>
        <motion.img
          src={haunt}
          alt=""
          className={`w-[4.48vw] h-[9.9vh] ${isBouncing ? 'animate-bounce' : ''}`}
          initial={{ y: 0 }}
          animate={{ y: isBouncing ? [-10, 0] : 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
    </div>

        <div className="w-[22.84vw] h-full rounded-[20px] bg-[#12A92A] flex flex-col items-center justify-center text-[#D9D9D9] py-[1.3vh] gap-[2.59vh]  ">
          <div className="flex flex-col items-center">
            <h1 className="font-bold">Current Collateral Ratio:</h1>
            <p className="mt-[-5px] text-[1.5em]  font-medium ">{colRatio}</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="font-bold">Total Vaults in Liquidity:</h1>
            {liquidatedVlts && (
              <p className="mt-[-5px] text-[1.5em] font-medium ">{getArrayLength(liquidatedVlts)}</p>
            )}
            {!liquidatedVlts && (
                <p className="mt-[-5px] text-[1.5em]  font-medium "></p>
            )}
          </div>
        </div>
      </div>
      <h1 className="w-full bg-[#202225] flex items-center justify-center text-[#B0B0B0] font-bold text-[1.125em] border-[#585858] border-dashed border rounded-[7px] h-[4.35vh] mb-[2.73vh] ">
        Haunt History
      </h1>
      <div className="flex w-full justify-between mb-[3.22vh] h-[4.1vh] ">
        <div className="h-full flex gap-4">
          <div className="relative h-full">
            <input
              type="search"
              name=""
              id=""
              className="h-full w-[426px] rounded-lg bg-[#B0B0B0] pl-[50px] placeholder:text-[#292C31] text-[#292C31] "
              placeholder="Search..."
            />
            <img
              src={search}
              alt=""
              className="w-[24px] h-[2.3vh] absolute top-1.5 left-3  "
            />
          </div>
          <button className="w-[2.9vw] h-full rounded-sm border border-[#B0B0B0] flex items-center justify-center ">
            <img src={filter} alt="" className="w-[24px] h-[2.34vh]" />
          </button>
        </div>
        <h2 className="text-[#B0B0B0] font-bold bg-[#202225] rounded-lg w-[191px] flex items-center justify-center ">
          Total Vaults: {vaultsData.length}
        </h2>
      </div>
      <div className="table w-full text-[#B0B0B0] text-[1rem]  ">
        <div className="bg-[#202225] py-[1vh] flex justify-between items-center pl-[22px] border-b border-[#B0B0B0]  ">
          <h1 className="w-[200px]">Activity</h1>
          <h1 className="w-[200px]">Date and Time</h1>
          <h1 className="w-[200px]">Tx Hash</h1>
        </div>
        <div className="h-[20.85vh] bg-[#292C31] overflow-auto ">
          {vaultsData.map((vault) => (
            <div
              className="flex justify-between items-center pl-[22px] py-[1vh] border-b border-[#B0B0B0]  "
              key={vault.id}
            >
              <h1 className="w-[200px]">{vault.activity}</h1>
              <h1 className="w-[200px] ">
                {vault.date} | {vault.time}
              </h1>
              <h1 className="w-[200px]">{vault.txHash}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EarnIndex;
