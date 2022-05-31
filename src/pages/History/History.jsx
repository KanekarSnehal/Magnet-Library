import React from "react";
import { useData } from "../../context";
import { SideBar, HorizontalCard } from "../../components";
import "./history.css";
import { deleteVideoFromHistory, clearHistory } from "../../services";
import { useDocumentTitle } from "../../hooks";

export const History = () => {
  const {
    dataState: { history },
    dataDispatch,
  } = useData();
  useDocumentTitle();

  return (
    <div className="main-display">
      <SideBar />
      <div className="main">
        <div className="history-info-container">
          <h4 className="text-center">History ({history.length})</h4>
          <button
            className="btn primary-btn clear-all-btn"
            onClick={() => clearHistory(dataDispatch)}
          >
            CLEAR ALL
          </button>
        </div>

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
