import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode, useState } from "react";
import Users from './components/Users';
import Course from './components/Course';
import Courseid from './components/CourseId';
import Nft from './components/Nft';
import Home from './components/Home';


function App() {
  return (    
  <StrictMode>
    <BrowserRouter>
      <header>
      </header>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:username" element={<Users />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course/:id" element={<Courseid />} />
          <Route path="/course/:id/:nftid" element={<Nft />} />
          <Route path="/cerificates" element={<cerificates />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
  );
}

export default App;
