import React, { Component } from 'react';

import CardTemplate from './components/CardTemplate';

class Login extends Component {
  handleSubmit() {
    alert('To be implemented.');
  }
  render() {
    return (
      <CardTemplate>
        <form onSubmit={this.handleSubmit}>
          <h2>Login</h2>
          <label> Username: </label>
          <input type="text" className="uk-input" name="username" />
          <br/>
          <label> Password: </label>
          <input type="text" className="uk-input" name="password" />
          <label><br/></label>
          <input type="submit" className="uk-input" value="Submit" />
        </form>
      </CardTemplate>
    )
  }
}
export default Login;
