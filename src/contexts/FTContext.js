import { createContext, useEffect, useState } from "react";

export const FtContext = createContext({
  getColRatio: () => {},
  getStcBalance: () => {},
  colRatio: null,
  stcBalance: null,
  stcBlnc: null,
});

const FtProvider = ({ children }) => {
  const [colRatio, setColRatio] = useState(null);
  const [stcBalance, setStcBalance] = useState(null);
  const [stcBlnc, setStcBlnc] = useState(null);

  return (
    <FtContext.Provider
      value={{
        colRatio,
        stcBalance,
        stcBlnc,
      }}
    >
      {children}
    </FtContext.Provider>
  );
};

export default Web3ModalProvider;
