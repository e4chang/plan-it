import React, { Component } from 'react';

class Register extends Component {
  render() {
    return (
      <div className="uk-grid">
        <div className="uk-width-1-3"></div>
          <div className="uk-width-1-3">
            <div className="uk-card uk-card-default uk-card-body">
              <form>
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
            </div>
          </div>
        </div>
    )
  }
}
export default Register;
