import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomeView from './components/HomeView';
import Navbar from './components/Navbar';
import AboutMeView from './components/AboutMeView';
import ProjectsView from './components/ProjectsView';
import ContactInfoView from './components/ContactInfoView';

////////////////////////////////////////////////////
//  App.js
////////////////////////////////////////////////////

const App = () => {
  return (
    <Switch>
      <Route exact path="/portfolio/">
        <div id='title'>
          <HomeView />
        </div>
        <Navbar />
        <div id='aboutme'>
          <div className='add-space-top' />
          <AboutMeView />
        </div>
        <div className='bg-world-01' />
        <div id='projects'>
          <div className='add-space-top' />
          <ProjectsView />
        </div>
        <div className='bg-makati-skyline' />
        <div id='contactinfo'>
          <div className='add-space-top' />
          <ContactInfoView />
        </div>
      </Route>
    </Switch>
  );
}

export default App;
