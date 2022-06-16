import React from "react";
import "./playlist-list.css";
import { useState } from "react";
import { addPlaylist, deletePlaylist } from "../../services";
import { useData } from "../../context";

export const PlaylistList = ({ setCurrentPlaylistId }) => {
  const {
    dataState: { playlists },
    dataDispatch,
  } = useData();

  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addPlaylist({ title }, dataDispatch);
    setTitle("");
  };

  return (
    <div className="display-playlist-container">
      <p className="text-center p-md">Create Playlist</p>
      <form className="add-playlist-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-md input-round mx-8"
          placeholder="Enter playlist name"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="playlist-btn icon">
          <i className="bx bx-add-to-queue icon ml-auto"></i>
        </button>
      </form>
      <ul className="scroll-conatiner my-16">
        {playlists?.map((playlist) => (
          <li
            className="playlist-list-items outline-secondary-btn"
            key={playlist._id}
          >
            <p
              className="playlist-name"
              onClick={() => setCurrentPlaylistId(playlist._id)}
            >
              {playlist.title}
            </p>
            <div className="playlist-content">
              <p className="playlist-video-count">
                {playlist.videos.length} Videos
              </p>
              <i
                className="bx bx-trash icon"
                onClick={() => {
                  deletePlaylist(playlist._id, dataDispatch);
                  setCurrentPlaylistId("");
                }}
              ></i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
