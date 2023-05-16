import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useDashboard } from "../../contexts/dashboardContext";
import Home from "./dashhome/Home";
import DashBorrow from "../dashboard/dashborrow/DashBorrow";
import Earn from "./dashearn/Earn";
import Exchange from "./dashexchange/Exchange";
import History from "./dashhistory/History";
import Settings from "./dashsettings/Settings";

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
    <div className="flex w-screen h-screen overflow-none bg-[#292C31] px-[80px] ">
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
        <div className="mt-[3.6vh] w-full h-full mb-[4.88vh] overflow-y-auto">
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
