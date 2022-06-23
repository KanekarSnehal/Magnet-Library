import React from "react";
import "./side-bar.css";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  const isActiveClass = ({ isActive }) =>
    `side-bar-items ${isActive && "active"}`;

  return (
    <aside className="side-bar-container">
      <NavLink className={isActiveClass} to="/">
        <i className="bx bx-home"></i>
        <span className="nav-title">Home</span>
      </NavLink>
      <NavLink className={isActiveClass} to="/explore" end>
        <i className="bx bx-compass"></i>
        <span className="nav-title">Explore</span>
      </NavLink>
      <NavLink className={isActiveClass} to="/playlist">
        <i className="bx bx-play-circle"></i>
        <span className="nav-title">Playlists</span>
      </NavLink>
      <NavLink className={isActiveClass} to="/liked">
        <i className="bx bx-like"></i>
        <span className="nav-title">Liked Videos</span>
      </NavLink>
      <NavLink className={isActiveClass} to="/watchlater">
        <i className="bx bx-time-five"></i>
        <span className="nav-title"> Watch Later</span>
      </NavLink>
      <NavLink className={isActiveClass} to="/history">
        <i className="bx bx-history"></i>
        <span className="nav-title">History</span>
      </NavLink>
    </aside>
  );
};
