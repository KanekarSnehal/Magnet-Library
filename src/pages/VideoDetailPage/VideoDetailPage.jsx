import React from "react";
import { VerticalCard, SideBar, SingleVideo } from "../../components";
import "./video-detail.css";
import { useData } from "../../context";

const VideoDetailPage = () => {
  const {
    dataState: { video, videos },
  } = useData();

  const otherVideos =
    video && videos?.filter((videoItem) => videoItem._id !== video._id);

  return (
    <div className="main-display">
      <SideBar />
      <div className="video-details-conatiner">
        <SingleVideo />
        <div className="other-videos-container">
          {otherVideos &&
            otherVideos.map((video) => (
              <VerticalCard key={video._id} video={video} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetailPage;
