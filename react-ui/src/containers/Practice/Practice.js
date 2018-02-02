import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Practice as PracticeComponent } from '../../components';
import { PracticeResult } from '../../components';
import s from '../../rootSelectors';

class Practice extends Component {
  render() {
    // Display an error if there was no exercise linked to this practice
    if (this.props.error) {
      return <div>{'{ERROR: no exercise found for this practice.}'}</div>;
    }
    // Keep displayng exercises until there is no exercise left
    if (this.props.currentExercise) {
      return (
        <PracticeComponent
          currentExercise={this.props.currentExercise}
          initialized={this.props.initialized}
          error={this.props.error}
        />
      );
    }
    return <PracticeResult />;
  }
}

Practice.propTypes = {
  currentExercise: propTypes.object,
  initialized: propTypes.bool.isRequired,
  error: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  currentExercise: s.practice.getCurrentExercise(state),
  initialized: s.practice.getInitialized(state),
  error: s.practice.getError(state)
});

export default connect(
  mapStateToProps
)(Practice);
