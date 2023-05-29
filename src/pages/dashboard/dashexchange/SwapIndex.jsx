import React, { useState } from "react";
import xdc from "../../../assets/dashboard/xdc.svg";
import swapImg from "../../../assets/dashboard/swap.svg";
import stc from "../../../assets/dashboard/stc.svg";
import question from "../../../assets/dashboard/question.svg";
import swapBtn from "../../../assets/dashboard/swapBtn.svg";

function SwapIndex() {
  const [inputValue, setInputValue] = useState("");
  const [slippage, setSlippage] = useState([
    { value: 0.1, isActive: false },
    { value: 0.5, isActive: false },
    { value: 1, isActive: false },
  ]);

  const handleInputChange = (e) => {
    const value = parseFloat(e.target.value);
    setInputValue(value);

    const updatedSlippage = slippage.map((slip) => ({
      value: slip.value,
      isActive:
        (slip.value === 0.1 && value >= 0 && value <= 0.49) ||
        (slip.value === 0.5 && value >= 0.5 && value <= 0.99) ||
        (slip.value === 1 && value >= 1),
    }));

    setSlippage(updatedSlippage);
  };

  const [isSwapped, setIsSwapped] = useState(false);

  const handleSwap = () => {
    setIsSwapped((prev) => !prev);
  };

  return (
    <div className="flex flex-col items-center ">
      <p className="text-center text-[#585858]  mb-[1.22vh] text-[.875rem] ">
        Select Token Pair, input desired amount and select Token Tolerance{" "}
      </p>
      <div
        className={`flex flex-col py-[1.5vh] ${
          isSwapped ? "flex-col-reverse" : "flex-col"
        } `}
      >
        <div
          className={`flex flex-col  ${
            isSwapped ? "flex-col-reverse" : "flex-col"
          } `}
        >
          <p className="text-[#B0B0B0] text-[0.85rem] text-center ">
            Balance: 24,333.2213 XDC
          </p>
          <div className="bg-[#B0B0B0] h-[4.63vh] rounded-[10px]  w-full px-[.83vw] py-[.56vh] flex items-center  ">
            <img
              src={xdc}
              alt=""
              className="w-[3.2vh] h-[3.2vh] mr-[0.52vw] "
            />
            <select
              name=""
              id=""
              className="bg-inherit font-semibold text-[.85rem] "
            >
              <option value="">XDC</option>
              <option value="">STC</option>
            </select>
            <div className="h-[3.43vh] w-[2px] bg-[#292C31] mx-[.73vw] "></div>
            <div className="relative">
              <input
                type="number"
                name=""
                id=""
                className="bg-inherit w-[6.25vw] pl-[.73vw] placeholder:text-[#292c31] placeholder:font-semibold  font-semibold "
                placeholder="0"
              />
              <button className="absolute right-[-2.26vw] top-[0.58vh] text-[.75rem] ">
                Max
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center w-[17.45vw] justify-between my-[1.48vh]">
          <div className="w-[7.29vw] h-[.19vh] bg-[#B0B0B0] "></div>
          <button onClick={handleSwap}>
            <img src={swapImg} alt="" />
          </button>
          <div className="w-[7.29vw] h-[.19vh] bg-[#B0B0B0] "></div>
        </div>
        <div className="bg-[#B0B0B0] h-[4.63vh] rounded-[10px] w-full px-[.83vw] py-[.56vh] flex items-center">
          <img src={stc} alt="" className="w-[3.2vh] h-[3.2vh] mr-[0.52vw] " />
          <select
            name=""
            id=""
            className="bg-inherit font-semibold text-[.85rem] "
          >
            <option value="">STC</option>
            <option value="">XDC</option>
          </select>
          <div className="h-[3.43vh] w-[2px] bg-[#292C31] mx-[.73vw] "></div>
          <div className="relative">
            <input
              type="number"
              name=""
              id=""
              className="bg-inherit w-[6.25vw] pl-[.73vw] placeholder:text-[#292c31] placeholder:font-semibold  font-semibold "
              placeholder="0"
            />
            <button className="absolute right-[-2.26vw] top-[0.58vh] text-[.75rem] ">
              Max
            </button>
          </div>
        </div>
      </div>
      <div className="mb-[0.95vh] ">
        <h4 className="text-[#B0B0B0] text-[0.75rem] flex items-center justify-center gap-1 ">
          Exchange Rate: <img src={question} alt="" />
        </h4>
        <h6 className=" font-semibold text-[#865DFF] text-[0.75rem] ">
          1 XDC ($1.00) ~ 1.584 STC
        </h6>
      </div>
      {/* h-[8.89vh] */}
      <div className=" w-[17.45vw] py-[0.59vh] px-[1.04vw] rounded-[15px] bg-[#292C31] mb-[2.13vh] flex flex-col justify-center items-center ">
        <h4 className="text-[#B0B0B0] text-[0.75rem] flex items-center justify-center gap-1 font-semibold mb-[0.5vh]">
          Slippage Tolerance:
          <img src={question} alt="" className=" " />
        </h4>
        {/* */}
        <div className="flex items-center justify-between w-full ">
          <div className="bg-[#202225] w-[9.53vw] h-[3.89vh]  px-[1.15vw] justify-between  flex items-center text-[0.65rem] rounded-[10px] text-[#B0B0B0] ">
            {slippage.map((slip, index) => (
              <p
                key={index}
                className={`${
                  slip.isActive ? "text-[#009FBD]" : "text-gray-500"
                }`}
              >
                {slip.isActive ? inputValue + "%" : slip.value + "%"}
              </p>
            ))}
          </div>
          <div className="bg-[#B0B0B0] rounded-[10px] h-[3.89vh]  pl-[.5vw] w-[4.74vw] flex items-center relative text-[0.65rem] ">
            <input
              type="number"
              className="bg-inherit w-[2.74vw]    placeholder:text-black  "
              placeholder="0"
              value={inputValue}
              onChange={handleInputChange}
            />
            <p className="absolute  right-1">%</p>
          </div>
        </div>
      </div>
      <div className="px-[1.8vw]  py-[1.13vh] w-[21.04vw] rounded-[20px] bg-[#292C31] text-[#b0b0b0] mb-[1.22vh] border-[1.5px] border-[#585858] border-dashed  text-[0.75rem] ">
        <div className="flex items-center  gap-[1.09vw] justify-between">
          <div className="flex items-center gap-[1px]">
            <img src={question} alt="" />
            <h4>Minimum Received:</h4>
          </div>
          <p className="">0</p>
        </div>
        <div className="flex items-center  gap-[1.09vw] justify-between">
          <div className="flex items-center gap-[1px]">
            <img src={question} alt="" />
            <h4>Pool Fee:</h4>
          </div>
          <p>0.00% / 0.000 XDC </p>
        </div>
      </div>
      <button className="py-[1.20vh] px-[2.29vw] bg-[#585858] rounded-[7px] text-[.75rem] text-[#B0B0B0] hover:bg-opacity-75 flex items-center justify-center gap-2  ">
        <img src={swapBtn} alt="" className="w-[1.25vw] h-[1.25vw] " />
        Swap
      </button>
    </div>
  );
}

export default SwapIndex;
