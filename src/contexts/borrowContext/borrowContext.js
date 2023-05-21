import { createContext, useContext, useState } from "react";
import { approveAccount } from "../../lib/stcContract";

const BorrowContext = createContext();

export const BorrowProvider = ({ children }) => {
  const [vault, setVault] = useState(true);
  const [generateSTC, setGenerateSTC] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [colRatio, setColRatio] = useState(null);
  const [colRt, setColRt] = useState(null);
  const [totalXdcIn, setTotalXdcIn] = useState(null);
  const [totalStcOut, setTotalStcOut] = useState(null);
  const [generateRes, setGenerateRes] = useState(false);

  const handleVaultNext = () => {
    setVault(false);
    setGenerateSTC(true);
  };
  const a = () => {
    console.log("GGU");
  };

  const handleGenerateSTCNext = (genRes) => {
    setGenerateSTC(false);
    setGenerateRes(genRes);
    setConfirm(true);
  };

  const handleGenerateSTCBack = () => {
    setGenerateSTC(false);
    setVault(true);
  };

  //gets totalxdcin,and sets both xdcin and stcout
  const calculateAmounts = (xdcIn, stcOut, hntFee) => {
    setTotalStcOut(stcOut);
    setTotalXdcIn(xdcIn + hntFee);
  };

  //resets vault setup to initial value; important to ensure vault management are in order(users don't need to refresh)
  const resetVaultSetup = () => {
    setVault(true);
    setGenerateSTC(false);
    setConfirm(false);
    setGenerateRes(false);
  };

  return (
    <BorrowContext.Provider
      value={{
        vault,
        confirm,
        colRatio,
        colRt,
        generateSTC,
        totalStcOut,
        totalXdcIn,
        generateRes,
        setVault,
        setGenerateSTC,
        setConfirm,
        setColRatio,
        setColRt,
        handleVaultNext,
        handleGenerateSTCNext,
        handleGenerateSTCBack,
        calculateAmounts,
        resetVaultSetup,
      }}
    >
      {children}
    </BorrowContext.Provider>
  );
};

export function useBorrow() {
  return useContext(BorrowContext);
}
