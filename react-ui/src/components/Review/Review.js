import React, { Component } from 'react';
import propTypes from 'prop-types';
import mapTypeToContainers from '../../helpers/mapTypeToContainers';

class Review extends Component {

  render() {
    const Container =
      mapTypeToContainers(this.props.currentExercise.get('type'));
    return this.props.initialized ? <Container /> : null;
  }
}

Review.propTypes = {
  currentExercise: propTypes.node.isRequired,
  initialized: propTypes.bool.isRequired
};

export default Review;
