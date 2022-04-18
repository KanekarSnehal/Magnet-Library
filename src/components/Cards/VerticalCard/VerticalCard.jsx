import React from "react";
import "./vertical-card.css";
import { ShowOptions } from "../../index";

export const VerticalCard = ({ video }) => {
  return (
    <div className="vertical-card-container">
      <img className="card-image" src={video.staticImage} alt="card image" />
      <div className="card-content">
        <img
          loading="lazy"
          src={video.creatorImage}
          className="avatar avatar-xs-size"
          alt="avatar"
        />
        <div className="video-text mx-8">
          <p className="card-title ">{video.title}</p>
          <span className="card-author">{video.creator}</span>
        </div>
        <ShowOptions video={video} />
      </div>
    </div>
  );
};
