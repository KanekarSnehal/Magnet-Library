import React from "react";
import "./horizontal-card.css";

export const HorizontalCard = ({ video, deleteVideo }) => {
  return (
    <div className="horizontal-card-container">
      <img className="card-image" src={video.staticImage} alt="card image" />
      <div className="card-details">
        <h4 className="card-title">{video.title}</h4>
        <p className="card-author">Sold by Bingo</p>
      </div>
      <div className="ml-auto mx-8 my-8" onClick={deleteVideo}>
        <i className="bx bx-trash-alt icon"></i>
      </div>
    </div>
  );
};
