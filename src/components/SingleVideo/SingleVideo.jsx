import React from "react";
import { useEffect } from "react";
import "./single-video.css";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { getSingleVideo } from "../../services";
import { useData, useAuth } from "../../context";
import { ShowOptions, ReadMore } from "../index";
import { addVideoToHistory } from "../../services";

export const SingleVideo = () => {
  const {
    dataState: { video, history },
    dataDispatch,
  } = useData();
  const {
    authState: { authToken },
  } = useAuth();
  const { id } = useParams();

  useEffect(() => {
    getSingleVideo(dataDispatch, id);
  }, [video]);

  const handleHistory = () => {
    const isPresentInHistory = history.some(
      (videoItem) => videoItem._id === video._id
    );
    if (!isPresentInHistory && authToken)
      addVideoToHistory(video, dataDispatch);
  };

  return (
    <>
      {video && (
        <div className="single-video-container">
          <div className="video-section-frame">
            <ReactPlayer
              width="100%"
              height="100%"
              controls
              playing={true}
              url={`https://www.youtube-nocookie.com/embed/${video._id}`}
              onStart={handleHistory}
            />
          </div>
          <div className="video-content">
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
            <p className="divider"></p>
            <ReadMore description={video.description} />
          </div>
        </div>
      )}
    </>
  );
};
