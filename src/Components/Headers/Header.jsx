import React from "react";
import "./Header.css";
import Logo from "../../Assets/Icons/logo-stackoverflow.svg";
import Search from "./Search";

export const Header = ({ onSearchItemClick }) => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="" className="logo" />
      </div>

      <Search onSearchItemClick={onSearchItemClick} />

      <div className="nav">
        <div className="nav_item">About</div>
        <div className="nav_item">Product</div>
        <div className="nav_item">For teams</div>
      </div>
    </div>
  );
};
