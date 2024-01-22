import React, { useState } from "react";
import "./LandingPage.css";
import { LeftContainer } from "./LeftContainer";
import { RightContainer } from "./RightContainer";
import { MainContainer } from "./MainContainer";

export const LandingPage = ({ selectedQuestionId }) => {
  const [questionId, setQuestionId] = useState("56199111");
  console.log(questionId);
  return (
    <div className="landingPage">
      <div className="leftContainer">
        <LeftContainer />
      </div>

      <div className="mainContainer">
        <MainContainer selectedQuestionId={selectedQuestionId} />
      </div>
      <div className="rightContainer">
        <RightContainer questionId={questionId} />
      </div>
    </div>
  );
};
