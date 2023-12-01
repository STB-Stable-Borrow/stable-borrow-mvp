import React from "react";
import left from "../../../assets/dashboard/left.svg";
import ReclaimTokenAnswers from "./ReclaimTokenAnswers";
import securityQuestions from "../../../data/securityQuestions";

function ReclaimTokenAnswersIndex({ handleEditQuestionsAndAnswersClick }) {
  return (
    <div className="flex flex-col h-[50vh] justify-between">
      {securityQuestions.map((item) => {
        return (
          <ReclaimTokenAnswers
            key={item.id}
            label={item.label}
            question={item.question}
            answer={item.answer}
            number={item.id}
          />
        );
      })}
      <button
        className="bg-[#009FBD] text-white flex items-center justify-center gap-2 w-full h-[4.54vh] rounded-[0.44rem] mx-auto mt-4 "
        onClick={handleEditQuestionsAndAnswersClick}
      >
        <img src={left} alt="" className="w-[1.50em] h-[1.50em]" />
        Edit Questions and Answers
      </button>
    </div>
  );
}

export default ReclaimTokenAnswersIndex;
