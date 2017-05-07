import React, { Component } from 'react';

import CardTemplate from './components/CardTemplate';

class Register extends Component {
  handleSubmit() {
    alert('To be implemented.');
  }

  render() {
    return (
      <CardTemplate>
        <form onSubmit={this.handleSubmit}>
          <h2>Register</h2>
          <label> First name:
            <input type="text" className="uk-input" name="firstName" />
          </label>
          <br/>
          <label> Last name:
            <input type="text" className="uk-input" name="lastName" />
          </label>
          <br/>
          <label> Username:
            <input type="text" className="uk-input" name="username" />
          </label>
          <br/>
          <label> Password:
            <input type="text" className="uk-input" name="password" />
          </label>
          <br/>
          <label> Email:
            <input type="text" className="uk-input" name="email" />
          </label>
          <label><br/></label>
          <input type="submit" className="uk-input" value="Submit" />
        </form>
      </CardTemplate>
    )
  }
}
export default Register;
