import React, { useEffect, useState } from "react";

import { useDashboard } from "../../../contexts/dashboardContext";
import ExchangeIndex from "./ExchangeIndex";
import Tokenization from "./Tokenization";
import ExchangeConfirmations from "./ExchangeConfirmations";

function Exchange() {
  const { active, activeTab } = useDashboard();

  useEffect(() => {
    if (active === 1) {
      activeTab(5);
    }
  }, [active]);

  return (
    <div className="flex items-center gap-[2.60vw] h-full w-full  ">
      {/* <div className="w-full h-full">
        <ExchangeIndex />
      </div>
      <div className="w-full h-full">
        <Tokenization />
      </div> */}
      <ExchangeConfirmations />
    </div>
  );
}

export default Exchange;
