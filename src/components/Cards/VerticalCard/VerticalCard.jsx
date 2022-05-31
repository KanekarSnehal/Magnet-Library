import React from "react";
import "./vertical-card.css";
import { ShowOptions } from "../../index";
import { Link } from "react-router-dom";

export const VerticalCard = ({ video }) => {
  return (
    <div className="vertical-card-container">
      <Link to={`/explore/${video._id}`}>
        <img className="card-image" src={video.staticImage} alt="card image" />
      </Link>

      <div className="card-content">
        <img
          loading="lazy"
          src={video.creatorImage}
          className="avatar avatar-xs-size"
          alt="avatar"
        />
        <div className="video-text">
          <p className="card-title ">{video.title}</p>
          <p className="card-author">{video.creator}</p>
        </div>
        <ShowOptions video={video} />
      </div>
    </div>
  );
};
