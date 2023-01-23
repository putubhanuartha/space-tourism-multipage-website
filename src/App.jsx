import { useEffect, useState } from "react";
import Mainpage from "./pages/Mainpage";
import Header from "./components/Header";
import Destination from "./pages/Destination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import bgpath from "./bgpath";
import Crew from "./pages/Crew";
function App() {
  const [path, setPath] = useState("/");
  const [windowSize, setWindowSize] = useState();
  function getWindow() {
    if (window.innerWidth < 768) {
      setWindowSize("s");
    } else if (window.innerWidth > 768 && window.innerWidth < 1280) {
      setWindowSize("m");
    } else if (window.innerWidth > 1280) {
      setWindowSize("l");
    }
  }
  useEffect(() => {
    if (path === "/") {
      switch (windowSize) {
        case "s":
          document.body.style.backgroundImage = `url("${bgpath[0].mobile}")`;
          break;
        case "m":
          document.body.style.backgroundImage = `url("${bgpath[0].tablet}")`;
          break;
        case "l":
          document.body.style.backgroundImage = `url("${bgpath[0].desktop}")`;
          break;
      }
    } else if (path === "/destination") {
      switch (windowSize) {
        case "s":
          document.body.style.backgroundImage = `url("${bgpath[1].mobile}")`;
          break;
        case "m":
          document.body.style.backgroundImage = `url("${bgpath[1].tablet}")`;
          break;
        case "l":
          document.body.style.backgroundImage = `url("${bgpath[1].desktop}")`;
          break;
      }
    } else if (path === "/crew") {
      switch (windowSize) {
        case "s":
          document.body.style.backgroundImage = `url("${bgpath[2].mobile}")`;
          break;
        case "m":
          document.body.style.backgroundImage = `url("${bgpath[2].tablet}")`;
          break;
        case "l":
          document.body.style.backgroundImage = `url("${bgpath[2].desktop}")`;
          break;
      }
    }
  }, [windowSize, path]);
  useEffect(() => {
    getWindow();
    const size = window.addEventListener("resize", () => {
      getWindow();
    });
    return () => {
      removeEventListener("resize", size);
    };
  });
  return (
    <Router>
      <div id="App">
        <Header path={path} />
        <Routes>
          <Route
            path="/"
            element={<Mainpage pathState={{ path, setPath }} />}
          />
          <Route
            path="/destination"
            element={<Destination pathState={{ path, setPath }} />}
          />
          <Route
            path="/crew"
            element={<Crew pathState={{ path, setPath }} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
