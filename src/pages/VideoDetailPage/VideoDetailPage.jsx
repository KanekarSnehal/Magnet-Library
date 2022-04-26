import React from "react";
import { SideBar, SingleVideo } from "../../components";
import "./video-detail.css";

export const VideoDetailPage = () => {
  return (
    <div className="main-display">
      <SideBar />
      <div className="video-details-conatiner">
        <SingleVideo />
      </div>
    </div>
  );
};
