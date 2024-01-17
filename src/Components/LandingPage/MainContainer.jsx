import React, { useEffect, useState } from "react";
import { Question } from "../Questions/Question";
import { Answer } from "../Answers/Answer";
import { getQuestionsById } from "../../Services/QuestionsServices";

export const MainContainer = () => {
  const [questionData, setQuestionData] = useState({});
  const [answerData, setAnswerData] = useState([]);
  useEffect(() => {
    getQuestionsById(56199111)
      .then((res) => {
        setQuestionData(res.items[0]);
        setAnswerData(res.items[0]?.answers);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(questionData, answerData);
  }, [questionData, answerData]);
  return (
    <div className="mainContainer" style={{ width: "100%", marginTop: "60px" }}>
      {/* <div className="questionSection"> */}
      <Question questionData={questionData} />
      {/* </div> */}
      <Answer answerData={answerData} />
      <div className="answerSection"></div>
    </div>
  );
};
