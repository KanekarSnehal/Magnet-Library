import React from "react";
import { SideBar, SingleVideo } from "../../components";
import "./video-detail.css";
import { useDocumentTitle } from "../../hooks";

export const VideoDetailPage = () => {
  useDocumentTitle();

  return (
    <div className="main-display">
      <SideBar />
      <div className="video-details-conatiner">
        <SingleVideo />
      </div>
    </div>
  );
};
