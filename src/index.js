import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./root.css";

const isSmallAndMedium = window.matchMedia("(max-width: 1024px)").matches;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {isSmallAndMedium ? (
      <div className="lg:hidden md:flex flex items-center justify-center ">
        <h1 className=" text-center mt-[20vh] text-2xl w-[70vw] h-[6vh] ">
          Hello user! We currently do not support mobile screens at the moment.
        </h1>
      </div>
    ) : (
      <div className="lg:block hidden md:hidden">
        <App />
      </div>
    )}
  </div>
);
