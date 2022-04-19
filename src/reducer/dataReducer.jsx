import { videoConstants, likedConstants, watchLaterConstants } from "../utils";

const { GET_VIDEOS, ERROR, LOADING, FILTER_CATEGORY, SEARCH } = videoConstants;
const { ADD_TO_LIKED, REMOVE_FROM_LIKED } = likedConstants;
const { ADD_TO_WATCH_LATER, REMOVE_FROM_WATCH_LATER } = watchLaterConstants;

export const dataReducer = (state, action) => {
  const { type, payload } = action;

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
    case REMOVE_FROM_LIKED:
      return { ...state, liked: payload };
    case ADD_TO_WATCH_LATER:
    case REMOVE_FROM_WATCH_LATER:
      return { ...state, watchLater: payload };
  }
};
