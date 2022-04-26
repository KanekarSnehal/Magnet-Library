import axios from "axios";
import { videoUrl } from "../utils/index";
import { videoConstants } from "../utils/dataActions";

const { GET_VIDEOS, LOADING, ERROR, GET_VIDEO } = videoConstants;

export const getVideos = async (dispatch) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get(videoUrl);
    if (response.status === 200) {
      dispatch({ type: GET_VIDEOS, payload: response.data.videos });
    }
  } catch (e) {
    dispatch({ type: ERROR, payload: e });
  }
};

export const getSingleVideo = async (dispatch, videoID) => {
  try {
    dispatch({ type: LOADING });
    const response = await axios.get(`/api/video/${videoID}`);
    if (response.status === 200) {
      dispatch({ type: GET_VIDEO, payload: response.data.video });
    }
  } catch (e) {
    console.log(e);
    dispatch({ type: ERROR, payload: e });
  }
};
