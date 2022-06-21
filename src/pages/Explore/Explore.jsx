import React from "react";
import {
  SideBar,
  Chips,
  VerticalCard,
  Loader,
  SkeletalLoading,
} from "../../components";
import "./explore.css";
import { useData } from "../../context";

export const Explore = () => {
  const {
    dataState: { loading },
    filteredVideos,
  } = useData();

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
          {filteredVideos.length === 0 && !loading ? (
            <h4 className="text-center my-16">No videos found!</h4>
          ) : (
            <div className="vertical-card-wrapper">
              {loading
                ? [...Array(12)].map((_, id) => <SkeletalLoading key={id} />)
                : filteredVideos.map((video) => (
                    <VerticalCard key={video._id} video={video} />
                  ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
