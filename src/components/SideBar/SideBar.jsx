import React from "react";
import "./side-bar.css";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const navigate = useNavigate();

  return (
    <aside className="side-bar-container">
      <ul className="my-16">
        <li className="side-bar-items" onClick={() => navigate("/")}>
          <i className="bx bx-home"></i>Home
        </li>
        <li className="side-bar-items" onClick={() => navigate("/explore")}>
          <i className="bx bx-compass"></i>
          Explore
        </li>
        <li className="side-bar-items">
          <i className="bx bx-play-circle"></i>Playlists
        </li>
        <li className="side-bar-items" onClick={() => navigate("/liked")}>
          <i className="bx bx-like"></i>
          <span>Liked Videos</span>
        </li>
        <li className="side-bar-items">
          <i className="bx bx-time-five"></i>Watch Later
        </li>
        <li className="side-bar-items">
          <i className="bx bx-history"></i>History
        </li>
      </ul>
    </aside>
  );
};
