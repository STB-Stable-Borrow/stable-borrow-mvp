import { createContext, useContext, useState } from "react";

const BorrowContext = createContext();

export const BorrowProvider = ({ children }) => {
  const [vault, setVault] = useState(null);
  const [genateSTC, setGenerateSTC] = useState(null);
  const [confirm, setConfirm] = useState(null);

  const handleVault = () => {
    setVault((prevState) => !prevState);
  };

  const handleGenerateSTC = () => {
    setGenerateSTC((prevState) => !prevState);
  };

  const handleConfirm = () => {
    setConfirm((prevState) => !prevState);
  };

  return (
    <BorrowContext.Provider
      value={{
        vault,
        setVault,
        genateSTC,
        setGenerateSTC,
        confirm,
        setConfirm,
        handleVault,
        handleGenerateSTC,
        handleConfirm,
      }}
    >
      {children}
    </BorrowContext.Provider>
  );
};

export function useBorrow() {
  return useContext(BorrowContext);
}
