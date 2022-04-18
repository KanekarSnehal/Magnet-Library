import axios from "axios";
import { likedUrl } from "../utils/index";
import { likedConstants } from "../utils/dataActions";

const { ADD_TO_LIKED, REMOVE_FROM_LIKED, ERROR } = likedConstants;

const config = {
  headers: { authorization: localStorage.getItem("token") },
};

export const addToLiked = async (video, dispatch) => {
  console.log(video);
  try {
    const response = await axios.post(likedUrl, { video }, config);

    if (response.status === 201) {
      dispatch({ type: ADD_TO_LIKED, payload: response.data.likes });
    }
  } catch (e) {
    dispatch({ type: ERROR, payload: e });
  }
};

export const removeFromLiked = async (videoID, dispatch) => {
  try {
    const response = await axios.delete(`${likedUrl}/${videoID}`, config);
    console.log(response.status);
    console.log(response.data.likes);
    if (response.status === 200) {
      dispatch({ type: REMOVE_FROM_LIKED, payload: response.data.likes });
    }
  } catch (e) {
    dispatch({ type: ERROR, payload: e });
  }
};
