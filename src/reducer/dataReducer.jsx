import { videoConstants, likedConstants } from "../utils";

const { GET_VIDEOS, ERROR, LOADING, FILTER_CATEGORY, SEARCH } = videoConstants;
const { ADD_TO_LIKED, REMOVE_FROM_LIKED } = likedConstants;

export const dataReducer = (state, action) => {
  const { type, payload } = action;
  console.log(payload);
  console.log(type);
  switch (type) {
    case GET_VIDEOS:
      return { ...state, videos: payload };
    case ERROR:
      return { ...state, error: payload };
    case LOADING:
      return { ...state, loading: true };
    case FILTER_CATEGORY:
      return { ...state, filterByCategory: payload };
    case SEARCH:
      return { ...state, searchQuery: payload };
    case ADD_TO_LIKED:
      return { ...state, liked: payload };
    case REMOVE_FROM_LIKED:
      return { ...state, liked: payload };
  }
};
