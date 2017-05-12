import React, { Component } from 'react';

import FormTemplate from './components/FormTemplate';

/**
 * Form that contains high level details of the trip
 */
class StepOne extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      startdate: '',
      enddate: '',
      startcity: '',
      endcity: ''
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
      <FormTemplate>
        <form onSubmit={this.handleSubmit}>
          <h2>Step One</h2>
          <label> Trip name: </label>
          <input type="text"
            onChange={this.handleInputChange}
            value={this.state.name}
            className="uk-input"
            name="name" />
          <label> Start date: </label>
          <input type="text"
            onChange={this.handleInputChange}
            value={this.state.startdate}
            className="uk-input"
            name="startdate" />
          <label> End date: </label>
          <input type="text"
            onChange={this.handleInputChange}
            value={this.state.enddate}
            className="uk-input"
            name="enddate" />
          <label> Start city: </label>
          <input type="text"
            onChange={this.handleInputChange}
            value={this.state.startcity}
            className="uk-input"
            name="startcity" />
          <label> End city: </label>
          <input type="text"
            onChange={this.handleInputChange}
            value={this.state.endcity}
            className="uk-input"
            name="endcity" />
          <label><br/></label>
          <input type="submit" className="uk-input" value="Next" />
        </form>
      </FormTemplate>
    )
  }
}

export default StepOne;
