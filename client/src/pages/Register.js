import React, { Component } from 'react';

import CardTemplate from './components/CardTemplate';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      email: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert('To be implemented.');
    event.preventDefault();
  }

  render() {
    return (
      <CardTemplate>
        <form onSubmit={this.handleSubmit}>
          <h2>Register</h2>
          <label> First name:
            <input type="text"
              value={this.state.firstName}
              className="uk-input"
              name="firstName"
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label> Last name:
            <input type="text"
              value={this.state.lastName}
              className="uk-input"
              name="lastName"
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label> Username:
            <input type="text"
              value={this.state.username}
              className="uk-input"
              name="username"
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label> Password:
            <input type="text"
              value={this.state.password}
              className="uk-input"
              name="password"
              onChange={this.handleInputChange} />
          </label>
          <br/>
          <label> Email:
            <input type="text"
              value={this.state.email}
              className="uk-input"
              name="email"
              onChange={this.handleInputChange} />
          </label>
          <label><br/></label>
          <input type="submit" className="uk-input" value="Submit" />
        </form>
      </CardTemplate>
    )
  }
}
export default Register;
