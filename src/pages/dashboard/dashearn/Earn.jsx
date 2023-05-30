import React, { useEffect, useState } from "react";
import EarnIndex from "./EarnIndex";
import EarnPageTwo from "./EarnPageTwo";
import { useDashboard } from "../../../contexts/dashboardContext";

function Earn({
  _web3,
  _stb,
  _account,
  _colRatio,
  _hauntedVlts,
  _liquidatedVlts,
  _xdcPrc,
}) {
  const [pageTwo, setPageTwo] = useState(false);

  const onHauntClick = () => {
    setPageTwo(true);
  };

  const onBackClick = () => {
    setPageTwo(false);
  };

  const { active, activeTab } = useDashboard();

  useEffect(() => {
    if (active === 1) {
      activeTab(3);
    }
  }, [active]);

  return (
    <div>
      {!pageTwo && (
        <EarnIndex
          web3={_web3}
          stb={_stb}
          account={_account}
          colRatio={_colRatio}
          hauntedVlts={_hauntedVlts}
          liquidatedVlts={_liquidatedVlts}
          _onHauntClick={onHauntClick}
        />
      )}
      {pageTwo && (
        <EarnPageTwo xdcPrc={_xdcPrc} stb={_stb} _onBackClick={onBackClick} />
      )}
    </div>
  );
}

export default Earn;
