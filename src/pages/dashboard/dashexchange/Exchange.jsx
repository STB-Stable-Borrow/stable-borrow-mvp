import React, { useEffect, useState } from "react";

import { useDashboard } from "../../../contexts/dashboardContext";
import ExchangeIndex from "./ExchangeIndex";
import Tokenization from "./Tokenization";

function Exchange({
  _account,
  _handleLoading,
  _web3,
  _stbSwap,
  _stc,
  _stb,
  _colRatio,
  _xdcBln,
  _stcBln,
  _xdcPrc,
}) {
  const { active, activeTab } = useDashboard();

  useEffect(() => {
    if (active === 1) {
      activeTab(5);
    }
  }, [active]);

  return (
    <div className="flex items-center gap-[8.92vh]  md:gap-[2.60vw]  w-full h-full flex-col md:flex-row px-[4.83vw] md:px-0 md:pb-0 pb-[15.62vh]  ">
      <div className="w-full h-full">
        <h1 className="font-bold md:hidden text-[#B0B0B0] text-xl mb-[5.91vh] ">
          Welcome!
        </h1>
        <ExchangeIndex
          account={_account}
          handleLoading={_handleLoading}
          web3={_web3}
          stbSwap={_stbSwap}
          stc={_stc}
          stb={_stb}
          xdcBlnc={_xdcBln}
          stcBlnc={_stcBln}
          xdcPrc={_xdcPrc}
        />
      </div>
      <div className="w-full h-full">
        <Tokenization />
      </div>
    </div>
  );
}

export default Exchange;
