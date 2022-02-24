import './App.css';
import { Link, animateScroll as scroll } from "react-scroll";

import HomeComp from './components/HomeComp';
import NavBarComp from './components/NavBarComp';
import AboutMeComp from './components/AboutMeComp';
import React from 'react';

////////////////////////////////////////////////////
//  ROOT APPLICATION
////////////////////////////////////////////////////

function App() {
  return (
    <div>
        <a href='#aboutme' >Try this</a>
        <HomeComp />
        <NavBarComp />
        <AboutMeComp id='aboutme' />
    </div>
  );
}

export default App;
