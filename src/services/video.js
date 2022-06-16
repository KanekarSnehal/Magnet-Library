import axios from "axios";
import { videoUrl } from "../utils";
import { videoConstants } from "../utils/dataActions";
import { toast } from "react-toastify";

const { GET_VIDEOS, LOADING, ERROR, GET_VIDEO } = videoConstants;

export const getVideos = async (dispatch) => {
  try {
    const response = await axios.get(videoUrl);
    if (response.status === 200) {
      dispatch({ type: GET_VIDEOS, payload: response.data.videos });
    }
  } catch (e) {
    toast.error(e?.response?.data?.errors[0]);
  }
};

export const getSingleVideo = async (dispatch, videoID) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get(`/api/video/${videoID}`);
    if (response.status === 200) {
      dispatch({ type: GET_VIDEO, payload: response.data.video });
      dispatch({ type: LOADING });
    }
  } catch (e) {
    toast.error(e?.response?.data?.errors[0]);
  }
};
