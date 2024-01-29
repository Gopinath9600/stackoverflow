import React from "react";
import "./LandingPage.css";
import { LeftContainer } from "./LeftContainer";
import { RightContainer } from "./RightContainer";
import { MainContainer } from "./MainContainer";

export const LandingPage = ({ selectedQuestionId, onSearchItemClick }) => {
  return (
    <div className="landingPage">
      <div className="leftContainer">
        <LeftContainer />
      </div>

      <div className="mainContainer">
        <MainContainer selectedQuestionId={selectedQuestionId} />
      </div>
      <div className="rightContainer">
        <RightContainer
          selectedQuestionId={selectedQuestionId}
          onItemClick={onSearchItemClick}
        />
      </div>
    </div>
  );
};
