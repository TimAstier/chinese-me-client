import React, { Component } from 'react';
import propTypes from 'prop-types';
import { PracticeResult } from '../.';
import mapTypeToContainers from '../../helpers/mapTypeToContainers';

class Practice extends Component {
  componentWillUnmount() {
    return this.props.init();
  }

  render() {
    // Display an error if there was no exercise linked to this practice
    if (this.props.error) {
      return <div>{'{ERROR: no exercise found for this practice.}'}</div>;
    }
    // Keep displayng exercises until there is no exercise left
    if (this.props.currentExercise) {
      const Container =
        mapTypeToContainers(this.props.currentExercise.get('type'));
      return this.props.initialized ? <Container userSettings={this.props.userSettings} /> : null;
    }
    return <PracticeResult />;
  }
}

Practice.propTypes = {
  currentExercise: propTypes.node,
  initialized: propTypes.bool.isRequired,
  userSettings: propTypes.object,
  error: propTypes.bool.isRequired,
  children: propTypes.node,
  init: propTypes.func.isRequired
};

export default Practice;
