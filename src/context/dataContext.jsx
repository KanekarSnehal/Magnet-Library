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
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (dataState.videos.length === 0) getVideos(dataDispatch);
  }, []);

  useEffect(() => {
    if (dataState.liked.length === 0 && isAuthenticated)
      getLikedVideos(dataDispatch);
  }, [isAuthenticated]);

  useEffect(() => {
    if (dataState.watchLater.length === 0 && isAuthenticated)
      getWatchLaterVideos(dataDispatch);
  }, [isAuthenticated]);

  useEffect(() => {
    if (dataState.history.length === 0 && isAuthenticated)
      getHistory(dataDispatch);
  }, [isAuthenticated]);

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
