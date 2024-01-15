import React, { useState } from "react";
import "./LeftContainer.css";
import Home from "../../Assets/Icons/home-icon.png";
import Globe from "../../Assets/Icons/globe-icon.png";
import People from "../../Assets/Icons/people-icon.png";
import Portfolio from "../../Assets/Icons/portfolio-icon.png";
import DownArrow from "../../Assets/Icons/down-arrow.png";

export const LeftContainer = () => {
  const [isPeopleMenuOpen, setPeopleMenuOpen] = useState(false);

  const togglePeopleMenu = () => {
    setPeopleMenuOpen(!isPeopleMenuOpen);
  };

  return (
    <div className="left-container">
      <div className="menu">
        <div className="menu-item">
          <img src={Home} alt=""></img>
          <span>Home</span>
        </div>

        <div
          className={`dropdown ${isPeopleMenuOpen ? "open" : ""}`}
          onClick={togglePeopleMenu}
        >
          <div className="menu-item">
            <img src={Globe} alt="" />
            <span>People</span>
            <img
              src={DownArrow}
              alt=""
              className={`arrow-icon ${isPeopleMenuOpen ? "up" : "down"}`}
            />
          </div>

          {isPeopleMenuOpen && (
            <div className="dropdown-content">
              <span>Questions</span>
              <span>Tags</span>
              <span>Users</span>
            </div>
          )}
        </div>
        <div className="menu-item">
          <img src={People} alt=""></img>
          <span>Collectives</span>
        </div>
        <div className="menu-item">
          <img src={Portfolio} alt=""></img>
          <span>Jobs</span>
        </div>
      </div>
      <div className="buttons">
        <button className="button login-button">Log in</button>
        <button className="button signup-button">Sign up</button>
      </div>
    </div>
  );
};
