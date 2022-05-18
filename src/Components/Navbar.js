import React from 'react';
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Features from "../Pages/Features"
import Error from '../Pages/Error'

export default function Navbar() {
    return (
        <>
            <div className="navbar container-fluid">
                <Router>
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/features" element={<Features />} />
                        <Route path="*" element={<Error />} />
                    </Routes>

                    <div id="right-menu">
                        <ul className="navbar-nav">
                            <li><a href="#worldclass">Visit</a></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/features">Features</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </Router>
            </div>
        </>
    )
}