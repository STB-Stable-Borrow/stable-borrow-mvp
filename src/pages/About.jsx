import React, { useState } from "react";
import LandingBody from "../layouts";
import { toggleAbout } from "../data/toggleAboutContent";
import { useAbout } from "../context/aboutContext";
import back from "../assets/borrow/back.svg";
import next from "../assets/borrow/next.svg";

function About() {
  const abouts = useAbout();
  const { about, handleAboutToggle } = abouts;

  return (
    <LandingBody>
      <div className="self-center full w-full h-[75.6vh] mt-[8.6vh] border-[#009FBD50] border-[3px] rounded-lg px-[1.25vw] py-[2.22vh] ">
        <div className="flex justify-between w-full h-[70px] bg-[#01303870] rounded-lg px-[29px] py-4 ">
          {toggleAbout.map((item) => (
            <button
              key={item.name}
              onClick={() => handleAboutToggle(item.name)}
              className={`text-[#FFFFFF] px-4 rounded-lg text-sm font-bold ${
                item.name === about
                  ? "bg-[#009FBD]"
                  : " border-[#009FBD] border-2"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2 mt-2  mx-6  text-[#FFFFFF] pr-4 h-[58vh] overflow-y-scroll ">
          {toggleAbout.map(
            (item) =>
              item.name === about && (
                <div key={item.id} className="">
                  {item.content.map((content) => {
                    return (
                      <p className="text-justify text-sm mb-4">{content}</p>
                    );
                  })}
                </div>
              )
          )}
        </div>
      </div>
    </LandingBody>
  );
}

export default About;
