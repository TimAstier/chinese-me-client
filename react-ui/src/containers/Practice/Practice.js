import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Practice as PracticeComponent } from '../../components';
import s from '../../rootSelectors';

class Practice extends Component {
  render() {
    return (
      <PracticeComponent
        currentExercise={this.props.currentExercise}
        initialized={this.props.initialized}
        error={this.props.error}
        userSettings={this.props.userSettings}
      />
    );
  }
}

Practice.propTypes = {
  currentExercise: propTypes.object,
  initialized: propTypes.bool.isRequired,
  error: propTypes.bool.isRequired,
  userSettings: propTypes.object
};

const mapStateToProps = state => ({
  currentExercise: s.practice.getCurrentExercise(state),
  initialized: s.practice.getInitialized(state),
  error: s.practice.getError(state),
  userSettings: s.getAugmentedSettings(state)
});

export default connect(
  mapStateToProps
)(Practice);
