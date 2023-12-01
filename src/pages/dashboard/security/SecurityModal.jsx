import React, { useState } from "react";
import cop from "../../../assets/dashboard/cop.svg";
import download from "../../../assets/dashboard/download.svg";

function SecurityModal() {
  const question1 = "What is the Token ID?";
  const question2 = "The Second Question?";
  const question3 = "The Third Question?";
  const [formData, setFormData] = useState({
    answer1: "",
    answer2: "",
    answer3: "",
  });

  const handleCopy = (e) => {
    e.preventDefault();
    const textToCopy =
      `Question 1: ${question1}\nAnswer 1: ${formData.answer1}\n` +
      `Question 2: ${question2}\nAnswer 2: ${formData.answer2}\n` +
      `Question 3: ${question3}\nAnswer 3: ${formData.answer3}`;

    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Questions and Answers copied to clipboard!");
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  return (
    <div className="text-[#B0B0B0]">
      <h3 className="font-black text-[#009FBD] text-center mb-[2.19em] ">
        Your STB Soulbound Token has been Secured Successfully!
      </h3>
      <p className=" text-sm text-center font-semibold mb-[3.5rem]">
        <span className="text-[#009FBD]">NOTE: </span>To reclaim the Token, the
        beneficiary must provide answers to the following questions
        respectively.
      </p>
      <form action="" className="text-sm flex flex-col gap-[2.81rem] ">
        <div className="flex items-center ">
          <label htmlFor="" className="text-[#009FBD] w-[15rem] ">
            {question1}
          </label>
          <input
            type="text"
            className="w-full outline-none bg-inherit border-dashed text-[#B0B0B0] border-b-[#D9D9D9] border-b-[0.06rem] "
            placeholder="Type your answer here"
            value={formData.answer1}
            onChange={(e) =>
              setFormData({ ...formData, answer1: e.target.value })
            }
          />
        </div>
        <div className="flex items-center ">
          <label htmlFor="" className="text-[#009FBD] w-[15rem] ">
            {question2}
          </label>
          <input
            type="text"
            className="w-full outline-none bg-inherit border-dashed text-[#B0B0B0] border-b-[#D9D9D9] border-b-[0.06rem] "
            placeholder="Type your answer here"
            value={formData.answer2}
            onChange={(e) =>
              setFormData({ ...formData, answer2: e.target.value })
            }
          />
        </div>
        <div className="flex items-center ">
          <label htmlFor="" className="text-[#009FBD] w-[15rem] ">
            {question3}
          </label>
          <input
            type="text"
            className="w-full outline-none bg-inherit border-dashed text-[#B0B0B0] border-b-[#D9D9D9] border-b-[0.06rem] "
            placeholder="Type your answer here"
            value={formData.answer3}
            onChange={(e) =>
              setFormData({ ...formData, answer3: e.target.value })
            }
          />
        </div>
        <div className="w-full flex items-center justify-between gap-[1.06rem] text-[.625rem]">
          <button
            className="w-full border-[2px] border-[#585858] h-[4.54vh] rounded-[0.44rem] flex items-center justify-center gap-2"
            onClick={handleCopy}
          >
            <img src={cop} alt="" className="w-[1.24em]  " /> Copy Questions and
            Answers
          </button>
          <button className="w-full bg-[#585858] h-[4.54vh] rounded-[0.44rem] flex items-center justify-center gap-2 ">
            <img src={download} alt="" className="w-[1.24em]  " /> Download
            Questions and Answers
          </button>
        </div>
      </form>
    </div>
  );
}

export default SecurityModal;
