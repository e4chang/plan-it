import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class CardTemplate extends Component {
  render() {
    return (
      <div className="uk-grid uk-margin">
        <div className="uk-width-1-3"></div>
        <div className="uk-width-1-3">
          <div className="uk-card uk-card-default uk-card-body">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
export default CardTemplate;
