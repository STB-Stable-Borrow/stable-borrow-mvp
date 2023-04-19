import React from "react";
import Index from "./layouts";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}
export default App;
