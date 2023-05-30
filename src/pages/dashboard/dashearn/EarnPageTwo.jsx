import React, { useState, useEffect } from "react";
import haunt from "../../../assets/dashboard/haunt.svg";
import filter from "../../../assets/dashboard/filter.svg";
import search from "../../../assets/dashboard/search.svg";
import dashBorrowData from "../../../data/vaultsData";
import star from "../../../assets/dashboard/star.svg";
import unstar from "../../../assets/dashboard/unstar.svg";
import haunter from "../../../assets/dashboard/haunter.svg";
import { getAllVaults } from "../../../lib/stbContract";
import Big from "big.js";
import arrowLeft from "../../../assets/dashboard/arrowLeft.svg";

function EarnPageTwo({ xdcPrc, stb, _onBackClick }) {
  const [allVaults, setAllVaults] = useState(null);
  const [isStar, setIsStar] = useState([]);

  //get all vaults
  useEffect(() => {
    (async () => {
      await getAllVaults(stb).then((res) => {
        setAllVaults(res);
        setIsStar(res.map((item) => ({ id: item.id, status: false })));
      });
    })();
  }, []);

  const handleStarClick = (itemId) => {
    setIsStar((prevStars) =>
      prevStars.map((star) =>
        star.id === itemId ? { ...star, status: !star.status } : star
      )
    );
  };

  return (
    <div>

      <div className="w-full bg-[#202225] text-[#B0B0B0] font-bold text-[1.125rem] border-[#585858] border-dashed border rounded-[7px] h-[4.5989vh] mb-[1.53vh] flex justify-between items-center gap-[31px] pl-[2.86vw] pr-[33.93vw] ">

        <button
          onClick={_onBackClick}
          className="flex items-center gap-2 text-[#009FBD] text-sm "
        >
          <img src={arrowLeft} alt="" />
          Back
        </button>
        <h1 className=" ">Overview</h1>
      </div>

      <div className="flex justify-evenly items-center  mb-[5.93vh]  ">

        <div className="w-[22.84vw] rounded-[20px] bg-[#12A92A] flex flex-col items-center justify-center text-[#D9D9D9] py-[2.3vh] gap-[2.59vh]  ">
          <div className="flex flex-col items-center">
            <h1 className="font-bold">XDC Price:</h1>
            <p className="mt-[-5px] text-[1.875em] font-medium ">${xdcPrc}</p>
          </div>
        </div>
        <div
          className="bg-[#202225] rounded-[20px] h-[16.61vh] w-[6.56vw] flex items-center justify-center haunt border-[3px] border-[#009FBD] cursor-pointer"
        >
          <img
            src={haunt}
            alt=""
            className={`w-[4.48vw] h-[9.9vh] cursor-pointer`}
          />
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
        <div className="bg-[#202225] h-[5.76vh] flex justify-around items-center pl-[1.15vw] border-b border-[#B0B0B0] ">
          <h1 className="w-[5.13vw] ">Vault ID</h1>
          <h1 className=" w-[8.21vw] ">Vault Name</h1>
          <h1 className=" w-[6.25vw] ">Collateral</h1>
          <h1 className="w-[6.25vw]">Debt</h1>
          <h1 className="w-[5.21vw] ">Profit</h1>
          <h1 className="w-[3.13vw]">Traffic</h1>
          <h1 className="w-[1.25vw]  "> </h1>
          <h1 className="w-[1.25vw] "> </h1>
        </div>

        <div className="h-[28.8vh] overflow-y-auto">
          {allVaults &&
            allVaults.map((item, index) => {
              const isCurrentStar = isStar.find((star) => star.id === item.id);
              return (
                <div
                  key={index}
                  className="bg-[#292C31] h-[5.76vh] flex justify-around items-center pl-[22px] border-b border-[#B0B0B0]"

                >
                  <p className="w-[5.13vw] ">#{item.id}</p>
                  <p className="w-[8.21vw] text-center ">{item.id}</p>
                  <p className="w-[6.25vw]   ">
                    {new Big(item.lck_collateral).div("10e17").toFixed(4)}
                  </p>
                  <p className="w-[6.25vw]">
                    {new Big(item.debt).div("10e17").toFixed(4)}
                  </p>
                  <p className="w-[5.21vw] ">$100</p>
                  <p className="w-[3.13vw] text-center ">3</p>
                  <div className="w-[1.25vw] cursor-pointer ">
                    <img
                      onClick={() => {
                        setIsStar((prevState) =>
                          prevState.map((star) =>
                            star.id === item.id
                              ? { ...star, status: !star.status }
                              : star
                          )
                        );
                      }}
                      src={isCurrentStar?.status ? star : unstar}
                      alt=""
                      className="h-[2.34vh]"
                    />
                  </div>
                  <div className="w-[1.25vw]">
                    <img src={haunter} alt="" className="h-[2.34vh]" />
                  </div>
                </div>
              );
            })}
          {!allVaults && <></>}
        </div>
      </div>
    </div>
  );
}

export default EarnPageTwo;
