import React, { useEffect, useState } from "react";
import "./Question.css";
import questionMark from "../../Assets/Icons/question-mark.png";
import share from "../../Assets/Icons/share-icon.svg";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import comment from "../../Assets/Icons/message-regular.svg";

export const Question = ({ questionData }) => {
  console.log(questionData);
  useEffect(() => {
    console.log(questionData);
  }, [questionData]);

  const convertTimestamp = (timestamp) => {
    const currentDate = new Date();
    const inputDate = new Date(parseInt(timestamp * 1000));

    const timeDifference = currentDate - inputDate;
    const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
    const months = Math.floor(
      (timeDifference % (365 * 24 * 60 * 60 * 1000)) /
        (30 * 24 * 60 * 60 * 1000)
    );
    const days = Math.floor(
      ((timeDifference % (365 * 24 * 60 * 60 * 1000)) %
        (30 * 24 * 60 * 60 * 1000)) /
        (24 * 60 * 60 * 1000)
    );

    let dateString = "";
    if (years > 0) {
      dateString += `${years} ${years === 1 ? "year" : "years"}`;
    }

    if (months > 0) {
      if (years > 0) {
        dateString += ", ";
      }
      dateString += `${months} ${months === 1 ? "month" : "months"}`;
    }

    if (years === 0 && months === 0) {
      dateString += `${days} ${days === 1 ? "day" : "days"}`;
    }

    dateString += " ago";
    return dateString;
  };

  return (
    <div className="questionContainer">
      <div className="questionHeader">
        <div className="title">
          <span className="tit">{questionData.title}</span>
          <img src={questionMark} alt="" />
        </div>
        <div className="scoreContainer">
          <button>-</button>
          <span>{questionData?.score}</span>
          <button style={{ transform: "rotateY(180deg)" }}>+</button>
        </div>
        {console.log(questionData)}
      </div>
      <div className="userContainer">
        <div className="leftSection">
          <img src={questionData?.owner?.profile_image} alt="" />
          <span>{questionData?.owner?.display_name}</span>
          <span className="reputation">{questionData?.owner?.reputation}</span>
        </div>

        <div className="rightSection">
          <span>Asked {convertTimestamp(questionData?.creation_date)}</span>
          <span
            style={{
              borderLeft: "1px solid white",
              borderRight: "1px solid white",
            }}
          >
            Active {convertTimestamp(questionData?.last_activity_date)}
          </span>
          <span>
            Viewed {(questionData?.view_count / 1000)?.toFixed(0)}k times
          </span>
        </div>
      </div>
      <div className="questionInfo">
        <div dangerouslySetInnerHTML={{ __html: questionData.body }} />
        <div className="questionBottom">
          <div className="left">
            <FontAwesomeIcon icon={faBookmark} className="bookmark" />
            <span> {questionData.answer_count}</span>
          </div>
          <div className="right">
            <img src={share} alt="" />
            <img src={comment} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
