import React from "react";
import "./Header.css";
import Logo from "../../Assets/Icons/logo-stackoverflow.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Search from "./Search";

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="" className="logo" />
      </div>

      <Search />

      <div className="nav">
        <div className="nav_item">About</div>
        <div className="nav_item">Product</div>
        <div className="nav_item">For teams</div>
      </div>
    </div>
  );
};
