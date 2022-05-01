import React from "react";
import { SideBar, Chips, VerticalCard, Loader } from "../../components";
import "./explore.css";
import { useData } from "../../context";

export const Explore = () => {
  const { filteredVideos } = useData();

  return (
    <>
      <div className="main-display">
        <SideBar />
        <div className="main">
          <Chips />
          <div className="vertical-card-wrapper">
            {filteredVideos.length !== 0 ? (
              filteredVideos.map((video) => (
                <VerticalCard key={video._id} video={video} />
              ))
            ) : (
              <div className="overlay">
                <Loader />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
