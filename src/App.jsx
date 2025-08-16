import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Contact from './Components/Contact'

const App=()=>{
  return(
    <div>
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Project />
    <Contact />
    </div>
  )
}
export default App
