import React, { Component } from 'react';

/**
 * Template for pages that use a form view
 */
class FormTemplate extends Component {
  render() {
    return (
      <div className="uk-margin uk-margin-left uk-width-1-3">
        {this.props.children}
      </div>
    )
  }
}
export default FormTemplate;
