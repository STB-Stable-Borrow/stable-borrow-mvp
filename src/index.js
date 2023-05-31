import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./root.css";
import Logo from "../src/assets/landing/logo.svg";
import Phone from "../src/assets/landing/smartphone.svg";

const isSmallAndMedium = window.matchMedia("(max-width: 1024px)").matches;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {isSmallAndMedium ? (
      <div className="lg:hidden md:flex flex items-center justify-center bg-[#1E1E1E] h-[100vh] ">
        <div className="flex flex-col justify-evenly items-center h-[100vh]">
          <img src={Logo} alt="logo" />
          <img src={Phone} alt="smart phone" className="w-[62.2593vw]" />
          <h4 className="font-bold text-[#009FBD] text-center ">
            We apologize for any<br></br> inconvenience caused!
          </h4>
          <div className="flex flex-col justify-center items-center gap-2">
          <h4 className="text-center justify-center text-xs  text-white px-[12vh]">
            The web app is currently not available on Mobile Screens.
          </h4>

          <h4 className="text-center justify-center text-xs  text-white px-[12vh]">
            For the best User Experience, we recommend accessing the app on a
            Computer.
          </h4>

          <h4 className="text-center justify-center text-xs  text-white px-[10vh]">
            Thank you for your understanding and we appreciate your patience.
          </h4>
          </div>
        
        </div>
      </div>
    ) : (
      <div className="lg:block hidden md:hidden">
        <App />
      </div>
    )}
  </div>
);
