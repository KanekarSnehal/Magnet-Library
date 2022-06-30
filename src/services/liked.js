import axios from "axios";
import { likedUrl, getConfig } from "../utils/index";
import { likedConstants } from "../utils/dataActions";
import { toast } from "react-toastify";

const { ADD_TO_LIKED, REMOVE_FROM_LIKED, GET_LIKED_VIDEOS } = likedConstants;

export const getLikedVideos = async (dispatch) => {
  try {
    const response = await axios.get(likedUrl, getConfig());
    if (response.status === 200) {
      dispatch({ type: GET_LIKED_VIDEOS, payload: response.data.likes });
    }
  } catch (e) {
    toast.error(e?.response?.data?.errors[0]);
  }
};

export const addToLiked = async (video, dispatch) => {
  try {
    const response = await axios.post(likedUrl, { video }, getConfig());

    if (response.status === 201) {
      dispatch({ type: ADD_TO_LIKED, payload: response.data.likes });
      toast.success("Video added to your liked videos!");
    }
  } catch (e) {
    toast.error(e?.response?.data?.errors[0]);
  }
};

export const removeFromLiked = async (videoID, dispatch) => {
  try {
    const response = await axios.delete(`${likedUrl}/${videoID}`, getConfig());
    if (response.status === 200) {
      dispatch({ type: REMOVE_FROM_LIKED, payload: response.data.likes });
      toast.success("Video deleted from your liked videos!");
    }
  } catch (e) {
    toast.error(e?.response?.data?.errors[0]);
  }
};
