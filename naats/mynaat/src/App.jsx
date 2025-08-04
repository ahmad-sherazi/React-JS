// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Videos from "./pages/Videos";
import Audios from "./pages/Audios";

export default function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/audios" element={<Audios />} />
          <Route path="/videos" element={<Videos />} />
        </Routes>
      </div>
    </Router>
  );
}
