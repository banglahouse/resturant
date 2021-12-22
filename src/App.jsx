import React from 'react';
import './App.css';
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Success from './components/common/Success'
import Error from'./components/common/Error'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (

      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/success' component={Success} />
          <Route exact path='/error' component={Error} />
          <Redirect to='/' />
        </Switch>
      </Router>
 
  );
};

export default App;
