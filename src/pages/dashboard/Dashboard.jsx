import React, {useContext, useEffect, useState} from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useDashboard } from "../../contexts/dashboardContext";
import Home from "./dashhome/Home";
import DashBorrow from "../dashboard/dashborrow/DashBorrow";
import Earn from "./dashearn/Earn";
import Exchange from "./dashexchange/Exchange";
import History from "./dashhistory/History";
import Settings from "./dashsettings/Settings";
import { Web3ModalContext } from "../../contexts/web3ModalContext";
import { useNavigate } from "react-router-dom";
import { getTokenDetails } from "../../lib/filebaseIpfs";
import { useBorrow } from "../../contexts/borrowContext/borrowContext";
import { getAllUserVaults, getColRatio, getUserTotalDebt, getUserTotalLockedCol } from "../../lib/stbContract";
import { getStcBalance } from "../../lib/stcContract";
import { getCurrentPrice } from "../../lib/coingecko";

function Dashboard() {
  const {web3, account, address, stb, stc, sbt,  connected, chainId, xdcBalance, xdcBlnc, getXdcBalance, disconnect, connect} = useContext(Web3ModalContext);
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
    resetBorrowSetup
  } = useDashboard();
  const navigate = useNavigate();
  const {resetVaultSetup} = useBorrow();

  const [profile, setProfile] = useState(null);
  const [allVaults, setAllVaults] = useState(null);
  const [totalLck, setTotalLck] = useState(null);
  const [totalDebt, setTotalDebt] = useState(null);
  const [colRatio, setColRatio] = useState(null);
  const [stcBalance, setStcBalance] = useState(null);
  const [stcBlnc, setStcBlnc] = useState(null);
  const [xdcPrice, setXdcPrice] = useState(null);
  const [xdcPrc, setXdcPrc] = useState(null);
  
  
  //reset vault setup
  useEffect(() => {
    resetVaultSetup();
  }, []);

   // verify connection status and chainId
   const verifyConnection = () => {
    const acceptIds = [50, 51]
    if(!connected && !chainId) {
      connect();
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

//get vaults, total locked and total debt
useEffect(() => {
  (async () => {
    if(connected && account) {
    await getAllUserVaults(stb, account).then((res) => {
      setAllVaults(res)
    });
    await getUserTotalDebt(stb, account).then((res) => {
      setTotalDebt(res)
    });
    await getUserTotalLockedCol(stb, account).then((res) => {
      setTotalLck(res)
    });
    await getColRatio(stb).then((res) => {
      setColRatio(res);
    })
    }
  })();
}, );
  
  
//get balances
  useEffect(() => {
    (async () => {
      if(connected && account) {
        getXdcBalance(web3, account);
        await getStcBalance(stc, account).then((res) => {
          setStcBalance(res[0]);
          setStcBlnc(res[1]);
        })
      }
    })();
}, [xdcBalance, stcBalance]);

//get prices
useEffect(() => {
  (async () => {
    if(connected && account) {
      getCurrentPrice("xdce-crowd-sale").then((price) => {
        if(price) {
          setXdcPrice(price[0]);
          setXdcPrc(price[1])
        }
      })
    }
  })();
}, );


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
          _verifyConnection={verifyConnection}
          _disconnect={disconnect}
        />
      </div>
      <div className="flex flex-col w-full ml-[43px] ">
        <div className=" mt-[7.6vh] text-[#B0B0B0]   ">
          <Navbar _account={account} _address={address} _profile={profile}/>
        </div>
        <div className="mt-[3.6vh] w-full h-full mb-[4.88vh] overflow-y-auto">
          {showHome && <Home _totalLck={totalLck} _totalDebt={totalDebt} _xdcPrc={xdcPrc}/>}
          {showDashBorrow && <DashBorrow _web3={web3} _resetBorrowSetup={resetBorrowSetup} _stcBlnc={stcBlnc}  _totalLck={totalLck} _totalDebt={totalDebt} _xdcPrc={xdcPrc} _colRatio={colRatio} _allVaults={allVaults} _stb={stb} _stc={stc} _xdcBalance={xdcBlnc} _account={account}/>}
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
