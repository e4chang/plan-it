import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import CardTemplate from './components/CardTemplate';

class Home extends Component {
  render() {
    return (
      <CardTemplate>
        <h2>Welcome!</h2>
        <div className="uk-margin">
          <Link className="uk-button uk-button-default" to="/login">Login</Link>
        </div>
        <div className="uk-margin">
          <Link className="uk-button uk-button-default" to="/register">Register</Link>
        </div>
      </CardTemplate>
    )
  }
}

export default Home;
