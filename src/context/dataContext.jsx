import { createContext, useContext, useReducer, useEffect } from "react";
import { dataReducer } from "../reducer";
import { getVideos } from "../services";
import { compose, getSearchResults, filterByCategory } from "../utils";
const DataContext = createContext();
const useData = () => useContext(DataContext);

const initialDataState = {
  videos: [],
  liked: [],
  watchLater: [],
  history: [],
  playlists: [],
  loading: false,
  error: false,
  searchQuery: null,
  filterByCategory: "ALL",
};
const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useReducer(dataReducer, initialDataState);

  useEffect(() => {
    getVideos(dataDispatch);
  }, []);

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
