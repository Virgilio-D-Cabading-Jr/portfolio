import './App.css';
import { Element } from 'react-scroll';

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
      <React.Fragment>
        <HomeComp />
        <NavBarComp />
          <AboutMeComp id='aboutme' />
      </React.Fragment>
    </div>
  );
}

export default App;
