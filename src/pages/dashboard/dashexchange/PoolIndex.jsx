import React, { useState } from "react";
import Liquidity from "./Liquidity";
import xdc from "../../../assets/dashboard/xdcA.svg";
import stc from "../../../assets/dashboard/stcA.png";
import liquidityData from "../../../data/liquidityData";

function PoolIndex() {
  const [showPool, setShowPool] = useState(true);
  const [selectedLiquidity, setSelectedLiquidity] = useState(null);
  const selectedData = liquidityData.find(
    (data) => data.id === selectedLiquidity
  );

  const handleItemClick = (id) => {
    setSelectedLiquidity(id);
    setShowPool(false);
  };

  return (
    <>
      {showPool ? (
        <div className="flex flex-col items-center">
          <p className="text-center w-[23.02vw] text-[#585858]  mb-[0.5vh] text-[.75rem] ">
            Click on each Pool to add Liquidity, check your Liquidity overview
            for details.
          </p>
          <h1 className="font-semibold text-[#865DFF] text-[1rem]">
            Your Liquidity
          </h1>
          <div className="w-full flex items-center justify-between text-[#585858] text-[.75rem] pr-[0.52vw] ">
            <h1>Pair</h1>
            <div className="flex items-start gap-[1.04vw]">
              <h1 className="w-[3.0vw]">Volume</h1>
              <h1 className="w-[3.28vw] ">Liquidity</h1>
              <h1 className="w-[3.64vw] ">Percentage</h1>
            </div>
          </div>
          <div className="w-full h-[15.46vh] pr-[0.52vw] overflow-y-auto flex flex-col gap-[0.93vh]   ">
            {liquidityData.map((data) => (
              <div
                className="flex items-center w-full justify-between text-[.75rem] text-[#B0B0B0] py-[0.93vh] pl-[0.7vw] bg-[#292C31] rounded-[10px] liquidity "
                key={data.id}
                onClick={() => handleItemClick(data.id)}
              >
                <div className="flex items-center">
                  <img src={xdc} alt="" className="h-[2.78vh] w-[2.78vh] " />
                  <img src={stc} alt="" className="h-[2.78vh] w-[2.78vh] " />
                  <h1 className="ml-[0.52vw]">
                    {data.assetOne}/{data.assetTwo}
                  </h1>
                </div>
                <div className="flex items-start gap-[1.04vw] text-center ">
                  <h1 className="w-[3.0vw] ">{data.volume}</h1>
                  <h1 className="w-[3.28vw] ">${data.liquidity}K</h1>
                  <h1 className="w-[3.64vw] ">${data.percentage}K</h1>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between w-full gap-[0.57vw] h-[4.53vh] text-[.75rem] mt-[1.92vh] mb-[2.4vh] ">
            <div className="h-full w-full border-[1.5px] border-[#009FBD] text-[#B0B0B0] flex items-center justify-center rounded-[10px] ">
              Total Pools: {liquidityData.length}
            </div>
            <div className="h-full w-full border-[1.5px] border-[#009FBD] text-[#B0B0B0] flex items-center justify-center rounded-[10px] ">
              Total Liquidity: 100M
            </div>
          </div>
          <h1 className="font-semibold text-[#865DFF] text-[1rem]">
            Top Pools
          </h1>
          <div className="w-full flex items-center justify-between text-[#585858] text-[.75rem] ">
            <h1 className="w-[8vw]">Pair</h1>
            <div className="flex items-start gap-[1vw]">
              <h1 className="w-[4.0vw] ">Volume</h1>
              <h1 className="w-[4.28vw] ">Liquidity</h1>
              <h1 className="w-[3.64vw] text-center">Fee</h1>
            </div>
          </div>
          <div className="w-full h-[15.46vh] overflow-y-auto flex flex-col gap-[0.93vh] pr-[0.52vw]  ">
            {liquidityData.map((data) => (
              <div
                className="flex items-center w-full justify-between text-[.75rem] text-[#B0B0B0] py-[0.93vh]  rounded-[10px] liquidity "
                key={data.id}
                onClick={() => handleItemClick(data.id)}
              >
                <div className="flex items-center w-[8vw] cursor-pointer ">
                  <img src={xdc} alt="" className="h-[2.78vh] w-[2.78vh] " />
                  <img src={stc} alt="" className="h-[2.78vh] w-[2.78vh] " />
                  <h1 className="ml-[0.52vw]">
                    {data.assetOne}/{data.assetTwo}
                  </h1>
                </div>
                <div className="flex items-start gap-[1vw] text-center ">
                  <h1 className="w-[4.0vw]   ">{data.volume}</h1>
                  <h1 className="w-[4.28vw]  ">${data.liquidity}K</h1>
                  <h1 className="w-[3.64vw] text-end ">{data.percentage}%</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Liquidity
          assetOne={selectedData.assetOne}
          assetTwo={selectedData.assetTwo}
        />
      )}
    </>
  );
}

export default PoolIndex;
