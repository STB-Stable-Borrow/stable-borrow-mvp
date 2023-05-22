import { createContext, useContext, useState } from "react";

const EarnContext = createContext();

export const EarnProvider = ({ children }) => {
  const [avatar, setAvatar] = useState(null);

  //save avatar url
  const saveAvatar = (url) => {
    setAvatar(url);
  };

  return (
    <EarnContext.Provider
      value={{
        avatar,
        saveAvatar,
      }}
    >
      {children}
    </EarnContext.Provider>
  );
};

export function useEarn() {
  return useContext(EarnContext);
}
