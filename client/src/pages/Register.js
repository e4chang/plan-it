import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div className="Form">
        <h2>Register</h2>
        <form>
          <label> First name:
            <input type="text" name="firstName" />
          </label>
          <br/>
          <label> Last name:
            <input type="text" name="lastName" />
          </label>
          <br/>
          <label> Username:
            <input type="text" name="username" />
          </label>
          <br/>
          <label> Password:
            <input type="text" name="password" />
          </label>
          <br/>
          <label> Email:
            <input type="text" name="email" />
          </label>
          <br/>
          <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}
export default Register;
