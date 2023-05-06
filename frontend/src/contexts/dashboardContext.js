import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [showHome, setShowHome] = useState(true);
  const [showDashBorrow, setShowDashBorrow] = useState(false);
  const [showEarn, setShowEarn] = useState(false);
  const [showExchange, setShowExchange] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const onHomeClick = () => {
    setShowHome(true);
    setShowDashBorrow(false);
    setShowEarn(false);
    setShowExchange(false);
    setShowHistory(false);
    setShowSettings(false);
  };

  const onDashBorrowClick = () => {
    setShowHome(false);
    setShowDashBorrow(true);
    setShowEarn(false);
    setShowExchange(false);
    setShowHistory(false);
    setShowSettings(false);
  };

  const onEarnClick = () => {
    setShowHome(false);
    setShowDashBorrow(false);
    setShowEarn(true);
    setShowExchange(false);
    setShowHistory(false);
    setShowSettings(false);
  };

  const onExchangeClick = () => {
    setShowHome(false);
    setShowDashBorrow(false);
    setShowEarn(false);
    setShowExchange(true);
    setShowHistory(false);
    setShowSettings(false);
  };

  const onHistoryClick = () => {
    setShowHome(false);
    setShowDashBorrow(false);
    setShowEarn(false);
    setShowExchange(false);
    setShowHistory(true);
    setShowSettings(false);
  };

  const onSettingsClick = () => {
    setShowHome(false);
    setShowDashBorrow(false);
    setShowEarn(false);
    setShowExchange(false);
    setShowHistory(false);
    setShowSettings(true);
  };

  return (
    <DashboardContext.Provider
      value={{
        showHome,
        setShowHome,
        showDashBorrow,
        setShowDashBorrow,
        showEarn,
        setShowEarn,
        showExchange,
        setShowExchange,
        showHistory,
        setShowHistory,
        showSettings,
        setShowSettings,
        onHomeClick,
        onDashBorrowClick,
        onEarnClick,
        onExchangeClick,
        onHistoryClick,
        onSettingsClick,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export function useDashboard() {
  return useContext(DashboardContext);
}
