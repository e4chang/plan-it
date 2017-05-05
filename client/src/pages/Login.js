import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="Form">
        <h2>Login</h2>
        <form>
          <label> Username:
            <input type="text" name="username" />
          </label>
          <br/>
          <label> Password:
            <input type="text" name="password" />
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}
export default Login;
