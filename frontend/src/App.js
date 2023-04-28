import React from "react";
import Info from "./pages/Info";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutProvider } from "./context/aboutContext";
import Borrow from "./pages/borrow/Borrow";
import { BorrowProvider } from "./contexts/borrowContext/borrowContext";
import Registration from "./pages/earn/Registration";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <AboutProvider>
          <BorrowProvider>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/info" element={<Info />} />
              <Route path="/about" element={<About />} />

              <Route path="/borrow" element={<Borrow />} />
              <Route path="/register" element={<Registration />} />
            </Routes>
          </BorrowProvider>
        </AboutProvider>
      </Router>
    </React.StrictMode>
  );
}
export default App;
