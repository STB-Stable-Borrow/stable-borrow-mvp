import React, { useEffect, useState } from "react";

import { useDashboard } from "../../../contexts/dashboardContext";
import ExchangeIndex from "./ExchangeIndex";
import Tokenization from "./Tokenization";

function Exchange({_account, _handleLoading, _web3, _stbSwap, _stc, _stb, _colRatio, _xdcBln, _stcBln, _xdcPrc}) {
  const { active, activeTab } = useDashboard();

  useEffect(() => {
    if (active === 1) {
      activeTab(5);
    }
  }, [active]);

  return (
    <div className="flex items-center gap-[2.60vw] h-full w-full  ">
      <div className="w-full h-full">
        <ExchangeIndex account={_account} handleLoading={_handleLoading} web3={_web3} stbSwap={_stbSwap} stc={_stc} stb={_stb} xdcBlnc={_xdcBln} stcBlnc={_stcBln} xdcPrc={_xdcPrc} />
      </div>
      <div className="w-full h-full">
        <Tokenization />
      </div>
    </div>
  );
}

export default Exchange;
