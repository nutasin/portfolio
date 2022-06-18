import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//contents
import Home from './contents/Home'
import Experience from './contents/Experience'
import Education from './contents/Education'
import Skill from './contents/Skill'
import Contact from './contents/Contact'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home/>}></Route>
            <Route exact path="/experience" element={<Experience/>}></Route>
            <Route exact path="/education" element={<Education/>}></Route>
            <Route exact path="/skill" element={<Skill/>}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
