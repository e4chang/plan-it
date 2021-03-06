import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StepOne from "./pages/CreateTrip";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="uk-navbar-container" uk-navbar>
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/create">Create</Link></li>
              </ul>
            </div>
          </nav>

          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/create" component={StepOne}/>
        </div>
      </Router>
    );
  }
}

export default App;
