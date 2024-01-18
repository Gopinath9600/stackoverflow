import React from "react";
import "./Answer.css";
export const Answer = ({ answerData }) => {
  const convertTimestamp = (timestamp) => {
    const inputDate = new Date(parseInt(timestamp * 1000));

    const options = { year: "numeric", month: "short", day: "numeric" };
    const dateFormatted = inputDate.toLocaleDateString("en-US", options);

    const timeFormatted = inputDate.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });

    return `${dateFormatted} at ${timeFormatted}`;
  };
  return (
    <div className="answerContainer">
      {console.log(answerData)}
      <div className="answerHeader">
        <span className="leftSection">{answerData?.length} Answers</span>
        <div className="rightSection">
          <span className="active">
            Votes <div />
          </span>
          <span>
            Oldest
            <div />
          </span>
          <span style={{ paddingRight: "0px" }}>
            Active
            <div />
          </span>
        </div>
      </div>

      {answerData &&
        answerData?.map((answer, index) => (
          <div className="answerCard" key={index}>
            <div className="answerInfo">
              <div className="title">
                <span className="author">
                  Author:{" "}
                  <span className="answerAuthor">
                    {answer.owner.display_name}({answer.owner.reputation})
                  </span>
                </span>
                <span className="answered" style={{ marginLeft: "20px" }}>
                  Answered: {convertTimestamp(answer.creation_date)}
                </span>
              </div>
              <div className="scoreContainer">
                <button>-</button>
                <span>{answer.score}</span>
                <button style={{ borderRadius: "0 5px 5px 0" }}>+</button>
              </div>
            </div>
            <div className="answerData">
              <p className="answerText">
                {" "}
                <div dangerouslySetInnerHTML={{ __html: answer.body }} />
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};
