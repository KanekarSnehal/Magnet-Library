import React from "react";
import "./horizontal-card.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const HorizontalCard = ({ video, deleteVideo }) => {
  const navigate = useNavigate();

  return (
    <div className="horizontal-card-container">
      <img
        className="card-image"
        src={video.staticImage}
        alt="card image"
        onClick={() => navigate(`/explore/${video._id}`)}
      />
      <div className="card-details">
        <h4 className="card-title">{video.title}</h4>
        <p className="card-author">{video.creator}</p>
      </div>
      <div className="ml-auto mx-8 my-8" onClick={deleteVideo}>
        <i className="bx bx-trash-alt icon"></i>
      </div>
    </div>
  );
};
