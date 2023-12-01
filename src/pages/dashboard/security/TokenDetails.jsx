import React from "react";

function TokenDetails({ title, content }) {
  return (
    <div className="w-full font-semibold mb-[2vh] text-[0.625rem] ">
      <div className="w-full">
        <h4 className="text-[#009FBD]  ">{title}:</h4>
        <p
          className={`mt-[-2] leading-tight ${
            content === "Secured"
              ? "bg-[#E1FBDA] w-[4rem] text-[#12A92A] py-[0.19rem] px-[0.94rem] flex items-center justify-center rounded-[0.44rem] "
              : "text-[#B0B0B0] "
          } `}
        >
          {content}
        </p>
      </div>
    </div>
  );
}

export default TokenDetails;
