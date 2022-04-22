import axios from "axios";
import { playlistUrl } from "../utils/index";
import { playlistConstants } from "../utils/dataActions";

const {
  GET_PLAYLISTS,
  ADD_PLAYLIST,
  DELETE_PLAYLIST,
  GET_PLAYLIST_BY_ID,
  ADD_VIDEO_TO_PLAYLIST,
  DELETE_VIDEO_FROM_PLAYLIST,
} = playlistConstants;

const config = {
  headers: { authorization: localStorage.getItem("token") },
};

export const getPlaylists = async (dispatch) => {
  try {
    const response = await axios.get(playlistUrl, config);
    if (response.status === 200) {
      dispatch({ type: GET_PLAYLISTS, payload: response.data.playlists });
    }
  } catch (e) {
    console.log(e);
  }
};

export const addPlaylist = async (playlist, dispatch) => {
  try {
    const response = await axios.post(playlistUrl, { playlist }, config);
    if (response.status === 201) {
      dispatch({ type: ADD_PLAYLIST, payload: response.data.playlists });
    }
  } catch (e) {
    console.log(e);
  }
};

export const deletePlaylist = async (playlistID, dispatch) => {
  try {
    const response = await axios.delete(`${playlistUrl}/${playlistID}`, config);
    if (response.status === 200) {
      dispatch({ type: DELETE_PLAYLIST, payload: response.data.playlists });
    }
  } catch (e) {
    console.log(e);
  }
};

export const getPlaylistByID = async (playlistID) => {
  try {
    const response = await axios.get(`${playlistUrl}/${playlistID}`, config);
    if (response.status === 200) {
      dispatch({ type: GET_PLAYLIST_BY_ID, payload: response.data.playlist });
    }
  } catch (e) {
    console.log(e);
  }
};

export const addVideoToPlaylist = async (playlistID, video, dispatch) => {
  try {
    const response = await axios.post(
      `${playlistUrl}/${playlistID}`,
      { video },
      config
    );
    if (response.status === 201) {
      dispatch({
        type: ADD_VIDEO_TO_PLAYLIST,
        payload: response.data.playlist,
      });
    }
  } catch (e) {
    console.log(e);
  }
};

export const deleteVideoFromPlaylist = async (
  playlistID,
  videoID,
  dispatch
) => {
  try {
    const response = await axios.delete(
      `${playlistUrl}/${playlistID}/${videoID}`,
      config
    );
    if (response.status === 200) {
      dispatch({
        type: DELETE_VIDEO_FROM_PLAYLIST,
        payload: response.data.playlist,
      });
    }
  } catch (e) {
    console.log(e);
  }
};
