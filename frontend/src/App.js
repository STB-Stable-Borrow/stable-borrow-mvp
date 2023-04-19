import React from "react";
import Index from "./layouts";
import Info from "./pages/Info";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
export default App;
