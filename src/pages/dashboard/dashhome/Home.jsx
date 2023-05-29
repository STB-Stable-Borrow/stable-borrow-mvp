import React from "react";
import HomeIndex from "./HomeIndex";

function Home({_isReg, _totalLck, _totalDebt, _xdcPrc, _hauntedVlts, _liquidatedVlts, _colRatio, _allVaults}) {
  return (
    <div>
      <HomeIndex isReg={_isReg} totalLck={_totalLck} totalDebt={_totalDebt} xdcPrc={_xdcPrc} hauntedVlts={_hauntedVlts} liquidatedVlts={_liquidatedVlts} colRatio={_colRatio} allVaults={_allVaults}/>
    </div>
  );
}

export default Home;
