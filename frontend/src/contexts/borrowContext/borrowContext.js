import { createContext, useContext, useState } from "react";

const BorrowContext = createContext();

export const BorrowProvider = ({ children }) => {
  const [vault, setVault] = useState(true);
  const [generateSTC, setGenerateSTC] = useState(false);
  const [confirm, setConfirm] = useState(false);

  const handleVaultNext = () => {
    setVault(false);
    setGenerateSTC(true);
  };

  const handleGenerateSTCNext = () => {
    setGenerateSTC(false);
    setConfirm(true);
  };

  const handleGenerateSTCBack = () => {
    setGenerateSTC(true);
    setConfirm(false);
  };

  return (
    <BorrowContext.Provider
      value={{
        vault,
        setVault,
        generateSTC,
        setGenerateSTC,
        confirm,
        setConfirm,
        handleVaultNext,
        handleGenerateSTCNext,
        handleGenerateSTCBack,
      }}
    >
      {children}
    </BorrowContext.Provider>
  );
};

export function useBorrow() {
  return useContext(BorrowContext);
}
