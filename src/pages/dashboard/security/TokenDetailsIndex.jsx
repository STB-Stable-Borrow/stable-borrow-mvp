import React from "react";
import TokenDetails from "./TokenDetails";
import tokenDetails from "../../../data/securityTokenDetails";
import wright from "../../../assets/dashboard/wright.svg";

function TokenDetailsIndex({ handleShowAsProfile }) {
  return (
    <div className="w-full">
      {tokenDetails.map((item) => {
        return (
          <TokenDetails
            key={item.id}
            title={item.title}
            content={item.content}
          />
        );
      })}
      <button
        className="bg-[#009FBD] text-white flex items-center justify-center gap-2 w-full h-[4.54vh] rounded-[0.44rem] mx-auto mt-4 "
        onClick={handleShowAsProfile}
      >
        Show as profile{" "}
        <img src={wright} alt="" className="w-[1.50em] h-[1.50em]" />
      </button>
    </div>
  );
}

export default TokenDetailsIndex;
