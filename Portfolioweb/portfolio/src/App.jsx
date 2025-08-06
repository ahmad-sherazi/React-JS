// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './Pages/About';
import Skill from './Pages/Skill';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
