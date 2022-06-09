import './App.css';
import Title from './Components/Title'
import Tagline from './Components/Tagline'
import Navbar from './Components/Navbar'
import Error from './Components/Error'
import About from "./Components/About"
import Contact from "./Components/Contact"
import Features from "./Components/Features"
import Home from './Components/Home'
import Visit from './Components/Visit'
import Hotels from './Components/Hotels'

import React, { Components } from 'react'
import { Link, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

export default function App() {
  return (
    <>
      <div className="App">
        {/* <div className="header"> */}
        <Title />
        <Tagline />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/features" element={<Features />} />
            <Route path="/visit" element={<Visit />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/stays" element={<Hotels />} />
            <Route path="/stay" element={<Hotels />} />
            <Route path="/hotel" element={<Hotels />} />
            
            {/* <Route path="/*" element={<Navigate to="/" />} /> */}
          </Routes>
        </Router>
        {/* </div> */}
      </div>
    </>
  );
}