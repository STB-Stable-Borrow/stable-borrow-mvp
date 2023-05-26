import React, {useState, useEffect} from "react";
import arrow from "../../assets/borrow/arrow.svg";
import dash from "../../assets/borrow/dash.svg";
import approve from "../../assets/borrow/approve.svg";
import back from "../../assets/borrow/back.svg";
import next from "../../assets/borrow/next.svg";
import { useBorrow } from "../../contexts/borrowContext/borrowContext";
import {useNavigate } from "react-router-dom";
import { approveAccount } from "../../lib/stcContract";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function VaultMgt({ onNextButtonClicked, onLoaded , _xdcBalance, _xdcPrice, _colRatio, _maxSTC, _account, _stc, _stb}) {
  const navigate = useNavigate();
  const {calculateAmounts, resetVaultSetup} = useBorrow();
  const [xdcIn, setXdcIn] = useState(null);
  const [stcOut, setStcOut] = useState(null);
  const [hntFee, setHntFee] = useState(null);
  const [isApproved, setIsApproved] = useState(false);

  const approveBtn = document.getElementById("approve-btn");
  const nextBtn = document.getElementById("vm-next-btn");
  const maxU256 = 115792089237316195423570985008687907853269984665640564039457584007913129639935n; 

 

  //sets xdc amount, gets and sets returned STC
  const handleInputXDC = (e) => {
    let input = e.target.value;
    setXdcIn(parseFloat(input));
    const haunterFee = (10/100) * input;
    setHntFee(haunterFee)
    const stcOut = input /_colRatio;
    setStcOut(stcOut.toFixed(4))
  }

  //handles approve button colour change
  const handleApproveBtnColour = () => {
    if (approveBtn) {
      if (stcOut > 0) {
        approveBtn.style.backgroundColor = "#865DFF";
      }else{
        approveBtn.style.backgroundColor = "#585858";
      }
      
    }
  }

  //handles next button colour
  const handleNextButtonColour = async() => {
    if (_account && _stc && nextBtn) {
      const stbAddress = _stb.options.address;
      await _stc.methods.allowance(_account, stbAddress).call().then((res) => {
        if (res == maxU256 && nextBtn && stcOut > 0) {
          nextBtn.style.backgroundColor = "#009FBD"
          setIsApproved(true);
        }else{
          nextBtn.style.backgroundColor = "#585858"
          setIsApproved(false);
        }
    }).catch((err) => {
      if (err.message.includes("Response has no error or result for request")){
        toast.error("You are offline due to internet connection. check your connection and try again"); 
      }else{
        console.log("Error while getting allowance between user and STB :", err)
        toast.error("Error while getting allowance between user and STB. Try again later")
      }   
    })
    }
  }

  handleNextButtonColour();
  handleApproveBtnColour();

  //handles approve button click
  const handleAllowance = async () => {

    if(approveBtn.style.backgroundColor === "rgb(134, 93, 255)") {
      if(isApproved) {
        onNextButtonClicked();
      }else{
        const stbAddress = _stb.options.address
        await approveAccount(_stc, _account, stbAddress).then((res) => {
          if (res) {
            nextBtn.style.backgroundColor = "#009FBD"
            setIsApproved(true);
          }else{
            nextBtn.style.backgroundColor = "#585858"
            setIsApproved(false);
          }
        });
      }
    }
    
  }

  //handles next button click
  const handleNextButton = async () => { 
   if(isApproved && nextBtn.style.backgroundColor === "rgb(0, 159, 189)") {
      onNextButtonClicked();
    }
  }

  return (
    <div>
      <div className="flex items-center pt-[2.5vh] px-[34px] gap-[16px] text-sm">
        <div className="bg-[#292c31] py-[12px] px-[24px] w-[400px] rounded-[12px] ">
          <h1 className="text-[#865DFF] text-center font-bold ">
            Configure your Vault
          </h1>
          <p className="text-center mb-[2.6vh] ">
            Simulate your vault by configuring the amount of collateral to
            deposit.
          </p>
          <div className=" mb-[2.1vh] ">
            <div className="flex items-center justify-between mb-1">
              <p>Deposit XDC</p>
              <p className="text-[#865dff] ">
                Balance: <span className="text-white">{_xdcBalance}</span>
              </p>
            </div>
            <div className="w-full relative text-[#292C31]">
              <input
              onInput={(e) => {handleInputXDC(e)}}
              onChange={calculateAmounts(xdcIn, stcOut, hntFee)}
                type="number"
                placeholder="Enter Amount"
                className="w-full bg-[#D5D5D5] rounded-[7px] h-[5.46vh] px-[21px] placeholder:text-[#292C31]  "
              />
              <h1 className="absolute top-1 right-[21px] font-semibold">XDC</h1>
            </div>
          </div>

          <div className="bg-[#202225] flex flex-col items-center py-[1vh] rounded-[12px] ">
            <h1 className="text-[#865DFF] text-center font-bold ">
              Generated STC
            </h1>
            <p className="mb-[2.75px]">
              Max: <span>{_maxSTC} STC</span>
            </p>
            <div className=" relative text-[#292C31]">
              <input
                type="number"
                className="w-[302px] bg-[#D5D5D5] rounded-[7px] h-[5.46vh] px-[21px]  "
                value={stcOut}
              />
              <h1 className="absolute top-1 right-[21px] font-semibold">XDC</h1>
            </div>
          </div>
          <img src={dash} alt="" className="my-[1.4vh]" />
          <h1 className="text-[#865DFF] text-center font-bold ">
            Vault Changes
          </h1>
          <div className="text-xs">
            <div className="flex justify-between items-center">
            <h1>Total Debt:</h1>
              <small>$0.00 → {stcOut}</small>
            </div>
            <div className="flex justify-between items-center">
            <h1>Haunter's fee:</h1>
              <small>0.00 → {hntFee}</small>
            </div>
            <div className="flex itme justify-between items-center">
              <h1>Annual interest:</h1>
              <small>0.00 → 0.15%</small>
            </div>
          </div>
        </div>
        <img src={arrow} alt="" className="w-[30px]" />
        <div className="bg-[#292c31] py-[12px] px-[24px] w-[400px] rounded-[12px] ">
          <h1 className="text-[#865DFF] text-center font-bold ">
            Configure your Vault
          </h1>
          <p className="text-center mb-[2.76vh] ">
            Simulate your vault by configuring the amount of collateral to
            deposit.
          </p>
          <p className="text-center mb-[2vh] ">
            <span className="text-[#865DFF] ">Note:</span> STB is only approved
            to transfer the collateral amount passed not less or more than.
          </p>
          <div className="flex flex-wrap justify-between gap-y-[3.3vh] mb-[5.27vh] text-xs ">
            <div className="w-[150px]  h-[8vh] bg-[#202225] rounded-[10px] py-[1.6vh] px-[13px] ">
              <h1 className="text-xs">Total Debt:</h1>
              <p className="font-bold">${stcOut}</p>
            </div>
            <div className="w-[150px]  h-[8vh] bg-[#202225] rounded-[10px] py-[1.6vh] px-[13px] ">
              <h1 className="text-xs">Collateralization Ratio:</h1>
              <p className="font-bold">{_colRatio}</p>
            </div>
            <div className="w-[150px]  h-[8vh] bg-[#202225] rounded-[10px] py-[1.6vh] px-[13px] ">
              <h1 className="text-xs">Current Price:</h1>
              <p className="font-bold">${_xdcPrice}</p> 
            </div>
            <div className="w-[150px]  h-[8vh] bg-[#202225] rounded-[10px] py-[1.6vh] px-[13px] ">
              <h1 className="text-xs">Liquidation Price:</h1>
              <p className="font-bold">${_xdcPrice}</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button onClick={handleAllowance} id="approve-btn" className="w-[198px] h-[6.6vh] bg-[#865DFF] flex items-center justify-center gap-2 hover:bg-opacity-75 rounded-lg ">
              Approve
              <img src={approve} alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-[110px] mt-[3.19vh] mb-[5.5vh] ">
        <button onClick={() => {navigate("/")}} className="border border-[#009FBD] w-[164px] h-[5.95vh] rounded-lg flex items-center justify-center gap-2 bg-inherit hover:opacity-75 ">
          <img src={back} alt="" />
          Back
        </button>
        <button
          id="vm-next-btn"
          className="bg-[#585858] w-[164px] h-[5.95vh] rounded-lg flex items-center justify-center gap-2  hover:bg-opacity-75 "
          onClick={handleNextButton}
        >
          Next
          <img src={next} alt="" onLoad={onLoaded}/>
        </button>
      </div>
    </div>
  );
}

export default VaultMgt;
