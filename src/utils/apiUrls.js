export const videoUrl = "/api/videos";
export const categoryUrl = "/api/categories";
export const likedUrl = "/api/user/likes";
export const watchLaterUrl = "/api/user/watchlater";
export const playlistUrl = "/api/user/playlists";
export const historyUrl = "/api/user/history";
export const getConfig = () => {
  return {
    headers: { authorization: localStorage.getItem("magnetLibraryToken") },
  };
};
