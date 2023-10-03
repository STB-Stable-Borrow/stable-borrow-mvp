import React, { useState } from "react";
import TokenDetailsIndex from "./TokenDetailsIndex";
import SecurityQuestionsIndex from "./SecurityQuestionsIndex";
import Verification from "./Verification";
import ReclaimTokenAnswersIndex from "./ReclaimTokenAnswersIndex";
import ReclaimTokenIndex from "./ReclaimTokenIndex";

function Security({
  showSecurityModal,
  setShowSecurityModal,
  showReclaimModal,
  setShowReclaimModal,
}) {
  // comp1
  const [showSecurityQuestionsIndex, setShowSecurityQuestionsIndex] =
    useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [showReclaimToken, setShowReclaimToken] = useState(true);

  const [formData, setFormData] = useState([]);
  // comp2
  const [showReclaimTokenAnswers, setShowReclaimTokenAnswers] = useState(false);
  const [showTokenDetails, setShowTokenDetails] = useState(true);

  const onProceedClick = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowVerification(true);
    setShowSecurityQuestionsIndex(false);
    setShowReclaimToken(false);
  };

  const onShowAsProfileClick = () => {
    setShowTokenDetails(false);
    setShowReclaimTokenAnswers(true);
    setShowReclaimToken(false);
  };

  const onEditQuestionsAndAnswersClick = () => {
    setShowTokenDetails(true);
    setShowReclaimTokenAnswers(false);
    setShowReclaimToken(false);
  };

  return (
    <div className="flex w-full gap-[1.25vw] items-center  ">
      <div className="security-container-a py-[1.13vh] px-[2.08vw] h-[71vh] w-[70%] text-xs">
        <div className="rounded-[0.31rem] border-[0.22rem] border-[#009FBD80] w-[16.52vw] flex items-center justify-center mx-auto py-1 mb-[2.87vh]">
          <h1 className="security-header">
            {showSecurityQuestionsIndex && "SECURE TOKEN"}
            {showVerification && "SECURE TOKEN"}
            {showReclaimToken && "RECLAIM TOKEN"}
          </h1>
        </div>
        {showSecurityQuestionsIndex && (
          <SecurityQuestionsIndex
            handleProceed={onProceedClick}
            formData={formData}
            setFormData={setFormData}
          />
        )}
        {showVerification && (
          <Verification
            showSecurityModal={showSecurityModal}
            setShowSecurityModal={setShowSecurityModal}
          />
        )}
        {showReclaimToken && (
          <ReclaimTokenIndex
            showReclaimModal={showReclaimModal}
            setShowReclaimModal={setShowReclaimModal}
          />
        )}
      </div>
      <div className="security-container-b pl-[1.20vw] pr-[0.99vw] pt-[2.50vh] pb-[1.94vh] w-[30%] h-[65.33vh] text-xs">
        <div className="rounded-[0.31rem] border-[0.16rem] border-[#009FBD80] w-full flex items-center justify-center mx-auto py-1 mb-[3.70vh]">
          <h1 className="security-header-b text-center ">
            {showTokenDetails && (
              <span>
                YOUR STB SOULBOUND <br />
                TOKEN DETAILS
              </span>
            )}
            {showReclaimTokenAnswers && (
              <span>
                ANSWERS PROVIDED TO <br /> RECLAIM TOKEN
              </span>
            )}
          </h1>
        </div>
        {showTokenDetails && (
          <TokenDetailsIndex handleShowAsProfile={onShowAsProfileClick} />
        )}

        {showReclaimTokenAnswers && (
          <ReclaimTokenAnswersIndex
            handleEditQuestionsAndAnswersClick={onEditQuestionsAndAnswersClick}
          />
        )}
      </div>
    </div>
  );
}

export default Security;
