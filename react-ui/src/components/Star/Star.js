import React, { Component } from 'react';
import propTypes from 'prop-types';
import iconStarFilled from '../../images/iconStarFilled.svg';
import iconStarEmpty from '../../images/iconStarEmpty.svg';
import iconBigStarEmpty from '../../images/iconBigStarEmpty.svg';
import iconBigStarFilled from '../../images/iconBigStarFilled.svg';

class Star extends Component {

  image() {
    if (this.props.filled) {
      return this.props.big ? iconBigStarFilled : iconStarFilled;
    }
    return this.props.big ? iconBigStarEmpty : iconStarEmpty;
  }

  render() {
    return (
      <img
        src={this.image()}
        alt=""
      />
    );
  }
}

Star.propTypes = {
  filled: propTypes.bool.isRequired,
  big: propTypes.bool
};

export default Star;
