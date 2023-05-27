import React, { useEffect, useState } from "react";
import edit from "../../../assets/dashboard/edit.svg";
import deposit from "../../../assets/dashboard/deposit.svg";
import withdraw from "../../../assets/dashboard/withdraw.svg";
import filter from "../../../assets/dashboard/filter.svg";
import search from "../../../assets/dashboard/search.svg";
import vaultsData from "../../../data/vaultsData";
import { getVault } from "../../../lib/stbContract";
import { Big } from "big.js";
import arrowLeft from "../../../assets/dashboard/arrowLeft.svg";

function Vault({
  _vaultId,
  stb,
  colRatio,
  xdcPrc,
  _onDepositClick,
  _onWithdrawClick,
  _onPaybackClick,
  resetBorrowSetup,
}) {
  const [vaultInfo, setVaultInfo] = useState(null);

  //reset borrow setup
  useEffect(() => {
    resetBorrowSetup();
  }, []);

  //get vault details
  useEffect(() => {
    (async () => {
      await getVault(stb, parseInt(_vaultId)).then((res) => {
        setVaultInfo(res);
      });
    })();
  }, [_vaultId]);

  return (
    <div>
      <div className="w-full bg-[#202225]  text-[#B0B0B0] font-bold text-[1.125rem] border-[#585858] border-dashed border rounded-[7px] h-[4.5989vh] mb-[1.53vh] flex justify-between items-center gap-[31px] pl-[2.86vw] pr-[33.93vw] ">
        <button className="flex items-center gap-2 text-[#009FBD] text-sm ">
          <img src={arrowLeft} alt="" />
          Back
        </button>
        <h1 className="flex items-center gap-2 ">
          Vault-0{_vaultId}{" "}
          <button>
            <img src={edit} alt="" className="w-[24px] h-[2.34vh]" />
          </button>
        </h1>
      </div>
      <div className="flex justify-center gap-[57px] text-[#D9D9D9] mb-[2.21vh]  ">
        <div className="w-[418px] rounded-[20px] bg-[#12A92A] py-[1vh]  px-[23px] ">
          <div className="flex justify-between mb-[2.215vh] ">
            <div className="flex flex-col items-center">
              <h1 className="text-[1rem]  font-bold ">Total Locked XDC</h1>
              {vaultInfo && (
                <p className="text-[1.5rem] mt-[-0.74vh] font-medium ">
                  {new Big(vaultInfo.totalLockedCol).div("10e17").toFixed(4)}
                </p>
              )}
              {!vaultInfo && (
                <p className="text-[1.5rem] mt-[-0.74vh] font-medium ">0.000</p>
              )}
              {vaultInfo && (
                <small className="font-medium text-[0.875rem] mt-[-0.74vh] ">
                  ~ $
                  {(
                    xdcPrc *
                    new Big(vaultInfo.totalLockedCol).div("10e17").toFixed(4)
                  ).toFixed(4)}
                </small>
              )}
              {!vaultInfo && (
                <small className="font-medium text-[0.875rem] mt-[-0.74vh] ">
                  ~ $0.0000
                </small>
              )}
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-[1rem] text-center font-bold ">Available</h1>
              {vaultInfo && (
                <p className="text-[1.5rem] font-medium mt-[-0.74vh] ">
                  {new Big(vaultInfo.availCollateral).div("10e17").toFixed(4)}
                </p>
              )}
              {!vaultInfo && (
                <p className="text-[1.5rem] font-medium mt-[-0.74vh] ">
                  0.0000
                </p>
              )}
              {vaultInfo && (
                <small className="font-medium text-[0.875rem] mt-[-0.74vh]  ">
                  ~ $
                  {(
                    xdcPrc *
                    new Big(vaultInfo.availCollateral).div("10e17").toFixed(4)
                  ).toFixed(4)}
                </small>
              )}
              {!vaultInfo && (
                <small className="font-medium text-[0.875rem] mt-[-0.74vh]  ">
                  ~ $0.0000
                </small>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center text-[#292C31] font-medium text-[0.875rem] ">
            <button
              onClick={_onDepositClick}
              className="py-[0.5769vh] px-[44px] bg-[#B0B0B0] flex justify-center items-end rounded-lg  gap-[9px] hover:bg-opacity-75 text-[.85rem] "
            >
              <img src={deposit} alt="" className="w-[1.25vw]" />
              Deposit
            </button>
            <button
              onClick={_onWithdrawClick}
              className="py-[0.5769vh] px-[44px] bg-[#B0B0B0] flex justify-center items-end rounded-lg  gap-[9px] hover:bg-opacity-75 text-[0.85rem] "
            >
              <img src={withdraw} alt="" className="w-[1.25vw]" />
              Withdraw
            </button>
          </div>
        </div>

        <div className="w-[418px] rounded-[20px] py-[1vh] px-[23px] bg-[#FF1F1F] flex flex-col items-center ">
          <div className="flex justify-between mb-[2.215vh] ">
            <div className="flex flex-col items-center">
              <h1 className="text-[1rem]  font-bold ">Total STC Debt</h1>
              {vaultInfo && (
                <p className="text-[1.5rem] font-medium mt-[-0.74vh]  ">
                  {new Big(vaultInfo.totalDebt).div("10e17").toFixed(4)}
                </p>
              )}
              {!vaultInfo && (
                <p className="text-[1.5rem] font-medium mt-[-0.74vh]  ">
                  0.0000
                </p>
              )}
              {vaultInfo && (
                <small className="font-medium text-[0.875rem] mt-[-0.74vh] ">
                  ~ ${new Big(vaultInfo.totalDebt).div("10e17").toFixed(4)}
                </small>
              )}
              {!vaultInfo && (
                <small className="font-medium text-[0.875rem] mt-[-0.74vh] ">
                  ~ $0.0000
                </small>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center text-[#292C31] font-medium text-[0.875rem] ">
            <button
              onClick={_onPaybackClick}
              className="py-[0.5769vh] px-[44px] bg-[#B0B0B0] flex justify-center items-end rounded-lg  gap-[9px] hover:bg-opacity-75 text-[0.85rem] "
            >
              <img src={withdraw} alt="" className="w-[1.25vw]" />
              Pay Back
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-[57px] items-center mb-[3.15vh]">
        <div className="flex flex-col items-center text-[#D9D9D9] font-bold text-[1rem] w-[418px] bg-[#865DFF] rounded-[20px] py-[1vh] px-[63px] ">
          {vaultInfo && (
            <h1>
              Collateralization Ratio:{" "}
              {new Big(vaultInfo.colRatio).div("10e17").toFixed(4)}
            </h1>
          )}
          {!vaultInfo && <h1>Collateralization Ratio: 0.0000</h1>}
          <p>Stability Fee: 10%</p>
        </div>
        <div className="flex flex-col items-center  w-[418px] text-[#D9D9D9] font-bold text-[1rem] bg-[#C16E08] rounded-[20px] py-[1vh] px-[63px] ">
          <h1>Liquidation Ratio: {colRatio}</h1>
          <p>Liquidation Penalty: 0.5%</p>
        </div>
      </div>
      <h1 className="w-full bg-[#202225] flex items-center justify-center text-[#B0B0B0] font-bold text-[1.125rem] border-[#585858] border-dashed border rounded-[7px] h-[4.5989vh] mb-[2.73vh] ">
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
        <h2 className="text-[#B0B0B0] font-bold bg-[#202225] rounded-lg w-[191px] flex items-center justify-center ">
          Total Vaults: {vaultsData.length}
        </h2>
      </div>
      <div className="table w-full text-[#B0B0B0] text-[1rem]   ">
        <div className="bg-[#202225] py-[1vh] flex justify-between items-center pl-[22px] border-b border-[#B0B0B0]  ">
          <h1 className="w-[300px]">Activity</h1>
          <h1 className="w-[300px]">Date and Time</h1>
          <h1 className="w-[300px]">Tx Hash</h1>
        </div>
        <div className="h-[13.85vh] bg-[#292C31] overflow-auto  ">
          {vaultsData.map((vault) => (
            <div
              className="flex justify-between items-center pl-[22px] py-[1vh] border-b border-[#B0B0B0]  "
              key={vault.id}
            >
              <h1 className="w-[300px]">{vault.activity}</h1>
              <h1 className="w-[300px] ">
                {vault.date} | {vault.time}
              </h1>
              <h1 className="w-[300px]">{vault.txHash}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vault;
