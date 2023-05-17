import React from "react";
import filter from "../../assets/dashboard/filter.svg";
import search from "../../assets/dashboard/search.svg";
import edit from "../../assets/dashboard/edit.svg";
import dashBorrowData from "../../data/dashBorrowData";

function Borrow() {
  return (
    <div>
      <h1 className="w-full bg-[#202225] text-center text-[#B0B0B0] font-bold text-[1.125rem] border-[#585858] border-dashed border rounded-[7px] py-[1.36vh] mb-[1.56vh] ">
        Overview
      </h1>
      <div className="flex justify-around text-[#D9D9D9] mb-[4.25vh] h-[11.4vh] ">
        <div className="w-[264px] pt-[2.44vh] pb-[3.027vh] rounded-[20px] bg-[#12A92A] flex justify-center items-center flex-col ">
          <h1 className="text-sm font-bold">Total Locked </h1>
          <p className="text-[1.875rem] font-medium ">$2000.00</p>
        </div>
        <div className="w-[264px] pt-[2.44vh] pb-[3.027vh] rounded-[20px] bg-[#FF1F1F] flex justify-center items-center flex-col ">
          <h1 className="text-sm font-bold">Total Debts </h1>
          <p className="text-[1.875rem] font-medium ">$2000.00</p>
        </div>
        <div className="w-[264px] pt-[2.44vh] pb-[3.027vh] rounded-[20px] bg-[#865DFF] flex justify-center items-center flex-col ">
          <h1 className="text-sm font-bold">Collateralization Ratio</h1>
          <p className="text-[1.875rem] font-medium ">$2000.00</p>
        </div>
      </div>
      <h1 className="w-full bg-[#202225] text-center text-[#B0B0B0] font-bold text-[1.125rem] border-[#585858] border-dashed border rounded-[7px] py-[1.36vh] mb-[2.73vh] ">
        Vaults
      </h1>
      <div className="flex w-full justify-between mb-[3.22vh] h-[4.1vh] ">
        <div className="h-full flex gap-4">
          <div className="relative h-full">
            <input
              type="search"
              name=""
              id=""
              className="h-full w-[426px] rounded-lg bg-[#B0B0B0] pl-[50px] placeholder:text-[#292C31] text-[#292C31] "
              placeholder="Search..."
            />
            <img
              src={search}
              alt=""
              className="w-[24px] h-[2.3vh] absolute top-1.5 left-3  "
            />
          </div>
          <button className="w-[2.9vw] h-full rounded-sm border border-[#B0B0B0] flex items-center justify-center ">
            <img src={filter} alt="" className="w-[24px] h-[2.34vh]" />
          </button>
        </div>
        <h2 className="text-[#B0B0B0] font-bold bg-[#202225] rounded-lg w-[191px] text-center ">
          Total Vaults: 30
        </h2>
      </div>
      <div className="table w-full h-[34.57vh] text-[#B0B0B0] text-[1rem] ">
        <div className="bg-[#202225] h-[5.76vh] flex justify-start items-center pl-[22px] border-b border-[#B0B0B0] ">
          <h1 className="w-[60px] ">Vault ID</h1>
          <h1 className=" w-[170px] ml-[20px] ">Vault Name</h1>
          <h1 className="w-[50px]">Asset</h1>
          <h1 className="w-[150px] ml-[20px]   ">Collateral Locked</h1>
          <h1 className=" w-[150px] ">Liquidation Price</h1>
          <h1 className=" w-[120px]  ">Debt</h1>
          <h1 className="w-[100px]  ">Status</h1>
        </div>
        <div className="h-[28.8vh] overflow-y-auto">
          {dashBorrowData.map((item) => (
            <div className="bg-[#292C31] h-[5.76vh] flex justify-start items-center pl-[22px] border-b border-[#B0B0B0] ">
              <h1 className="w-[60px] ">#0{item.vaultID}</h1>
              <h1 className="w-[170px]  ml-[20px]  flex items-center gap-2">
                {item.vaultName} <img src={edit} alt="" />
              </h1>
              <h1 className="w-[50px]  ">{item.asset}</h1>
              <h1 className="w-[150px] ml-[20px] ">{item.collateralLocked}</h1>
              <h1 className="w-[150px] ">${item.liquidationPrice}</h1>
              <h1 className="w-[120px] ">{item.debt}</h1>
              <h1
                className={` w-auto px-[10px] rounded-lg text-center   text-xs ${
                  item.status === "Partial Active" &&
                  "bg-[#FFF5E8] text-[#F9971E] "
                } 
              ${item.status === "Haunted" && "bg-[#FFEBEB] text-[#FF1F1F] "} 
              ${item.status === "Active" && "bg-[#E1FBDA] text-[#12A92A] "} 

              } `}
              >
                {item.status}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Borrow;
