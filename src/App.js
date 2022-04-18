import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Explore, Login, Signup, Profile, Liked } from "./pages/index";
import { Header } from "./components";
import { GuestRoute, ProtectedRoute } from "./utilities/routes";

import "./App.css";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route element={<GuestRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/liked" element={<Liked />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
