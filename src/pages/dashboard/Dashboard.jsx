import React, {useContext, useEffect, useState} from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useDashboard } from "../../contexts/dashboardContext";
import Home from "./Home";
import DashBorrow from "./DashBorrow";
import Earn from "./Earn";
import Exchange from "./Exchange";
import History from "./History";
import Settings from "./Settings";
import { Web3ModalContext } from "../../contexts/web3ModalContext";
import { useNavigate } from "react-router-dom";
import { getTokenDetails } from "../../lib/filebaseIpfs";

function Dashboard() {
  const {web3, account, address, stb, stc, sbt,  connected, chainId, xdcBalance, xdcBlnc, getXdcBalance, disconnect} = useContext(Web3ModalContext);
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
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);
  

   // verify connection status and chainId
   const verifyConnection = () => {
    const acceptIds = [50, 51]
    if(!connected && !chainId) {
      window.alert("You have to connect your wallet to proceed")
      navigate("/")
     }
     if(connected && !acceptIds.includes(chainId)){
      window.alert("You connected to wrong chain, disconnect and connect to Apothem or Xinfin.")
      navigate("/")
     } 
  }

  //get profile info
  useEffect(() => {
    (async () => {
      if(connected && account) {
      getTokenDetails(account).on("success", (res) => {
        const profileinfo = Buffer.from(res.data.Body, "utf8").toString();
        const profileFormatted = profileinfo.replaceAll("\n", " ");
        const json = JSON.parse(profileFormatted);
        const _profile = {
          tokenId: json.id,
          username: json.name,
          about: json.description,
          imgUrl: json.image,
          creationDate: json.date,
        };
        setProfile(_profile);
      });
      }
    })();
}, [profile]);
  
  
  useEffect(() => {
    (async () => {
      if(connected && account) {
        getXdcBalance(web3, account);
        //get stc balance
      }
    })();
}, [xdcBalance]);

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
          _verifyConnection={verifyConnection}
          _disconnect={disconnect}
        />
      </div>
      <div className="flex flex-col w-full ml-[43px] ">
        <div className=" mt-[7.6vh] text-[#B0B0B0]   ">
          <Navbar _account={account} _address={address} _profile={profile}/>
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
