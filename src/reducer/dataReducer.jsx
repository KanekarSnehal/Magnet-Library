import {
  videoConstants,
  likedConstants,
  watchLaterConstants,
  playlistConstants,
} from "../utils";

const { GET_VIDEOS, ERROR, LOADING, FILTER_CATEGORY, SEARCH } = videoConstants;
const { ADD_TO_LIKED, REMOVE_FROM_LIKED } = likedConstants;
const { ADD_TO_WATCH_LATER, REMOVE_FROM_WATCH_LATER } = watchLaterConstants;
const {
  GET_PLAYLISTS,
  ADD_PLAYLIST,
  DELETE_PLAYLIST,
  ADD_VIDEO_TO_PLAYLIST,
  DELETE_VIDEO_FROM_PLAYLIST,
} = playlistConstants;

export const dataReducer = (state, action) => {
  const { type, payload } = action;
  let playlists = state.playlists;

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
    case GET_PLAYLISTS:
    case ADD_PLAYLIST:
    case DELETE_PLAYLIST:
      return { ...state, playlists: payload };
    case ADD_VIDEO_TO_PLAYLIST:
    case DELETE_VIDEO_FROM_PLAYLIST:
      const newPlaylists = playlists.map((playlist) =>
        playlist._id === payload._id ? payload : playlist
      );

      return { ...state, playlists: newPlaylists };
    default:
      return state;
  }
};
