import React from "react";
import "./vertical-card.css";

export const VerticalCard = ({
  _id,
  title,
  creator,
  creatorImage,
  categoryName,
  staticImage,
  description,
}) => {
  return (
    <div className="vertical-card-container">
      <img className="card-image" src={staticImage} alt="card image" />
      <div className="card-content">
        <img
          loading="lazy"
          src={creatorImage}
          className="avatar avatar-xs-size"
          alt="avatar"
        />
        <div className="video-text mx-8">
          <p className="card-title ">{title}</p>
          <span className="card-author">{creator}</span>
        </div>

        <i className="bx bx-dots-vertical-rounded ml-auto"></i>
      </div>
    </div>
  );
};
