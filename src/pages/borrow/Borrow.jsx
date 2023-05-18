import React, {useEffect, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/borrow/logo.svg";
import BorrowNav from "./BorrowNav";
import { useBorrow } from "../../contexts/borrowContext/borrowContext";
import VaultMgt from "./VaultMgt";
import Generate from "./Generate";
import Confirmations from "./Confirmations";
import { Web3ModalContext } from "../../contexts/web3ModalContext";

function Borrow() {
  const navigate = useNavigate();
  const { web3, account, address, connected, chainId, xdcBalance, xdcBlnc, getXdcBalance } = useContext(Web3ModalContext)
  console.log("connected: ", connected)
  console.log("chainId: ", chainId)
  console.log("account: ", account)
  console.log("address: ", address)

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

  // get values of important variables
  useEffect(() => {
    if(connected && account) {
      getXdcBalance(web3, account);
    }
   
  }, [connected, account, getXdcBalance]);

  console.log("balance: ", xdcBalance)
  console.log("blnc: ", xdcBlnc)

  const {
    vault,
    generateSTC,
    confirm,
    handleVaultNext,
    handleGenerateSTCNext,
    handleGenerateSTCBack,
  } = useBorrow();
  return (
    <div className="w-screen h-screen bg-[#292C31] ">
      <Link to={"/"}>
        <img
          src={logo}
          alt=""
          className=" pt-[6vh] pl-[6.2vw] mb-[5.87vh] h-[9.57vh] "
        />
      </Link>
      <div className="mx-[147px]    ">
        <BorrowNav />
        <div className="bg-[#202225] w-full mt-[3.2vh] flex items-center justify-center text-white rounded-[15px] h-[70vh] ">
          {vault && <VaultMgt _xdcBalance={xdcBlnc} onNextButtonClicked={handleVaultNext} onLoaded={verifyConnection}/>}
          {generateSTC && (
            <Generate
              onNextButtonClicked={handleGenerateSTCNext}
              onBackButtonClicked={handleGenerateSTCBack}
            />
          )}
          {confirm && <Confirmations />}
        </div>
      </div>
    </div>
  );
}

export default Borrow;
