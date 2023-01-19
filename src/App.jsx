import { useEffect, useState } from "react";
import Mainpage from "./pages/Mainpage";
import Header from "./components/Header";
import Destination from "./pages/Destination";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  console.log(window.location.pathname);
  const [homepagebg, setHomePageBg] = useState(
    "bg-home-mobile md:bg-home-tablet xl:bg-home-desktop"
  );
  const [path, setPath] = useState("/");
  useEffect(() => {
    if (window.location.pathname === "/") {
      setHomePageBg("bg-home-mobile md:bg-home-tablet xl:bg-home-desktop");
    }
    if (window.location.pathname === "/destination") {
      setHomePageBg(
        "bg-destination-mobile md:bg-destination-tablet xl:bg-destination-desktop"
      );
    }
  });

  return (
    <Router>
      <div
        id="App"
        className={`${homepagebg} h-screen w-screen overflow-hidden bg-no-repeat bg-cover`}
      >
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
