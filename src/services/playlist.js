import axios from "axios";
import { playlistUrl, getConfig } from "../utils";
import { playlistConstants } from "../utils/dataActions";
import { toast } from "react-toastify";

const {
  GET_PLAYLISTS,
  ADD_PLAYLIST,
  DELETE_PLAYLIST,
  GET_PLAYLIST_BY_ID,
  ADD_VIDEO_TO_PLAYLIST,
  DELETE_VIDEO_FROM_PLAYLIST,
} = playlistConstants;

export const getPlaylists = async (dispatch) => {
  try {
    const response = await axios.get(playlistUrl, getConfig());
    if (response.status === 200) {
      dispatch({ type: GET_PLAYLISTS, payload: response.data.playlists });
      toast.success("Playlist Loaded!");
    }
  } catch (e) {
    toast.error(e?.response?.data?.errors[0]);
  }
};

export const addPlaylist = async (playlist, dispatch) => {
  try {
    const response = await axios.post(playlistUrl, { playlist }, getConfig());
    if (response.status === 201) {
      dispatch({ type: ADD_PLAYLIST, payload: response.data.playlists });
      toast.success("Created Playlist!");
    }
  } catch (e) {
    toast.error(e?.response?.data?.errors[0]);
  }
};

export const deletePlaylist = async (playlistID, dispatch) => {
  try {
    const response = await axios.delete(
      `${playlistUrl}/${playlistID}`,
      getConfig()
    );
    if (response.status === 200) {
      dispatch({ type: DELETE_PLAYLIST, payload: response.data.playlists });
      toast.success("Deleted Playlist!");
    }
  } catch (e) {
    toast.error(e?.response?.data?.errors[0]);
  }
};

export const getPlaylistByID = async (playlistID) => {
  try {
    const response = await axios.get(
      `${playlistUrl}/${playlistID}`,
      getConfig()
    );
    if (response.status === 200) {
      dispatch({ type: GET_PLAYLIST_BY_ID, payload: response.data.playlist });
    }
  } catch (e) {
    toast.error(e?.response?.data?.errors[0]);
  }
};

export const addVideoToPlaylist = async (playlistID, video, dispatch) => {
  try {
    const response = await axios.post(
      `${playlistUrl}/${playlistID}`,
      { video },
      getConfig()
    );
    if (response.status === 201) {
      dispatch({
        type: ADD_VIDEO_TO_PLAYLIST,
        payload: response.data.playlist,
      });
      toast.success("Added to Playlist!");
    }
  } catch (e) {
    toast.error(e?.response?.data?.errors[0]);
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
      getConfig()
    );
    if (response.status === 200) {
      dispatch({
        type: DELETE_VIDEO_FROM_PLAYLIST,
        payload: response.data.playlist,
      });
      toast.success("Removed from Playlist!");
    }
  } catch (e) {
    toast.error(e?.response?.data?.errors[0]);
  }
};
