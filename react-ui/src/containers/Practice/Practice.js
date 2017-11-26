import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Practice as PracticeComponent } from '../../components';
import s from '../../rootSelectors';

class Practice extends Component {
  render() {
    if (this.props.currentExercise) {
      return (
        <PracticeComponent
          currentExercise={this.props.currentExercise}
          initialized={this.props.initialized}
        />
      );
    }
    return null;
  }
}

Practice.propTypes = {
  currentExercise: propTypes.object,
  initialized: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  currentExercise: s.practice.getCurrentExercise(state),
  initialized: s.practice.getInitialized(state)
});

export default connect(
  mapStateToProps
)(Practice);
