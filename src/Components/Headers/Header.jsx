import React from "react";
import "./Header.css";
import Logo from "../../Assets/Icons/logo-stackoverflow.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="" className="logo" />
      </div>
      <div className="search">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          color="black"
          style={{ opacity: 0.7, padding: "0 5px" }}
        />
        <input type="text" placeholder="Search" />
      </div>
      <div className="nav">
        <div className="nav_item">About</div>
        <div className="nav_item">Product</div>
        <div className="nav_item">For teams</div>
      </div>
    </div>
  );
};
