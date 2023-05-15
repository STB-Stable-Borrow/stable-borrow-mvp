import React from "react";
import edit from "../../assets/dashboard/edit.svg";
import deposit from "../../assets/dashboard/deposit.svg";
import withdraw from "../../assets/dashboard/withdraw.svg";
import filter from "../../assets/dashboard/filter.svg";
import search from "../../assets/dashboard/search.svg";
import dashBorrowData from "../../data/dashBorrowData";

function Vault() {
  return (
    <div>
      <h1 className="w-full bg-[#202225] text-center text-[#B0B0B0] font-bold text-[1.125rem] border-[#585858] border-dashed border rounded-[7px] py-[1.36vh] mb-[1.53vh] flex justify-center items-center gap-[31px] ">
        Vault-01 <img src={edit} alt="" />
      </h1>
      <div className="flex justify-center gap-[57px] text-[#D9D9D9] mb-[2.21vh]  ">
        <div className="w-[418px] rounded-[20px] bg-[#12A92A] py-[1.44vh] px-[23px] ">
          <div className="flex justify-between mb-[2.215vh] ">
            <div className="flex flex-col items-center">
              <h1 className="text-[1.125rem]  font-bold ">Total Locked XDC</h1>
              <p className="text-[1.875rem] font-medium ">2000.00</p>
              <small className="font-medium text-[0.875rem]">~ $2000.00</small>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-[1.125rem] text-center font-bold ">
                Available
              </h1>
              <p className="text-[1.875rem] font-medium">2000.00</p>
              <small className="font-medium text-[0.875rem] ">~ $2000.00</small>
            </div>
          </div>
          <div className="flex justify-between items-center text-[#292C31] font-medium text-[0.875rem] ">
            <button className="py-[0.5769vh] px-[44px] bg-[#B0B0B0] flex justify-center items-end rounded-lg  gap-[9px] hover:bg-opacity-75 ">
              <img src={deposit} alt="" />
              Deposit
            </button>
            <button className="py-[0.5769vh] px-[44px] bg-[#B0B0B0] flex justify-center items-end rounded-lg  gap-[9px] hover:bg-opacity-75 ">
              <img src={withdraw} alt="" />
              Withdraw
            </button>
          </div>
        </div>

        <div className="w-[418px] rounded-[20px] py-[1.44vh] px-[23px] bg-[#FF1F1F] flex flex-col items-center ">
          <div className="flex justify-between mb-[2.215vh] ">
            <div className="flex flex-col items-center">
              <h1 className="text-[1.125rem]  font-bold ">Total STC Debt</h1>
              <p className="text-[1.875rem] font-medium ">2000.00</p>
              <small className="font-medium text-[0.875rem]">~ $2000.00</small>
            </div>
          </div>
          <div className="flex justify-between items-center text-[#292C31] font-medium text-[0.875rem] ">
            <button className="py-[0.5769vh] px-[44px] bg-[#B0B0B0] flex justify-center items-end rounded-lg  gap-[9px] hover:bg-opacity-75 ">
              <img src={withdraw} alt="" />
              Pay Back
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-[57px] items-center mb-[6.15vh]">
        <div className="flex flex-col items-center text-[#D9D9D9] font-bold text-[1.125rem] w-[418px] bg-[#865DFF] rounded-[20px] py-[1.53vh] px-[63px] ">
          <h1>Collateralization Price: 162.32%</h1>
          <p>Stability Fee: 3.00%</p>
        </div>
        <div className="flex flex-col items-center  w-[418px] text-[#D9D9D9] font-bold text-[1.125rem] bg-[#C16E08] rounded-[20px] py-[1.53vh] px-[63px] ">
          <h1>Liquidation Price: $416.32</h1>
          <p>Liquidation Penalty: 13.00%</p>
        </div>
      </div>
      <h1 className="w-full bg-[#202225] text-center text-[#B0B0B0] font-bold text-[1.125rem] border-[#585858] border-dashed border rounded-[7px] py-[1.36vh] mb-[2.73vh] ">
        Vaults History
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
          Total Vaults: 14
        </h2>
      </div>
      <div className="table w-full h-[34.57vh] text-[#B0B0B0] text-[1rem] ">
        <div className="bg-[#202225] h-[5.76vh] flex justify-start items-center pl-[22px] border-b border-[#B0B0B0] ">
          <h1 className="w-[60px] ">Activity</h1>
          <h1 className=" w-[170px] ml-[20px] ">Date and Time</h1>
          <h1 className="w-[150px] ml-[20px]   ">Tx Hash</h1>
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

export default Vault;
