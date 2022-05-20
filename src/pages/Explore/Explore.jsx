import React from "react";
import { SideBar, Chips, VerticalCard, Loader } from "../../components";
import "./explore.css";
import { useData } from "../../context";

export const Explore = () => {
  const { filteredVideos } = useData();

  return (
    <>
      <div className="mob-search">
        <i
          className="fas fa-search search-icon"
          onClick={() => navigate("/explore")}
        ></i>
        <label htmlFor="searchbar"></label>
        <input
          className="input-round input-sm"
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="Search videos..."
          onChange={(e) =>
            dataDispatch({ type: "SEARCH", payload: e.target.value })
          }
        />
      </div>
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
              <Loader />
            )}
          </div>
        </div>
      </div>
    </>
  );
};
