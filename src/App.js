import './App.css';
import Title from './Components/Title.js'
import Tagline from './Components/Tagline.js'
import Navbar from './Components/Navbar.js'
import Firstpara from './Components/Firstpara.js'
import Card from './Components/Card.js'
import React, { Components } from 'react'

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <Title />
        <Tagline />
        <Navbar />
      </div>
      <Firstpara />
      <Card />

      {/* <Contact/> */}
    </div>
  );
}