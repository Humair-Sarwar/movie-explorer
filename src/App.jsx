import { Route, Routes, BrowserRouter as Router } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import { useEffect, useState } from "react";
import SwitchColorMode from "./components/SwitchColorMode";

function App() {
  const [search, setSearch] = useState("");
  const [switchColor, setSwitchColor] = useState(() => {
    const saved = localStorage.getItem("color-switch");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("color-switch", JSON.stringify(switchColor));
  }, [switchColor]);

  const handleSwitchMode = () => {
    setSwitchColor((prev) => !prev);
  };
  return (
    <>
      <Router>
        <Navbar setSearch={setSearch} switchColor={switchColor} />
        <SwitchColorMode
          switchColor={switchColor}
          handleSwitchMode={handleSwitchMode}
        />
        <Routes>
          <Route
            path="/"
            element={<Home search={search} switchColor={switchColor} />}
          />
          <Route
            path="/movie/:id"
            element={<MovieDetail switchColor={switchColor} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
