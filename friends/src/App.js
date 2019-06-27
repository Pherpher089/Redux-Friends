import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import FriendsView from './components/FriendsView'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Log in</Link>
          </li>
          <li>
            <Link to='/protected'>ProtectedPage</Link>
          </li>
        </ul>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/protected' component={FriendsView} />
      </div>
    </Router>
  );
}

export default App;
