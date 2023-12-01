import React, { useContext, useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useDashboard } from "../../contexts/dashboardContext";
import Home from "./dashhome/Home";
import DashBorrow from "../dashboard/dashborrow/DashBorrow";
import Earn from "./dashearn/Earn";
import Exchange from "./dashexchange/Exchange";
import TokenizationIndex from "./tokenization/TokenizationIndex";
import History from "./dashhistory/History";
import Settings from "./dashsettings/Settings";
import { Web3ModalContext } from "../../contexts/web3ModalContext";
import { useNavigate } from "react-router-dom";
import { getTokenDetails } from "../../lib/filebaseIpfs";
import { useBorrow } from "../../contexts/borrowContext/borrowContext";
import {
  getAllHauntedVaults,
  getAllLiquidatedVaults,
  getAllUserVaults,
  getColRatio,
  getUserTotalDebt,
  getUserTotalLockedCol,
} from "../../lib/stbContract";
import { getStcBalance } from "../../lib/stcContract";
import { getCurrentPrice } from "../../lib/coingecko";
import LoadingSpinner from "../../utils/spinner";
import { CivicPassProvider } from "../../contexts/civicpassContext";
import { isRegistered } from "../../lib/sbtContract";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MobileNav from "./MobileNav";
import SecurityIndex from "./security/SecurityIndex";
import SecurityModal from "../dashboard/security/SecurityModal";
import ReclaimModal from "./security/ReclaimModal";

function Dashboard() {
  const {
    web3,
    account,
    address,
    stb,
    stc,
    sbt,
    stbSwap,
    connected,
    chainId,
    xdcBalance,
    xdcBlnc,
    getXdcBalance,
    disconnect,
    connect,
  } = useContext(Web3ModalContext);
  const {
    showHome,
    showDashBorrow,
    showEarn,
    showExchange,
    showTokenization,
    showHistory,
    showSettings,
    onHomeClick,
    showSecurity,
    onSecurityClick,
    onDashBorrowClick,
    onEarnClick,
    onTokenizationClick,
    onExchangeClick,
    onHistoryClick,
    onSettingsClick,
    resetVaultSetup,
    isLoading,
    onVaultBackClick,
    active,
    activeTab,
    handleLoading,
  } = useDashboard();
  const navigate = useNavigate();
  const { resetVaultBorrowSetup } = useBorrow();

  const [isReg, setIsReg] = useState(false);
  const [profile, setProfile] = useState(null);
  const [allVaults, setAllVaults] = useState(null);
  const [totalLck, setTotalLck] = useState(null);
  const [totalDebt, setTotalDebt] = useState(null);
  const [colRatio, setColRatio] = useState(null);
  const [stcBalance, setStcBalance] = useState(null);
  const [stcBlnc, setStcBlnc] = useState(null);
  const [xdcPrice, setXdcPrice] = useState(null);
  const [xdcPrc, setXdcPrc] = useState(null);
  const [hauntedVlts, setHauntedVlts] = useState(null);
  const [liquidatedVlts, setLiquidatedVlts] = useState(null);

  //reset vault setup
  useEffect(() => {
    resetVaultBorrowSetup();
  }, []);

  // verify connection status and chainId
  const verifyConnection = () => {
    const acceptIds = [50, 51];
    if (!connected && !chainId) {
      connect();
    }
    if (connected && !acceptIds.includes(chainId)) {
      toast.error(
        "You connected to wrong chain, disconnect and connect to Apothem or Xinfin."
      );
      navigate("/");
    }
  };

  //get registration status
  useEffect(() => {
    (async () => {
      if (connected && account) {
        await isRegistered(sbt, account).then((res) => {
          setIsReg(res);
        });
      }
    })();
  }, [isReg]);

  //get profile info
  useEffect(() => {
    (async () => {
      if (connected && account) {
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
      if (connected && account) {
        await getAllUserVaults(stb, account).then((res) => {
          setAllVaults(res);
        });
        await getUserTotalDebt(stb, account).then((res) => {
          setTotalDebt(res);
        });
        await getUserTotalLockedCol(stb, account).then((res) => {
          setTotalLck(res);
        });
        await getColRatio(stb).then((res) => {
          setColRatio(res);
        });
      }
    })();
  },[]);

  //get balances
  useEffect(() => {
    (async () => {
      if (connected && account) {
        getXdcBalance(web3, account);
        await getStcBalance(stc, account).then((res) => {
          setStcBalance(res[0]);
          setStcBlnc(res[1]);
        });
      }
    })();
  },[]);

  //get prices
  useEffect(() => {
    (async () => {
      if (connected && account) {
        getCurrentPrice("xdce-crowd-sale").then((price) => {
          if (price) {
            setXdcPrice(price[0]);
            setXdcPrc(price[1]);
          }
        });
      }
    })();
  },[]);

  //get haunter info
  useEffect(() => {
    (async () => {
      if (connected && account) {
        await getAllHauntedVaults(stb).then((res) => {
          setHauntedVlts(res);
        });
        await getAllLiquidatedVaults(stb).then((res) => {
          setLiquidatedVlts(res);
        });
      }
    })();
  },[]);

  const [showSecurityModal, setShowSecurityModal] = useState(false);
  const [showReclaimModal, setShowReclaimModal] = useState(false);

  return (
    <div className="flex w-screen md:h-screen h-screen overflow-none bg-[#292C31] md:px-[4.17vw] ">
      {isLoading && <LoadingSpinner />}
      <div className="bg-[#202225] my-[4.9vh] h-[90vh] text-[#D9D9D9] py-[5.37vh] px-[12px] rounded-[20px] hidden md:block ">
        <Sidebar
          active={active}
          activeTab={activeTab}
          onDashBorrowClick={onDashBorrowClick}
          onEarnClick={onEarnClick}
          onExchangeClick={onExchangeClick}
          onHistoryClick={onHistoryClick}
          onSettingsClick={onSettingsClick}
          onHomeClick={onHomeClick}
          onTokenizationClick={onTokenizationClick}
          onSecurityClick={onSecurityClick}
          _verifyConnection={verifyConnection}
          _disconnect={disconnect}
        />
      </div>
      <div className="flex flex-col w-full md:ml-[43px] ">
        <div className=" md:mt-[2.6vh] text-[#B0B0B0] ">
          <div className="hidden md:block  ">
            <Navbar _account={account} _address={address} _profile={profile} />
          </div>
          <div className=" md:hidden ">
            <MobileNav
              active={active}
              activeTab={activeTab}
              onDashBorrowClick={onDashBorrowClick}
              onEarnClick={onEarnClick}
              onExchangeClick={onExchangeClick}
              onHistoryClick={onHistoryClick}
              onSettingsClick={onSettingsClick}
              onHomeClick={onHomeClick}
            />
          </div>
        </div>
        <div className="mt-[1.6vh] w-full h-full mb-[2.88vh] overflow-y-auto">
          {showHome && (activeTab === 1 || showHome) && (
            <Home
              _isReg={isReg}
              _totalLck={totalLck}
              _totalDebt={totalDebt}
              _xdcPrc={xdcPrc}
              _hauntedVlts={hauntedVlts}
              _liquidatedVlts={liquidatedVlts}
              _colRatio={colRatio}
              _allVaults={allVaults}
            />
          )}
          {showDashBorrow && (activeTab === 2 || showDashBorrow) && (
            <DashBorrow
              _web3={web3}
              _onVaultBackClick={onVaultBackClick}
              _resetVaultSetup={resetVaultSetup}
              _stcBlnc={stcBlnc}
              _totalLck={totalLck}
              _totalDebt={totalDebt}
              _xdcPrc={xdcPrc}
              _colRatio={colRatio}
              _allVaults={allVaults}
              _stb={stb}
              _stc={stc}
              _xdcBalance={xdcBlnc}
              _account={account}
            />
          )}
          {showEarn && (activeTab === 3 || showEarn) && (
            <Earn
              _web3={web3}
              _stb={stb}
              _account={account}
              _colRatio={colRatio}
              _hauntedVlts={hauntedVlts}
              _liquidatedVlts={liquidatedVlts}
              _xdcPrc={xdcPrc}
            />
          )}
          {showExchange && (activeTab === 5 || showExchange) && (
            <Exchange
              _account={account}
              _handleLoading={handleLoading}
              _web3={web3}
              _stbSwap={stbSwap}
              _stc={stc}
              _stb={stb}
              _colRatio={colRatio}
              _xdcBln={xdcBlnc}
              _stcBln={stcBlnc}
              _xdcPrc={xdcPrc}
            />
          )}
          {showHistory && (activeTab === 4 || showHistory) && <History />}
          {showSettings && (activeTab === 6 || showSettings) && (
            <Settings
              _profile={profile}
              _stcBlnc={stcBlnc}
              _xdcBalance={xdcBlnc}
              _xdcPrc={xdcPrc}
            />
          )}
          {showTokenization && (activeTab === 7 || showTokenization) && (
            <TokenizationIndex />
          )}
          {showSecurity && (activeTab === 8 || showSecurity) && (
            <SecurityIndex
              showSecurityModal={showSecurityModal}
              setShowSecurityModal={setShowSecurityModal}
              showReclaimModal={showReclaimModal}
              setShowReclaimModal={setShowReclaimModal}
            />
          )}
        </div>
      </div>

      {/* security  modal */}

      {showSecurityModal && (
        <div
          className="absolute top-0 left-0 backdrop-blur-sm w-screen h-screen z-[0]"
          onClick={() => setShowSecurityModal(false)}
        ></div>
      )}
      {showSecurityModal && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#202225] w-[48.23vw] h-auto rounded-[2.50rem] py-[1.62em] px-[4.5em] border-[5px] border-[#009FBD80] ">
          <SecurityModal />
        </div>
      )}

      {/* reclaim modal */}
      {showReclaimModal && (
        <div
          className="absolute top-0 left-0 backdrop-blur-sm w-screen h-screen z-[0]"
          onClick={() => setShowReclaimModal(false)}
        ></div>
      )}

      {showReclaimModal && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#202225] w-[48.23vw] h-auto rounded-[2.50rem] py-[1.62em] px-[4.5em] border-[5px] border-[#009FBD80] ">
          {" "}
          <ReclaimModal />{" "}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
