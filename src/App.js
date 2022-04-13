import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Explore } from "./pages/index";
import { Header } from "./components";
import "./App.css";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
}

export default App;
