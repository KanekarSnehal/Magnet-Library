import { createContext, useContext, useReducer, useEffect } from "react";
import { dataReducer } from "../reducer";
import {
  getVideos,
  getLikedVideos,
  getWatchLaterVideos,
  getHistory,
} from "../services";
import { compose, getSearchResults, filterByCategory } from "../utils";
import { useAuth } from "./authContext";
const DataContext = createContext();
const useData = () => useContext(DataContext);

const initialDataState = {
  videos: [],
  liked: [],
  watchLater: [],
  history: [],
  playlists: [],
  searchQuery: null,
  filterByCategory: "ALL",
  video: null,
};
const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialDataState);
  const {
    authState: { authToken },
  } = useAuth();

  useEffect(() => {
    if (dataState.videos.length === 0) getVideos(dataDispatch);
  }, []);

  useEffect(() => {
    if (dataState.liked.length === 0 && authToken) getLikedVideos(dataDispatch);
  }, [authToken]);

  useEffect(() => {
    if (dataState.watchLater.length === 0 && authToken)
      getWatchLaterVideos(dataDispatch);
  }, [authToken]);

  useEffect(() => {
    if (dataState.history.length === 0 && authToken) getHistory(dataDispatch);
  }, [authToken]);

  const filteredVideos = compose(filterByCategory, getSearchResults)(
    dataState,
    dataState.videos || []
  );

  return (
    <DataContext.Provider value={{ dataState, dataDispatch, filteredVideos }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, useData };
