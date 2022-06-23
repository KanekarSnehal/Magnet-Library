import React from "react";
import { VerticalCard, SideBar, SingleVideo } from "../../components";
import "./video-detail.css";
import { useData } from "../../context";

export const VideoDetailPage = () => {
  const {
    dataState: { video, videos },
    dataDispatch,
  } = useData();

  const otherVideos = videos.filter((videoItem) => videoItem._id !== video._id);

  return (
    <div className="main-display">
      <SideBar />
      <div className="video-details-conatiner">
        <SingleVideo />
        <div className="other-videos-container">
          {otherVideos.map((video) => (
            <VerticalCard key={video._id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};
