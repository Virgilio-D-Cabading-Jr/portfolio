import './App.css';
import { Switch, Route } from 'react-router-dom'

import HomeView from './components/HomeView';
import NavBarComp from './components/NavBarComp';
import AboutMeView from './components/AboutMeView';
import ProjectsView from './components/ProjectsView';
import ContactInfoView from './components/ContactInfoView';

////////////////////////////////////////////////////
//  ROOT APPLICATION
////////////////////////////////////////////////////

function App() {
  return (
    <Switch>
      <Route exact path="/portfolio/">
        <HomeView />
      </Route>
      <div className='bg-white'>
        <Route exact path="/portfolio/aboutme">
          <NavBarComp />
          <AboutMeView />
        </Route>
        <Route exact path="/portfolio/projects">
          <NavBarComp />
          <ProjectsView />
        </Route>
        <Route exact path="/portfolio/contactinfo">
          <NavBarComp />
          <ContactInfoView />
        </Route>
      </div>
    </Switch>
  );
}

export default App;
