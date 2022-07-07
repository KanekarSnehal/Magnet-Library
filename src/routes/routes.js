import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "../pages";
import { Header, Loader } from "../components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const Explore = lazy(() => import("../pages/Explore/Explore"));
const Login = lazy(() => import("../pages/Auth/Login"));
const Signup = lazy(() => import("../pages/Auth/Signup"));
const Profile = lazy(() => import("../pages/Profile/Profile"));
const Liked = lazy(() => import("../pages/Liked/Liked"));
const WatchLater = lazy(() => import("../pages/WatchLater/WatchLater"));
const Playlist = lazy(() => import("../pages/Playlist/Playlist"));
const VideoDetailPage = lazy(() =>
  import("../pages/VideoDetailPage/VideoDetailPage")
);
const History = lazy(() => import("../pages/History/History"));

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
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/explore"
          element={
            <Suspense fallback={<Loader />}>
              <Explore />
            </Suspense>
          }
        />
        <Route
          path="/explore/:id"
          element={
            <Suspense fallback={<Loader />}>
              <VideoDetailPage />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<Loader />}>
              <Signup />
            </Suspense>
          }
        />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/profile"
            element={
              <Suspense fallback={<Loader />}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            path="/liked"
            element={
              <Suspense fallback={<Loader />}>
                <Liked />
              </Suspense>
            }
          />
          <Route
            path="/watchlater"
            element={
              <Suspense fallback={<Loader />}>
                <WatchLater />
              </Suspense>
            }
          />
          <Route
            path="/playlist"
            element={
              <Suspense fallback={<Loader />}>
                <Playlist />
              </Suspense>
            }
          />
          <Route
            path="/history"
            element={
              <Suspense fallback={<Loader />}>
                <History />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};
