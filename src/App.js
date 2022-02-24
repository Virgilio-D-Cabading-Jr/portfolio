import './App.css';

import HomeComp from './components/HomeComp';
import NavBarComp from './components/NavBarComp';
import AboutMeComp from './components/AboutMeComp';

////////////////////////////////////////////////////
//  ROOT APPLICATION
////////////////////////////////////////////////////

function App() {
  return (
    <div>
      <HomeComp />
      <NavBarComp />
      <AboutMeComp />
    </div>
  );
}

export default App;
