import React from "react";
import "./show-options.css";
import { useData, useAuth } from "../../context";
import {
  addToLiked,
  removeFromLiked,
  removeFromWatchLater,
  addToWatchLater,
} from "../../services";
import { useState } from "react";
import { PlaylistModal } from "../PlaylistModal/PlaylistModal";
import { toast } from "react-toastify";
import { useOutsideClick } from "../../hooks";

export const ShowOptions = ({ video }) => {
  const {
    dataState: { liked, watchLater },
    dataDispatch,
  } = useData();
  const [isHidden, setIsHidden] = useState(true);
  const {
    authState: { authToken },
  } = useAuth();
  const [showModal, setShowModal] = useState(false);
  let domNode = useOutsideClick(() => setIsHidden(true));

  const isLikedVideo = liked.some((likedVideo) => likedVideo._id === video._id);
  const inWatchLater = watchLater.some(
    (watchlaterVideo) => watchlaterVideo._id === video._id
  );

  const handleShowModal = (e) => {
    if (authToken) {
      e.stopPropagation();
      setShowModal(true);
    } else toast.warning("Please login first!");
  };

  return (
    <>
      <div className="show-options-container ml-auto" ref={domNode}>
        <i
          className="bx bx-dots-vertical-rounded ml-auto icon"
          onClick={() => setIsHidden(!isHidden)}
        ></i>
        {!isHidden && (
          <ul className="show-list">
            <li className="show-items">
              {isLikedVideo ? (
                <i
                  className="bx bxs-like"
                  onClick={() => removeFromLiked(video._id, dataDispatch)}
                ></i>
              ) : (
                <i
                  className="bx bx-like"
                  onClick={() => {
                    authToken
                      ? addToLiked(video, dataDispatch)
                      : toast.warning("Please login first!");
                  }}
                ></i>
              )}
            </li>
            <li className="show-items">
              {inWatchLater ? (
                <i
                  className="bx bxs-time-five"
                  onClick={() => removeFromWatchLater(video._id, dataDispatch)}
                ></i>
              ) : (
                <i
                  className="bx bx-time-five"
                  onClick={() => {
                    authToken
                      ? addToWatchLater(video, dataDispatch)
                      : toast.warning("Please login first!");
                  }}
                ></i>
              )}
            </li>
            <li className="show-items" onClick={handleShowModal}>
              <i className="bx bx-list-plus"></i>
            </li>
          </ul>
        )}
      </div>

      {showModal && <PlaylistModal setShowModal={setShowModal} video={video} />}
    </>
  );
};
