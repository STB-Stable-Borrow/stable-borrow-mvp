import React from "react";
import back from "../../assets/borrow/back.svg";

function CreateAvatar({ onBackButtonClick }) {
  return (
    <div className="mx-[167px]">
      <div className=" h-[12vh] bg-gradient-to-b from-[#3A3B3D] to-[#202225] py-[2vh] text-center rounded-[15px] mb-[2vh] ">
        <h1 className="font-black text-xl text-[#009FBD] ">
          Welcome to STB Avatar Hub!
        </h1>
        <p className="text-[#B0B0B0] text-sm ">
          Customize your Avatar and click Next to Proceed.
        </p>
      </div>
      <div className="flex justify-between mb-[3vh] ">
        <button
          className="border text-white border-[#009FBD] w-[164px] h-[6.95vh] rounded-lg flex items-center justify-center gap-2 bg-inherit hover:opacity-75 "
          onClick={onBackButtonClick}
        >
          <img src={back} alt="" />
          Back
        </button>
        <div className="h-[6.95vh] rounded-lg bg-[#202225] w-[664px] text-[#B0B0B0] flex items-center pl-[18px] text-sm ">
          Avatar Link: https://www.sampleavatarlink.com/Mohzcrea8me
        </div>
      </div>
      <div className="w-full h-[58vh] bg-[#202225] rounded-[15px]"></div>
    </div>
  );
}

export default CreateAvatar;
