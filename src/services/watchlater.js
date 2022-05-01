import axios from "axios";
import { watchLaterUrl } from "../utils/index";
import { watchLaterConstants } from "../utils/dataActions";
import { toast } from "react-toastify";

const { ADD_TO_WATCH_LATER, REMOVE_FROM_WATCH_LATER, GET_WATCH_LATER_VIDEOS } =
  watchLaterConstants;

const config = {
  headers: { authorization: localStorage.getItem("token") },
};

export const getWatchLaterVideos = async (dispatch) => {
  try {
    const response = await axios.get(watchLaterUrl, config);
    if (response.status === 200) {
      dispatch({
        type: GET_WATCH_LATER_VIDEOS,
        payload: response.data.watchlater,
      });
    }
  } catch (e) {
    toast.error(e?.response?.data?.errors[0]);
  }
};

export const addToWatchLater = async (video, dispatch) => {
  try {
    const response = await axios.post(watchLaterUrl, { video }, config);

    if (response.status === 201) {
      dispatch({ type: ADD_TO_WATCH_LATER, payload: response.data.watchlater });
      toast.success("Added to Watch Later!");
    }
  } catch (e) {
    toast.error(e?.response?.data?.errors[0]);
  }
};

export const removeFromWatchLater = async (videoID, dispatch) => {
  try {
    const response = await axios.delete(`${watchLaterUrl}/${videoID}`, config);
    if (response.status === 200) {
      dispatch({
        type: REMOVE_FROM_WATCH_LATER,
        payload: response.data.watchlater,
      });
      toast.success("Removed from Watch Later!");
    }
  } catch (e) {
    toast.error(e?.response?.data?.errors[0]);
  }
};
