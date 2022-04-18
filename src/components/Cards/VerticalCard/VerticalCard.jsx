import React from "react";
import "./vertical-card.css";
import { useState } from "react";
import { ShowOptions } from "../../index";

export const VerticalCard = ({ title, creator, creatorImage, staticImage }) => {
  const [isHidden, setIsHidden] = useState(true);
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

        <i
          className="bx bx-dots-vertical-rounded ml-auto"
          onClick={() => setIsHidden(!isHidden)}
        ></i>
        {!isHidden && <ShowOptions />}
      </div>
    </div>
  );
};
