import React, { Component } from 'react';

import CardTemplate from './components/CardTemplate';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
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
          <h2>Login</h2>
          <label> Username: </label>
          <input type="text"
            value={this.state.username}
            onChange={this.handleInputChange}
            className="uk-input"
            name="username" />
          <br/>
          <label> Password: </label>
          <input type="text"
            value={this.state.password}
            onChange={this.handleInputChange}
            className="uk-input"
            name="password" />
          <label><br/></label>
          <input type="submit" className="uk-input" value="Submit" />
        </form>
      </CardTemplate>
    )
  }
}
export default Login;
