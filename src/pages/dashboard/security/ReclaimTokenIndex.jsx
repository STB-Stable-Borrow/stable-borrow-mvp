import React from "react";
import ReclaimToken from "./ReclaimToken";
import reclaimToken from "../../../data/reclaimToken";
import reclaim from "../../../assets/dashboard/reclaim.svg";

function ReclaimTokenIndex({ showReclaimModal, setShowReclaimModal }) {
  const handleReclaim = () => {
    setShowReclaimModal(true);
  };
  return (
    <div>
      {reclaimToken.map((item) => {
        return (
          <ReclaimToken
            label={item.label}
            number={item.id}
            key={item.id}
            question={item.question}
          />
        );
      })}
      <div className="border-[2.5px] border-[#009FBD80] rounded-[1.25rem] w-full h-auto py-[1.25rem] flex justify-center text-[rgb(176,176,176)] font-semibold  mb-[1.19rem] ">
        <p>Verify you are a human!</p>
      </div>
      <button
        className="w-[10.36vw] flex items-center justify-center gap-2 h-[4.54vh] mx-auto bg-[#585858] rounded-[0.44rem] text-[#B0B0B0] "
        onClick={handleReclaim}
      >
        Reclaim <img src={reclaim} alt="" className="w-[1.25em]" />
      </button>
    </div>
  );
}

export default ReclaimTokenIndex;
