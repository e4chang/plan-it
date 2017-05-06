import React, { Component } from 'react';

class Login extends Component {
  handleSubmit() {
    alert('hello');
  }
  render() {
    return (
      <div className="uk-grid">
        <div className="uk-width-1-3"></div>
        <div className="uk-width-1-3">
          <div className="uk-card uk-card-default uk-card-body">
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
          </div>
        </div>
      </div>
    )
  }
}
export default Login;
