import React from "react";
import HomeIndex from "./HomeIndex";

function Home({_totalLck, _totalDebt, _xdcPrc, _hauntedVlts, _liquidatedVlts, _colRatio}) {
  return (
    <div>
      <HomeIndex totalLck={_totalLck} totalDebt={_totalDebt} xdcPrc={_xdcPrc} hauntedVlts={_hauntedVlts} liquidatedVlts={_liquidatedVlts} colRatio={_colRatio} />
    </div>
  );
}

export default Home;
