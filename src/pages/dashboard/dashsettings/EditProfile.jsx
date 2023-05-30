import React, { useState } from "react";
import profile from "../../../assets/dashboard/profileImg.svg";
import save from "../../../assets/dashboard/save.svg";
import arrowLeft from "../../../assets/dashboard/arrowLeft.svg";

function EditProfile({ onBackClick, prof, xdcBalance, stcBlnc, xdcPrc }) {
  const [data, setData] = useState({
    username: "",
    about: "",
  });
return(


    <div className="w-full">


    <div className="flex flex-col items-center justify-center">

      <div className="w-full bg-[#202225]  text-[#B0B0B0] font-bold text-[1.125rem] border-[#585858] border-dashed border rounded-[7px] h-[4.5989vh] mb-[1.53vh] flex justify-between items-center gap-[31px] pl-[2.86vw] pr-[33.93vw] ">
        <button
          className="flex items-center gap-2 text-[#009FBD] text-sm "
          onClick={onBackClick}
        >
          <img src={arrowLeft} alt="" />
          Back
        </button>
        <h1 className="">Settings</h1>
      </div>
      <div className="bg-[#202225] px-[4.5vw] py-[1.5vh] rounded-[30px] ">
        {prof && (
          <div className="flex items-center gap-[23px] mb-[2.35vh]">
            <img
              src={prof.imgUrl}
              alt=""
              className="h-[8.96vw] w-[8.96vw] rounded-[100%] border border-[#585858] border-dashed"
            />
            <div>
              <h1 className="text-[#B0B0B0] font-semibold text-[1rem]  mb-[1.39vh] ">
                {prof.username}
              </h1>
              <div className="border-dashed border  border-[#585858] px-[1.15vw] py-[1.20vh] rounded-[20px] flex items-center justify-between  gap-[4.47vw] mb-[1.85vh] ">
                <div className="flex items-center flex-col">
                  {stcBlnc && (
                    <h1 className="text-[#009FBD] font-semibold text-[1.25em] ">
                      {stcBlnc} STC
                    </h1>
                  )}
                  {stcBlnc && (
                    <p className="text-[1em] mt-[-0.74vh] text-[#B0B0B0] text-center ">
                      ~ ${stcBlnc}
                    </p>
                  )}
                </div>
                <div className="flex items-center flex-col">
                  {xdcBalance && (
                    <h1 className="text-[#009FBD] font-semibold text-[1.25em] ">
                      {xdcBalance} XDC
                    </h1>
                  )}
                  {xdcBalance && (
                    <p className="text-[1em] mt-[-0.74vh] text-[#B0B0B0] text-center  ">
                      ~ ${(xdcPrc * xdcBalance).toFixed(4)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {!prof && (
          <div className="flex items-center  gap-[23px] mb-[4.35vh]">
            <img
              src={profile}
              alt=""
              className="h-[8.96vw] w-[8.96vw] rounded-[100%] border border-[#585858] border-dashed"
            />
            <div>
              <h1 className="text-[#B0B0B0] font-semibold text-[1rem]  mb-[1.39vh] ">
                @username
              </h1>
              <div className="w-[15.89vw] border-dashed border  border-[#585858] px-[1.15vw] py-[1.20vh] rounded-[20px] flex items-center justify-between mb-[1.85vh] ">
                <div className="flex item-center flex-col ">
                  <h1 className="text-[#009FBD] font-semibold text-[1.25em] ">
                    0 STC
                  </h1>
                  <p className="text-[1em] mt-[-0.74vh] text-[#B0B0B0] text-center ">
                    ~ $0.0000
                  </p>
                </div>
                <div className="flex items-center flex-col">
                  <h1 className="text-[#009FBD] font-semibold text-[1.25em] ">
                    0 XDC
                  </h1>
                  <p className="text-[1em] mt-[-0.74vh] text-[#B0B0B0] text-center ">
                    ~ $0.0000
                  </p>
                </div>
              </div>
            </div>
          </div>

        )}
        <form
          action=""
          className="flex flex-col gap-[4.35vh] w-[23.50vw] text-[1rem]"
        >
          <div className="flex flex-col gap-[1.57vh] ">
            <label htmlFor="" className=" font-semibold text-[#009FBD]  ">
              Edit Username
            </label>
            <input
              type="text"
              className="bg-[#B0B0B0] py-[1.30vh] pl-[21px] rounded-lg text-[#292C31] "
            />

          </div>
          <div className="flex flex-col gap-[1.57vh] ">
            <label htmlFor="" className=" font-semibold text-[#009FBD]  ">
              Edit About
            </label>
            <textarea
              type="text"
              className="bg-[#B0B0B0] py-[1.30vh] pl-[21px] rounded-lg h-[10.65vh] text-[#292C31] text-[0.85em] "
            ></textarea>
          </div>
          <button className="text-white w-max flex items-center justify-center gap-2 py-[1.11vh] px-[2.29vw] bg-[#009FBD] rounded-lg hover:bg-opacity-75 text-sm ">
            <h1> Save Changes</h1>
            <img src={save} alt="" className="w-[1.25vw] h-[2.22vh]" />
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default EditProfile;
