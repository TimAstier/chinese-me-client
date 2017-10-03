import React, { Component } from 'react';
import propTypes from 'prop-types';
import iconStarFilled from '../../images/iconStarFilled.svg';
import iconStarEmpty from '../../images/iconStarEmpty.svg';

class Star extends Component {

  render() {
    return (
      <img src={this.props.filled ? iconStarFilled : iconStarEmpty} alt=""/>
    );
  }
}

Star.propTypes = {
  filled: propTypes.bool.isRequired
};

export default Star;
