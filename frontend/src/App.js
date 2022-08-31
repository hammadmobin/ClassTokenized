import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode, useState } from "react";
import Users from './components/Users';
import Course from './components/Course';
import Courseid from './components/CourseId';
import Nft from './components/Nft';
import Home from './components/Home';
import CoursesLists from './services/CoursesLists';
import Homebar from './components/homenavbar';

function App() {
  return (    
    <div >
  <StrictMode>
    <BrowserRouter>
      <header>
      </header>
      <Routes>   
          <Route path="/" element={<Homebar />} />
          <Route path="/:username" element={<Users />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course/:id" element={<Courseid />} />
          <Route path="/course/:id/:nftid" element={<Nft />} />
          <Route path="/cerificates" element={<cerificates />} />
          <Route path="/CoursesLists" element={<CoursesLists />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
  </div>
  );
}

export default App;
