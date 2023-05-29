import React, { useState } from "react";
import profile from "../../../assets/dashboard/profileImg.svg";
import editProfile from "../../../assets/dashboard/editProfile.svg";
import EditProfile from "./EditProfile";
import { Big } from "big.js";

function Settings({_stcBlnc, _xdcBalance, _xdcPrc, _profile}) {
  const [showSettings, setShowSettings] = useState(true);

  const handleEditProfile = () => {
    setShowSettings(!showSettings);
  };

  const handleBack = () => {
    setShowSettings(!showSettings);
  };

  return (
    <>
      {showSettings ? (
        <div className="flex justify-center">
          <div className="w-[30.94vw]  py-[2.5vh] rounded-[40px] bg-[#202225] flex flex-col items-center ">
            {_profile && (
              <h1 className="text-[#B0B0B0] font-semibold text-[1em]  mb-[1.39vh] ">
              @{_profile.username}
            </h1>
            )}
             {!_profile && (
              <h1 className="text-[#B0B0B0] font-semibold text-[1em]  mb-[1.39vh] ">
              @username
            </h1>
            )}
            {_profile && (
              <div className="h-[28.24vh] w-[28.24vh] rounded-[100%] border border-[#585858] border-dashed flex justify-center mb-[1.85vh] ">
              <img src={_profile.imgUrl} alt="" />
            </div>
            )}
            {!_profile && (
              <div className="h-[28.24vh] w-[28.24vh] rounded-[100%] border border-[#585858] border-dashed flex justify-center mb-[1.85vh] ">
              <img src={profile} alt="" />
            </div>
            )}
            <div className="w-[15.89vw]  bg-[#292C31] px-[1.15vw] py-[1.20vh] rounded-[20px] flex items-center justify-between mb-[1.85vh] ">
              <div>
                {_stcBlnc && (
                  <h1 className="text-[#009FBD] font-semibold text-[1.25em] ">
                  {_stcBlnc} STC
                </h1>
                )}
                {!_stcBlnc && (
                  <h1 className="text-[#009FBD] font-semibold text-[1.25em] ">
                  0.0000 STC
                </h1>
                )}
                {_stcBlnc && (
                  <p className="text-[1em] mt-[-0.74vh] text-[#B0B0B0] text-center ">
                  ~ ${_stcBlnc} 
                </p>
                )} 
                {!_stcBlnc && (
                  <p className="text-[1em] mt-[-0.74vh] text-[#B0B0B0] text-center ">
                  ~ $0.0000
                </p>
                )}     
              </div>
              <div>
                {_xdcBalance && (
                <h1 className="text-[#009FBD] font-semibold text-[1.25em] ">
                {_xdcBalance} XDC
                </h1>
                )}
                {!_xdcBalance && (
                <h1 className="text-[#009FBD] font-semibold text-[1.25em] ">
                0.0000 XDC
                </h1>
                )}
                {_xdcBalance && (
                  <p className="text-[1em] mt-[-0.74vh] text-[#B0B0B0] text-center ">
                  ~ ${(_xdcPrc * _xdcBalance).toFixed(4)} 
                </p>
                )}  
                {!_xdcBalance && (
                  <p className="text-[1em] mt-[-0.74vh] text-[#B0B0B0] text-center ">
                  ~ $0.0000
                </p>
                )}  
              </div>
            </div>
            <div className="bg-[#B0B0B0] w-[25.8854vw] rounded-[20px] pl-[1.20vw] py-[1.02vh] mb-[3.15vh] ">
            {_profile && (
              <p className="text-[0.65em] ">{_profile.about}</p>
            )}
            {!_profile && (
              <p className="text-[0.65em] ">User's About</p>
            )}
            </div>
            <button
              className="text-white flex items-center justify-center gap-2 py-[1.11vh] px-[2.29vw] bg-[#009FBD] rounded-lg hover:bg-opacity-75 text-sm "
              onClick={handleEditProfile}
            >
              <img src={editProfile} alt="" className="w-[1.25vw] h-[2.22vh]" />
              Edit Profile
            </button>
          </div>
        </div>
      ) : (
        <EditProfile prof={_profile} xdcBalance={_xdcBalance} stcBlnc={_stcBlnc} xdcPrc={_xdcPrc}  onBackClick={handleBack} />
      )}
    </>
  );
}

export default Settings;
