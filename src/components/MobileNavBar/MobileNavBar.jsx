import React from "react";
import "./mobile-navbar.css";
import { useNavigate } from "react-router-dom";

export const MobileNavBar = () => {
  const navigate = useNavigate();

  return (
    <ul className="mobile-navbar-container">
      <li className="mobile-bar-items" onClick={() => navigate("/")}>
        <i className="bx bx-home"></i>
      </li>
      <li className="mobile-bar-items" onClick={() => navigate("/explore")}>
        <i className="bx bx-compass"></i>
      </li>
      <li className="mobile-bar-items" onClick={() => navigate("/playlist")}>
        <i className="bx bx-play-circle"></i>
      </li>
      <li className="mobile-bar-items" onClick={() => navigate("/liked")}>
        <i className="bx bx-like"></i>
      </li>
      <li className="mobile-bar-items" onClick={() => navigate("/watchlater")}>
        <i className="bx bx-time-five"></i>
      </li>
      <li className="mobile-bar-items" onClick={() => navigate("/history")}>
        <i className="bx bx-history"></i>
      </li>
    </ul>
  );
};
