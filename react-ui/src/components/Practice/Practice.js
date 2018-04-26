import React, { Component } from 'react';
import propTypes from 'prop-types';
import mapTypeToContainers from '../../helpers/mapTypeToContainers';

class Practice extends Component {
  render() {
    const Container =
      mapTypeToContainers(this.props.currentExercise.get('type'));
    return this.props.initialized ? <Container userSettings={this.props.userSettings} /> : null;
  }
}

Practice.propTypes = {
  currentExercise: propTypes.node.isRequired,
  initialized: propTypes.bool.isRequired,
  userSettings: propTypes.object
};

export default Practice;
