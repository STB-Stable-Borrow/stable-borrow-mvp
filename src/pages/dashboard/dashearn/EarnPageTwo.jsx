import React, {useState, useEffect} from "react";
import filter from "../../../assets/dashboard/filter.svg";
import search from "../../../assets/dashboard/search.svg";
import dashBorrowData from "../../../data/vaultsData";
import star from "../../../assets/dashboard/star.svg";
import unstar from "../../../assets/dashboard/unstar.svg";
import haunter from "../../../assets/dashboard/haunter.svg";
import { getAllVaults } from "../../../lib/stbContract";
import Big from "big.js";

function EarnPageTwo({xdcPrc, stb}) {

  const [allVaults, setAllVaults] = useState(null);
  const [isStar, setIsStar] = useState(false);

   //get all vaults 
   useEffect(() => {
    (async () => {
      await getAllVaults(stb).then((res) => {
        setAllVaults(res)
      })
    })();
}, []);

  return (
    <div>
      <h1 className="w-full bg-[#202225] text-center text-[#B0B0B0] font-bold text-[1.125em] border-[#585858] border-dashed border rounded-[7px] h-[4.35vh] mb-[1.48vh] ">
        Overview
      </h1>
      <div className="flex justify-center items-center gap-[230px] mb-[5.93vh]  ">
        <div className="w-[22.84vw] rounded-[20px] bg-[#12A92A] flex flex-col items-center justify-center text-[#D9D9D9] py-[2.3vh] gap-[2.59vh]  ">
          <div className="flex flex-col items-center">
            <h1 className="font-bold">XDC Price:</h1>
            <p className="mt-[-5px] text-[1.875em] font-medium ">${xdcPrc}</p>
          </div>
        </div>

        <div className="w-[22.84vw] rounded-[20px] bg-[#C16E08] flex flex-col items-center justify-center text-[#D9D9D9] py-[2.3vh] gap-[2.59vh]  ">
          <div className="flex flex-col items-center">
            <h1 className="font-bold">Active Haunters:</h1>
            <p className="mt-[-5px] text-[1.875em] font-medium ">20</p>
          </div>
        </div>
      </div>
      <h1 className="w-full bg-[#202225] text-center text-[#B0B0B0] font-bold text-[1.125em] border-[#585858] border-dashed border rounded-[7px] h-[4.35vh] mb-[2.73vh] ">
        All Vaults
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
        <h2 className="text-[#B0B0B0] font-bold bg-[#202225] rounded-lg w-[191px] text-center ">
          Total Vaults: {dashBorrowData.length}
        </h2>
      </div>
      <div className="table w-full h-[34.57vh] text-[#B0B0B0] text-[1rem] ">
        <div className="bg-[#202225] h-[5.76vh] flex justify-around items-center pl-[22px] border-b border-[#B0B0B0] ">
          <h1 className="w-[60px] ">Vault ID</h1>
          <h1 className=" w-[150px] ">Vault Name</h1>
          <h1 className=" w-[120px] ">Collateral</h1>
          <h1 className="w-[120px]">Debt</h1>
          <h1 className="w-[100px] ">Profit</h1>
          <h1 className="w-[60px]">Traffic</h1>
          <h1 className="w-[24px]  "> </h1>
          <h1 className="w-[24px] "> </h1>
        </div>
        <div className="h-[28.8vh] overflow-y-auto">
          {allVaults && (
            <>
            {allVaults.map((item) => (
              <div className="bg-[#292C31] h-[5.76vh] flex justify-around items-center pl-[22px] border-b border-[#B0B0B0] ">
                <p className="w-[60px] ">#{item.id}</p>
                <p className=" w-[150px] ">{item.id}</p>
                <p className=" w-[120px]   ">{new Big(item.lck_collateral).div("10e17").toFixed(4)}</p>
                <p className="w-[120px]">{new Big(item.debt).div("10e17").toFixed(4)}</p>
                <p className="w-[100px] ">$100</p>
                <p className="w-[60px] text-center ">3</p>
                <div className="w-[24px] ">
                  <img
                    onClick={() => setIsStar(!isStar)}
                    src={isStar ? star : unstar}
                    alt=""
                    className=" h-[2.34vh]"
                  />
                </div>
                <div className=" w-[24px]">
                  <img
                    src={haunter}
                    alt=""
                    className=" h-[2.34vh]"
                  />
                </div>
              </div>
            ))}
            </>
          )}
          {!allVaults && (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default EarnPageTwo;
