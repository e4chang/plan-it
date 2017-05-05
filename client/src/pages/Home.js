import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="uk-grid">
        <div className="uk-width-1-3"></div>
        <div className="uk-width-1-3">
          <div className="uk-card uk-card-default uk-card-body">
            <h2>Welcome!</h2>
            <div className="uk-margin">
              <Link className="uk-button uk-button-default" to="/login">Login</Link>
            </div>
            <div className="uk-margin">
              <Link className="uk-button uk-button-default" to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;
