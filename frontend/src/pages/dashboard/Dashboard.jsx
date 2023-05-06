import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useDashboard } from "../../contexts/dashboardContext";
import Home from "./Home";
import DashBorrow from "./DashBorrow";
import Earn from "./Earn";
import Exchange from "./Exchange";
import History from "./History";
import Settings from "./Settings";

function Dashboard() {
  const {
    showHome,
    showDashBorrow,
    showEarn,
    showExchange,
    showHistory,
    showSettings,
    onHomeClick,
    onDashBorrowClick,
    onEarnClick,
    onExchangeClick,
    onHistoryClick,
    onSettingsClick,
  } = useDashboard();

  return (
    <div className="flex w-screen h-screen bg-[#585858] px-[80px] ">
      <div className="bg-[#202225] my-[4.9vh] h-[90vh]  text-[#D9D9D9] py-[5.37vh] px-[12px] rounded-[20px] ">
        <Sidebar
          onDashBorrowClick={onDashBorrowClick}
          onEarnClick={onEarnClick}
          onExchangeClick={onExchangeClick}
          onHistoryClick={onHistoryClick}
          onSettingsClick={onSettingsClick}
          onHomeClick={onHomeClick}
        />
      </div>
      <div className="flex flex-col w-full ml-[43px] ">
        <div className=" mt-[7.6vh] text-[#B0B0B0]   ">
          <Navbar />
        </div>
        <div className="mt-[3.6vh] w-full h-full mb-[4.88vh]">
          {showHome && <Home />}
          {showDashBorrow && <DashBorrow />}
          {showEarn && <Earn />}
          {showExchange && <Exchange />}
          {showHistory && <History />}
          {showSettings && <Settings />}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
