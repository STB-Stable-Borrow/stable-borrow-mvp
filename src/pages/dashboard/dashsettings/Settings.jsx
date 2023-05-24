import React from "react";
import profile from "../../../assets/dashboard/profileImg.svg";
import editProfile from "../../../assets/dashboard/editProfile.svg";
import EditProfile from "./EditProfile";

function Settings() {
  return (
    <>
      {/* <div className="flex justify-center">
        <div className="w-[30.94vw]  py-[2.5vh] rounded-[40px] bg-[#202225] flex flex-col items-center ">
          <h1 className="text-[#B0B0B0] font-semibold text-[1em]  mb-[1.39vh] ">
            @mohzcrea8me
          </h1>
          <div className="h-[28.24vh] w-[28.24vh] rounded-[100%] border border-[#585858] border-dashed flex justify-center mb-[1.85vh] ">
            <img src={profile} alt="" />
          </div>
          <div className="w-[15.89vw]  bg-[#292C31] px-[1.15vw] py-[1.20vh] rounded-[20px] flex items-center justify-between mb-[1.85vh] ">
            <div>
              <h1 className="text-[#009FBD] font-semibold text-[1.25em] ">
                100 XDC
              </h1>
              <p className="text-[1em] mt-[-0.74vh] text-[#B0B0B0] text-center ">
                ~ $200
              </p>
            </div>
            <div>
              <h1 className="text-[#009FBD] font-semibold text-[1.25em] ">
                100 STC
              </h1>
              <p className="text-[1em] mt-[-0.74vh] text-[#B0B0B0] text-center  ">
                ~ $100
              </p>
            </div>
          </div>
          <div className="bg-[#B0B0B0] w-[25.8854vw] rounded-[20px] pl-[1.20vw] py-[1.02vh] mb-[3.15vh] ">
            <p className="text-[0.65em] ">
              Any information could come up here. Any information could come up
              here. Any information could come up here. Any information could
              come up here. Any information could come up here.
            </p>
          </div>
          <button className="text-white flex items-center justify-center gap-2 py-[1.11vh] px-[2.29vw] bg-[#009FBD] rounded-lg hover:bg-opacity-75 ">
            <img src={editProfile} alt="" className="w-[1.25vw] h-[2.22vh]" />
            Edit Profile
          </button>
        </div>
      </div> */}
      <EditProfile />
    </>
  );
}

export default Settings;
