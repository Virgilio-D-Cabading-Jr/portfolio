import './App.css';
import { Switch, Route } from 'react-router-dom'



////////////////////////////////////////////////////
//  ROOT APPLICATION
////////////////////////////////////////////////////

function App() {
  return (
    <Switch>
      <Route exact path="/">
      </Route>
      <div className='bg-white'>
        <Route exact path="/aboutme">
          <NavBarComp />
        </Route>
        <Route exact path="/projects">
          <NavBarComp />
        </Route>
        <Route exact path="/contactinfo">
          <NavBarComp />
        </Route>

      </div>
    </Switch>
  );
}

export default App;
