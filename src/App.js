import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomeView from './components/HomeView';
import AboutMeView from './components/AboutMeView';
import ProjectsView from './components/ProjectsView';
import ContactInfoView from './components/ContactInfoView';

////////////////////////////////////////////////////
//  ROOT APPLICATION
////////////////////////////////////////////////////

const App = () => {
  return (
    <Switch>
      <Route exact path="/portfolio/">
        <div id='title'>
          <HomeView />
        </div>
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
