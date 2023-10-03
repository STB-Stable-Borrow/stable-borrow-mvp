import React from "react";
import Security from "./Security";

function SecurityIndex({
  showSecurityModal,
  setShowSecurityModal,
  showReclaimModal,
  setShowReclaimModal,
}) {
  return (
    <div className="">
      <p className="text-[#D9D9D9] text-[0.625rem] py-[1.85vh] px-[1.41vw] bg-[#191B1D] border-[1.5px] border-dashed border-[#585858] rounded-[0.9375rem] mb-[2.31vh] hidden md:block ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, modi
        nostrum excepturi, veniam molestiae sed alias rem, ut sint doloremque
        vero unde saepe adipisci iure quam dolore fuga facere aspernatur!
      </p>
      <Security
        showSecurityModal={showSecurityModal}
        setShowSecurityModal={setShowSecurityModal}
        showReclaimModal={showReclaimModal}
        setShowReclaimModal={setShowReclaimModal}
      />
    </div>
  );
}

export default SecurityIndex;
