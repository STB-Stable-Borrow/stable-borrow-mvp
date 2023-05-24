import React from "react";
import HomeIndex from "./HomeIndex";

function Home({_totalLck, _totalDebt, _xdcPrc}) {
  return (
    <div>
      <HomeIndex totalLck={_totalLck} totalDebt={_totalDebt} xdcPrc={_xdcPrc}/>
    </div>
  );
}

export default Home;
