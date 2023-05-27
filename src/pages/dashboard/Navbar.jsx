import React from "react";
import copy from "../../assets/dashboard/copy.svg";
import profile from "../../assets/dashboard/profile.svg";
import notif from "../../assets/dashboard/notif.svg";

function Navbar({ _account, _address, _profile }) {
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="font-semibold text-[1.43rem] ">Welcome!</h1>
      <div className="flex gap-[10px] items-center ">
        <div className="text-end">
          {_profile && <h1 className="font-semibold">{_profile.username}</h1>}
          {!_profile && <h1 className="font-semibold">username</h1>}
          <p className="flex items-center gap-[7px] ">
            <img src={copy} alt="" /> {_account}
          </p>
        </div>
        <div className="relative">
          {_profile && (
            <img
              src={_profile.imgUrl}
              alt=""
              className="w-[3.50vw] h-[3.50vw] rounded-full border-[1.5px] border-[#585858] border-dashed "
            />
          )}
          {!_profile && (
            <img
              src={profile}
              alt=""
              className="w-[3.50vw] h-[3.50vw] rounded-full border-[1.5px] border-[#585858] border-dashed "
            />
          )}
          <div className="absolute top-[-3px] right-[-3px] w-[1.56vw] h-[1.56vw] rounded-full bg-[#FF4D00]">
            <img src={notif} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
