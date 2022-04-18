export const compose =
  (...filterFunctions) =>
  (state, videos) =>
    filterFunctions.reduce((acc, curr) => curr(state, acc), videos);

export const filterByCategory = (state, videos) => {
  const { filterByCategory } = state;
  return filterByCategory.toLowerCase() === "all"
    ? videos
    : videos.filter(
        (video) =>
          video.categoryName.toLowerCase() === filterByCategory.toLowerCase()
      );
};

export const getSearchResults = (state, videos) => {
  const { searchQuery } = state;
  return searchQuery === null
    ? videos
    : videos.filter(
        (video) =>
          video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          video.creator.toLowerCase().includes(searchQuery.toLowerCase()) ||
          video.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
      );
};
