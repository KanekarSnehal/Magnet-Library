import React from "react";
import { SideBar, Chips, VerticalCard } from "../../components";
import "./explore.css";
import { useData } from "../../context";

export const Explore = () => {
  const {
    dataState: { videos },
    dataDispatch,
    filteredVideos,
  } = useData();

  return (
    <>
      <div className="main-display">
        <SideBar />
        <div className="main">
          <Chips />
          <div className="vertical-card-wrapper">
            {filteredVideos?.map((video) => (
              <VerticalCard key={video._id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
