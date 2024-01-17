import React, { useEffect, useState } from "react";
// import { linkedData } from "./RightContainerData";
import "./RightContainer.css";
import {
  getLinkedById,
  getRelatedById,
} from "../../Services/QuestionsServices";

export const RightContainer = ({ questionId }) => {
  const [linkedData, setLinkedData] = useState([]);
  const [relatedData, setRelatedData] = useState([]);
  useEffect(() => {
    getLinkedById(questionId)
      .then((res) => {
        console.log(res);
        setLinkedData(res.items);
      })
      .catch((err) => console.log(err));
    getRelatedById(questionId)
      .then((res) => {
        console.log(res);
        setRelatedData(res.items);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="right-container" style={{ marginTop: "70px" }}>
      <div className="section linked">
        <p>Linked</p>
        {linkedData?.map(
          (item, index) =>
            index < 5 && (
              <div key={index} className="item">
                <span className="score">{item.score}</span>
                <span className="text">{item.title}</span>
              </div>
            )
        )}
      </div>

      <div className="section related">
        <p>Related</p>
        {relatedData?.map(
          (item, index) =>
            index < 5 && (
              <div key={index} className="item">
                <span className="score">{item.score}</span>
                <span className="text">{item.title}</span>
              </div>
            )
        )}
      </div>
    </div>
  );
};
