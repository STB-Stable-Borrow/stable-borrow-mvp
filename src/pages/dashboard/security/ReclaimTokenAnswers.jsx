import React from "react";

function ReclaimTokenAnswers({ number, answer, question, label }) {
  return (
    <div className=" text-[0.75rem] font-semibold">
      <h3 className="text-[#009FBD]">
        Question {number} - {label}
      </h3>
      <div className="text-[#B0B0B0] ">
        <p className="flex items-center gap-[1.31rem]">
          <span className="w-[3.56rem]">Question:</span>
          <span className="font-normal">{question}</span>
        </p>
        <p className="flex items-center gap-[1.31rem]">
          <span className="w-[3.56rem]">Answer:</span>
          <span className="font-normal">{answer}</span>
        </p>
      </div>
    </div>
  );
}

export default ReclaimTokenAnswers;
