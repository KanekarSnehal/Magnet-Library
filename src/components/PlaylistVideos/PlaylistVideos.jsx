import React from "react";
import "./playlist-video.css";
import { useData } from "../../context";
import { deleteVideoFromPlaylist } from "../../services";
import { HorizontalCard } from "../index";

export const PlaylistVideos = ({ currentPlaylistId }) => {
  const {
    dataState: { playlists },
    dataDispatch,
  } = useData();
  const currentPlaylist =
    playlists.filter((playlist) => playlist._id === currentPlaylistId)[0] || {};

  return (
    <div className="playlist-video-container">
      <h5 className="px-16 playlist-label">{currentPlaylist.title}</h5>
      <div className="scroll-conatiner">
        {currentPlaylist.length !== 0 &&
          currentPlaylist?.videos?.map((video) => (
            <HorizontalCard
              key={video._id}
              video={video}
              deleteVideo={() =>
                deleteVideoFromPlaylist(
                  currentPlaylist._id,
                  video._id,
                  dataDispatch
                )
              }
            />
          ))}
      </div>
    </div>
  );
};
