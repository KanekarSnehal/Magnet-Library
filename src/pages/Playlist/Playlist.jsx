import React from "react";
import { SideBar, PlaylistList, PlaylistVideos } from "../../components";
import "./playlist.css";
import { useState } from "react";

const Playlist = () => {
  const [currentPlaylistId, setCurrentPlaylistId] = useState(null);

  return (
    <div className="main-display">
      <SideBar />
      <div className="playlist-container">
        <PlaylistList setCurrentPlaylistId={setCurrentPlaylistId} />
        <PlaylistVideos
          currentPlaylistId={currentPlaylistId}
          setCurrentPlaylistId={setCurrentPlaylistId}
        />
      </div>
    </div>
  );
};

export default Playlist;
