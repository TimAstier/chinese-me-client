import React, { Component } from 'react';
import propTypes from 'prop-types';
import spinner from '../../images/spinner.svg';

class Spinner extends Component {
  render() {
    return (
      <img
        src={spinner}
        alt=""
        height={this.props.size}
        width={this.props.size}
      />
    );
  }
}

Spinner.propTypes = {
  size: propTypes.number.isRequired
};

export default Spinner;
