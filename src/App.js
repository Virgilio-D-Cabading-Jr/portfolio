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
        <Link to="aboutme"
          className='home-btn col btn m-3'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500} >
          <h3><strong>About Me</strong></h3>
        </Link>
        <HomeComp />
        <NavBarComp />
        <AboutMeComp id='aboutme' />
    </div>
  );
}

export default App;
