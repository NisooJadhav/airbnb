import React from 'react';
import { Link,NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div id="right-menu">
            <ul className="navbar-nav">
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/hotels">Hotels</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/features">Features</NavLink></li>
            </ul>
        </div>
    )
}