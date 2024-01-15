import React from "react";
import "./LandingPage.css";
import { LeftContainer } from "./LeftContainer";

export const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="leftContainer">
        <LeftContainer />
      </div>

      <div className="mainContainer">Center</div>
      <div className="rightContainer">right</div>
    </div>
  );
};
