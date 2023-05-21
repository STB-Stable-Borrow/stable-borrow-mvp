import React, {useEffect, useContext, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/borrow/logo.svg";
import BorrowNav from "./BorrowNav";
import { useBorrow } from "../../contexts/borrowContext/borrowContext";
import VaultMgt from "./VaultMgt";
import Generate from "./Generate";
import Confirmations from "./Confirmations";
import { Web3ModalContext } from "../../contexts/web3ModalContext";
import { getCurrentPrice } from "../../lib/coingecko";
import { getColRatio, getRegFee } from "../../lib/stbContract";



function Borrow() {
  const navigate = useNavigate();
  const { web3, stb, stc, account, address, connected, chainId, xdcBalance, xdcBlnc,  getXdcBalance } = useContext(Web3ModalContext)
  const { vault, generateSTC, confirm, handleVaultNext, handleGenerateSTCNext, handleGenerateSTCBack, generateRes } = useBorrow();
  const [xdcPrice, setXdcPrice] = useState(null);
  const [xdcPrc, setXdcPrc] = useState(null);
  const [colRt, setColRt] = useState(null);

  // console.log("stb: ", stb)
  // console.log("stc: ", stc)
  // console.log("account: ", account)
  // console.log("address: ", address)

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

  // get balances
  useEffect(() => {
    if(connected && account) {
      getXdcBalance(web3, account);
    }
   
  }, [xdcBalance]);
  

  //get prices
  useEffect(() => {
    (async () => {
      await getCurrentPrice("xdce-crowd-sale").then((price) => {
        if(price) {
          setXdcPrice(price[0]);
          setXdcPrc(price[1])
        }
      })
    })();
  
}, );

//get and set collaritazation ratio
useEffect(() => {
  (async () => {
    if(connected && stb) {
      await getColRatio(stb).then((res) => {
        setColRt(res)
      });
    }
  })();
}, );

const getMaxSTC = () => {
 return((xdcBlnc/colRt).toFixed(4))
}
  // console.log("balance: ", xdcBalance)
  // console.log("blnc: ", xdcBlnc)
  // console.log("price: ", xdcPrice)
  // console.log("prc: ", xdcPrc)
  // console.log("colRatio: ", colRatio)

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
          {vault && <VaultMgt _xdcBalance={xdcBlnc} _xdcPrice={xdcPrc} _colRatio={colRt} _maxSTC={getMaxSTC()} _account={account} _stc={stc} onNextButtonClicked={handleVaultNext} onLoaded={verifyConnection}/>}
          {generateSTC && (
            <Generate onBackButtonClicked={handleGenerateSTCBack} _xdcPrice={xdcPrc} _colRatio={colRt} _stb={stb} _account={account} _web3={web3}/>
          )}
          {confirm && <Confirmations _generateRes={generateRes}/>}
        </div>
        
      </div>
    </div>
  );
}

export default Borrow;
