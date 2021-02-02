import Srinagar from './Containers/Srinagar.js' ;
import Jaisalmer from './Containers/Jaisalmer.js' ;
import Ooty from './Containers/Ooty.js' ;
import Gangtok from './Containers/Gangtok.js' ;
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';

function App() {
  return (
    <Router>
    <div class="w3-container">
      style={{
      backgroundImage:"url('https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover" ,
      height: "100%",
      width: "100%" ,
      position: "absolute" ,
      }}
      
      <div class="w3-center">
        <h1 style={{ fontWeight: 'bold' }} >Travel & Tourism Co. </h1>
        </div>
      
      <div class="w3-panel w3-pale-red">
        <p> hello </p>
      </div>
      
        <div class="w3-center" >
          <h4 style={{ fontWeight: 'bold' }}> Pick the place you want to visit </h4>
          <ul>
            <li>
              <NavLink to="/Srinagar" > Srinagar </NavLink>
            </li>
            <li>
              <NavLink to="/Jaisalmer" > Jaisalmer </NavLink>
            </li>
            <li>
              <NavLink to="/Ooty" > Ooty </NavLink>
            </li>
            <li>
              <NavLink to="/Gangtok" > Gangtok </NavLink>
            </li>
          </ul>

          <Route path = "/Srinagar" exact strict render = {
            () => {
              return(<Srinagar/>)
            }
          } />
          <Route path = "/Jaisalmer" exact strict render = {
            () => {
              return(<Jaisalmer/>)
            }
          } />
          <Route path = "/Ooty" exact strict render = {
            () => {
              return(<Ooty/>)
            }
          } />
          <Route path = "/Gangtok" exact strict render = {
            () => {
              return(<Gangtok/>)
            }
          } />

        </div>
      

    </div>
    </Router>
  );
}

export default App;
