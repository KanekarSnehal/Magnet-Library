import axios from "axios";
import { watchLaterUrl } from "../utils/index";
import { watchLaterConstants } from "../utils/dataActions";

const { ADD_TO_WATCH_LATER, REMOVE_FROM_WATCH_LATER } = watchLaterConstants;

const config = {
  headers: { authorization: localStorage.getItem("token") },
};

export const addToWatchLater = async (video, dispatch) => {
  try {
    const response = await axios.post(watchLaterUrl, { video }, config);

    if (response.status === 201) {
      dispatch({ type: ADD_TO_WATCH_LATER, payload: response.data.watchlater });
    }
  } catch (e) {
    dispatch({ type: ERROR, payload: e });
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
    }
  } catch (e) {
    dispatch({ type: ERROR, payload: e });
  }
};
