import React, { useEffect, useState } from "react";
import "./RightContainer.css";
import {
  getLinkedById,
  getRelatedById,
} from "../../Services/QuestionsServices";

export const RightContainer = ({ selectedQuestionId, onItemClick }) => {
  const [linkedData, setLinkedData] = useState([]);
  const [relatedData, setRelatedData] = useState([]);

  useEffect(() => {
    getLinkedById(selectedQuestionId)
      .then((res) => {
        setLinkedData(res.items);
      })
      .catch((err) => console.log(err));

    getRelatedById(selectedQuestionId)
      .then((res) => {
        setRelatedData(res.items);
      })
      .catch((err) => console.log(err));
  }, [selectedQuestionId]);

  return (
    <div className="right-container" style={{ marginTop: "70px" }}>
      <div className="section linked">
        <p>Linked</p>
        {linkedData?.length > 0 ? (
          linkedData.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className="item"
              onClick={() => onItemClick(item.question_id)}
            >
              <span className="score">{item.score}</span>
              <span className="text">{item.title}</span>
            </div>
          ))
        ) : (
          <div className="no-data">No data found</div>
        )}
      </div>

      <div className="section related">
        <p>Related</p>
        {relatedData?.length > 0 ? (
          relatedData.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className="item"
              onClick={() => onItemClick(item.question_id)}
            >
              <span className="score">{item.score}</span>
              <span className="text">{item.title}</span>
            </div>
          ))
        ) : (
          <div className="no-data">No data found</div>
        )}
      </div>
    </div>
  );
};
