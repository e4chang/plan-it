import React, { Component } from 'react';

import FormTemplate from './components/FormTemplate';

/**
 * Form that contains high level details of the trip
 */
class StepOne extends Component {
  handleSubmit() {
    alert('To be implemented.');
  }
  render() {
    return (
      <FormTemplate>
        <form onSubmit={this.handleSubmit}>
          <h2>Step One</h2>
          <label> Trip name: </label>
          <input type="text" className="uk-input" name="name" />
          <label> Start date: </label>
          <input type="text" className="uk-input" name="startdate" />
          <label> End date: </label>
          <input type="text" className="uk-input" name="enddate" />
          <label> Start city: </label>
          <input type="text" className="uk-input" name="startcity" />
          <label> End city: </label>
          <input type="text" className="uk-input" name="endcity" />
          <label><br/></label>
          <input type="submit" className="uk-input" value="Next" />
        </form>
      </FormTemplate>
    )
  }
}

export default StepOne;
