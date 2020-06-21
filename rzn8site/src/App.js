import React from 'react';
import './App.css';
import './assets/css/resonate.css'
import Print from './pages/printHome'
import Publishing from './pages/publishingHome'
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
function App() {
  return (


<Router>
 <Switch>
          
            <Route exact path='/printHome' component={Print} />
            <Route exact path='/publishingHome' component={Publishing} />
    <div className="row">
       
            
      
       
        <div className='col' id='publishing'>
          <button><Link to='/publishingHome'><h1>Publishing Services</h1></Link></button>

        </div>
        <div className='col' id='print'>
          <button><Link to='/printHome'><h1>Printing Services</h1></Link></button>

        </div>

    </div>
      </Switch>
  </Router>
  );
}

export default App;
