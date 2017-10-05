import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Exam as ExamComponent } from '../../components';
import selectors from '../../rootSelectors';

class Exam extends Component {

  render() {
    console.log(this.props.currentExercise)
    return (
      <ExamComponent
        score={this.props.score}
        scoreMax={this.props.scoreMax}
      />
    );
  }
}

Exam.propTypes = {
  score: propTypes.number.isRequired,
  scoreMax: propTypes.number.isRequired,
  currentExercise: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  score: selectors.getExamScore(state),
  scoreMax: selectors.getExamScoreMax(state),
  currentExercise: selectors.getExamCurrentExercise(state)
});

export default connect(
  mapStateToProps
)(Exam);
