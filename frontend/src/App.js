import React from "react";
import Info from "./pages/Info";
import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AboutProvider } from "./context/aboutContext";


function App() {
  return (
    <React.StrictMode>
      <Router>
        <AboutProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </AboutProvider>
      
      </Router>
    </React.StrictMode>
  );
}
export default App;
