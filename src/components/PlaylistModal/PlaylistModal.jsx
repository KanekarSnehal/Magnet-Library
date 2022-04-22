import React from "react";
import "./playlist-modal.css";
import { useState } from "react";
import { useData } from "../../context";
import {
  addPlaylist,
  deleteVideoFromPlaylist,
  addVideoToPlaylist,
} from "../../services";
import reactDom from "react-dom";

export const PlaylistModal = ({ setShowModal, video }) => {
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
  const isVideoPresentInPlaylist = (playlist) =>
    playlist.videos.some((item) => item._id === video._id);

  const handleAddRemovePlaylist = (e, playlist) => {
    e.target.checked
      ? addVideoToPlaylist(playlist._id, video, dataDispatch)
      : deleteVideoFromPlaylist(playlist._id, video._id, dataDispatch);
  };

  return reactDom.createPortal(
    <div className="overlay" onClick={() => setShowModal(false)}>
      <div className="modal">
        <div
          className="note-input-container"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="close-modal icon"
            onClick={() => setShowModal(false)}
          >
            <i className="bx bx-x"></i>
          </button>

          <div className="input-text-section">
            {playlists?.map((playlist) => (
              <div className="playlist-input-container" key={playlist._id}>
                <label
                  htmlFor={playlist._id}
                  key={playlist._id}
                  className="playlist-label"
                >
                  <input
                    type="checkbox"
                    className="input-checkbox"
                    checked={isVideoPresentInPlaylist(playlist)}
                    onChange={(e) => handleAddRemovePlaylist(e, playlist)}
                  />
                  {playlist.title}
                </label>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="edit-section-container">
            <input
              type="text"
              className="input-md input-round "
              placeholder="Enter playlist name"
              value={title}
              required
              onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" className="playlist-btn icon">
              <i className="bx bx-add-to-queue icon ml-auto"></i>
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};
