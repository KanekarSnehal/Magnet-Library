import { videoConstants } from "../utils/dataActions";

const { GET_VIDEOS, ERROR, LOADING, FILTER_CATEGORY, SEARCH } = videoConstants;

export const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_VIDEOS:
      return { ...state, videos: [...payload] };
    case ERROR:
      return { ...state, error: payload };
    case LOADING:
      return { ...state, loading: true };
    case FILTER_CATEGORY:
      return { ...state, filterByCategory: payload };
    case SEARCH:
      return { ...state, searchQuery: payload };
  }
};
