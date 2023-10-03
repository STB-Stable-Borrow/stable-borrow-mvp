import React, { useState } from "react";
import securityQuestions from "../../../data/securityQuestions";
import SecurityQuestions from "./SecurityQuestions";
import right from "../../../assets/dashboard/right.svg";

function SecurityQuestionsIndex({ handleProceed, formData, setFormData }) {
  return (
    <form>
      {securityQuestions.map((item) => {
        return (
          <SecurityQuestions
            key={item.id}
            number={item.id}
            label={item.label}
            questions={item.question}
            formData={formData}
            setFormData={setFormData}
          />
        );
      })}
      <button
        className="bg-[#585858] text-[#B0B0B0] flex items-center justify-center gap-2 w-[10.63vw] h-[4.54vh] rounded-[0.44rem] mx-auto mt-[2.17vh] "
        onClick={handleProceed}
      >
        Proceed <img src={right} alt="" className="w-[1.50em] h-[1.50em]" />
      </button>
    </form>
  );
}

export default SecurityQuestionsIndex;
