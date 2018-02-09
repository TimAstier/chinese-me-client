import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Exam as ExamComponent } from '../../components';
import s from '../../rootSelectors';

class Exam extends Component {
  render() {
    if (this.props.currentExercise) {
      return (
        <ExamComponent
          score={this.props.score}
          scoreMax={this.props.scoreMax}
          currentExercise={this.props.currentExercise}
          initialized={this.props.initialized}
        />
      );
    }
    return null;
  }
}

Exam.propTypes = {
  score: propTypes.number.isRequired,
  scoreMax: propTypes.number.isRequired,
  currentExercise: propTypes.object,
  initialized: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  score: s.exam.getScore(state),
  scoreMax: s.exam.getScoreMax(state),
  currentExercise: s.exam.getCurrentExercise(state),
  initialized: s.exam.getInitialized(state)
});

export default connect(
  mapStateToProps
)(Exam);
