import React, { useState } from "react";
import collapse from "../../../assets/mobile/collapse.svg";
import expand from "../../../assets/mobile/expand.svg";
import xdc from "../../../assets/dashboard/xdcA.svg";
import stc from "../../../assets/dashboard/stcA.png";

function MobileLiquidityItem({ data, handleItemClick }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded((prev) => !prev);
  };
  return (
    <div
      className=" bg-[#292C31] py-[1.161vh] rounded-[0.6250rem] px-[4.83vw] w-full"
      key={data.id}
      onClick={() => handleItemClick(data.id)}
    >
      <div className="flex items-center justify-between w-full ">
        <div className="flex gap-1 items-center">
          <img src={xdc} alt="" className="h-[2.78vh] w-[2.78vh] " />
          <img src={stc} alt="" className="h-[2.78vh] w-[2.78vh] " />
          <h1 className="ml-[0.52vw]">
            {data.assetOne}/{data.assetTwo}
          </h1>
        </div>
        <div className="flex items-center gap-2 w-[30vw] ">
          <h6 className="w-[23vw]  ">Volume: {data.volume}</h6>
          <img
            src={expanded ? collapse : expand}
            alt=""
            className="w-[0.93rem] "
            onClick={handleExpand}
          />
        </div>
      </div>
      {expanded && (
        <div className="flex items-center justify-between mt-4 ">
          <h6>Liquidity: {data.liquidity} </h6>
          <h6 className="w-[30vw] ">Percentage: {data.percentage}</h6>
        </div>
      )}
    </div>
  );
}

export default MobileLiquidityItem;
