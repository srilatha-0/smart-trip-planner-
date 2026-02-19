import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import DiscoverTrips from "./pages/discoverTrips/DiscoverTrips";
import HomePage from "./pages/home/HomePage";;

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
