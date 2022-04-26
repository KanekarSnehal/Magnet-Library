import React from "react";
import { useData } from "../../context";
import { SideBar, HorizontalCard } from "../../components";
import "./history.css";
import { deleteVideoFromHistory } from "../../services";

export const History = () => {
  const {
    dataState: { history },
    dataDispatch,
  } = useData();

  return (
    <div className="main-display">
      <SideBar />
      <div className="main">
        <h4 className="text-center">History ({history.length})</h4>
        <div className="history-video-container">
          {history?.map((video) => (
            <HorizontalCard
              key={video._id}
              video={video}
              deleteVideo={() =>
                deleteVideoFromHistory(video._id, dataDispatch)
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
