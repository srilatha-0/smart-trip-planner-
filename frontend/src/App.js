import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import DiscoverTrips from "./components/DiscoverTrips";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/DiscoverTrips" element={<DiscoverTrips />} />
      </Routes>
    </Router>
  );
}

export default App;
