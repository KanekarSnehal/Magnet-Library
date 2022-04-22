import React from "react";
import { useData } from "../../context";
import { SideBar, VerticalCard } from "../../components";

export const WatchLater = () => {
  const {
    dataState: { watchLater },
  } = useData();
  return (
    <div className="main-display">
      <SideBar />
      <div className="main">
        <h4 className="text-center">
          Watch Later Videos ({watchLater.length})
        </h4>
        <div className="vertical-card-wrapper">
          {watchLater?.map((video) => (
            <VerticalCard key={video._id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};