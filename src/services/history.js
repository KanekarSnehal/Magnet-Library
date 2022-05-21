import axios from "axios";
import { historyUrl } from "../utils/index";
import { historyConstants } from "../utils/dataActions";
import { toast } from "react-toastify";

const {
  GET_HISTORY,
  CLEAR_HISTORY,
  ADD_VIDEO_TO_HISTORY,
  DELETE_VIDEO_FROM_HISTORY,
} = historyConstants;

const config = {
  headers: { authorization: localStorage.getItem("token") },
};

export const getHistory = async (dispatch) => {
  try {
    const response = await axios.get(historyUrl, config);
    if (response.status === 200) {
      dispatch({ type: GET_HISTORY, payload: response.data.history });
    }
  } catch (e) {
    toast.error(e?.response?.data?.errors[0]);
  }
};

export const addVideoToHistory = async (video, dispatch) => {
  try {
    const response = await axios.post(historyUrl, { video }, config);

    if (response.status === 201) {
      dispatch({ type: ADD_VIDEO_TO_HISTORY, payload: response.data.history });
      toast.success("Added to history!");
    }
  } catch (e) {
    toast.error(e?.response?.data?.errors[0]);
  }
};

export const deleteVideoFromHistory = async (videoID, dispatch) => {
  try {
    const response = await axios.delete(`${historyUrl}/${videoID}`, config);
    if (response.status === 200) {
      dispatch({
        type: DELETE_VIDEO_FROM_HISTORY,
        payload: response.data.history,
      });
      toast.success("Removed from history!");
    }
  } catch (e) {
    toast.error(e?.response?.data?.errors[0]);
  }
};

export const clearHistory = async (dispatch) => {
  try {
    const response = await axios.delete(`${historyUrl}/all`, config);
    if (response.status === 200) {
      dispatch({ type: CLEAR_HISTORY, payload: response.data.history });
      toast.success("Cleared History!");
    }
  } catch (e) {
    toast.error(e?.response?.data?.errors[0]);
  }
};
