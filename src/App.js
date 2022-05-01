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
} from "./pages/index";
import { Header } from "./components";
import { GuestRoute, ProtectedRoute } from "./utilities/routes";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <Router>
      <Header />
      <ToastContainer autoClose={2000} theme="colored" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id" element={<VideoDetailPage />} />
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/liked" element={<Liked />} />
          <Route path="/watchlater" element={<WatchLater />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
