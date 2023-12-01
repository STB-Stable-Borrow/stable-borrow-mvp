import React from "react";

function ReclaimToken({ label, number, question, formData, setFormData }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="w-full mb-3.5">
      <div className="w-full">
        <div className="flex items-center w-full mb-[1.25vh]">
          <label
            htmlFor=""
            className="text-[#009FBD] font-semibold w-[15.28vw] "
          >
            Question {number} - <br /> {label}:
          </label>
          <select
            id=""
            className="w-full h-[4.63vh] bg-[#B0B0B0] rounded-[0.63rem] px-[1.30vw] outline-none"
            name={`question_${number}`}
            onChange={handleChange}
          >
            {question.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </div>
        <div className="flex items-center ">
          <label
            htmlFor=""
            className="text-[#009FBD] font-semibold w-[15.28vw]  "
          >
            Your Answer:
          </label>
          <div className="w-full">
            <input
              type="text"
              className="w-full outline-none bg-inherit border-dashed text-[#B0B0B0] border-b-[#D9D9D9] border-b-[0.06rem] "
              placeholder="Type your answer here"
              name={`answer_${number}`}
              onChange={handleChange}
            />
            <small className="text-[#FF1F1F] text-[0.47rem] ">
              ERROR ERROR ERROR
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReclaimToken;
