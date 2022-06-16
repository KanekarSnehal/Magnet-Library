import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Explore,
  Login,
  Signup,
  Profile,
  Liked,
  WatchLater,
  Playlist,
  VideoDetailPage,
  History,
  ScrollToTop,
} from "../pages";
import { Header, MobileNavBar } from "../components";
import { ToastContainer } from "react-toastify";

export const ProtectedRoute = () => {
  const {
    authState: { authToken },
  } = useAuth();
  return authToken ? <Outlet /> : <Navigate to={"/login"} />;
};

export const AppRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <ToastContainer autoClose={2000} theme="colored" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id" element={<VideoDetailPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
      <MobileNavBar />
    </Router>
  );
};
