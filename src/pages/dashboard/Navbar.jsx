import React from "react";
import copy from "../../assets/dashboard/copy.svg";
import profile from "../../assets/dashboard/profile.svg";
import notif from "../../assets/dashboard/notif.svg";

function Navbar() {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="font-semibold text-[1.43rem] ">Welcome!</h1>
      <div className="flex gap-[10px] items-center ">
        <div className="text-end">
          <h1 className="font-semibold">Mohzcrea8me</h1>
          <p className="flex items-center gap-[7px] ">
            {" "}
            <img src={copy} alt="" />{" "}
            xdc7ef2be68e4f122ba53eab873e29f3326999110eb
          </p>
        </div>
        <div className="relative">
          <img
            src={profile}
            alt=""
            className="w-[5.2vw] h-[7.4vh] rounded-full "
          />
          <div className="absolute top-0 right-0 w-[25px] h-[25px] rounded-full bg-[#FF4D00]">
            <img src={notif} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
