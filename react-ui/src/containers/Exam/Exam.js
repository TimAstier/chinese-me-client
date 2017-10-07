import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Exam as ExamComponent } from '../../components';
import selectors from '../../rootSelectors';

class Exam extends Component {

  render() {
    return (
      <ExamComponent
        score={this.props.score}
        scoreMax={this.props.scoreMax}
        currentExercise={this.props.currentExercise}
        initialized={this.props.initialized}
      />
    );
  }
}

Exam.propTypes = {
  score: propTypes.number.isRequired,
  scoreMax: propTypes.number.isRequired,
  currentExercise: propTypes.object,
  initialized: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  score: selectors.getExamScore(state),
  scoreMax: selectors.getExamScoreMax(state),
  currentExercise: selectors.getExamCurrentExercise(state),
  initialized: selectors.getExamInitialized(state)
});

export default connect(
  mapStateToProps
)(Exam);
