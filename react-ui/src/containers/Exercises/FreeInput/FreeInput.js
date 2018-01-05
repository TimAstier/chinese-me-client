import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { FreeInput as FreeInputComponent } from '../../../components';
import s from '../../../rootSelectors';
import { actions as freeInputActions } from '../../../redux/freeInput';
import * as models from '../../../models';
import { actions as sagaActions } from '../../../sagas/actions';

class FreeInput extends Component {
  handleChange(event) {
    return this.props.setUserAnswer(event.target.value);
  }

  _question() {
    if (this.props.exercise.type === 'audioToText') {
      if (this.props.exercise.text === null) {
        return 'Type what you hear in Chinese:';
      }
    }
    // textToChoice
    return this.props.exercise.text;
  }

  render() {
    // TODO: explanation (teacher comment)
    return (
      <FreeInputComponent
        handleChange={this.handleChange.bind(this)}
        question={this._question()}
        status={this.props.status}
        userAnswer={this.props.userAnswer}
        checkAnswer={this.props.checkAnswer}
        openFeedbackModal={this.props.openFeedbackModal}
        correctAnswer={this.props.correctAnswer}
        explanation={this.props.explanation}
      />
    );
  }
}

FreeInput.propTypes = {
  exercise: propTypes.instanceOf(models.Exercise).isRequired,
  status: propTypes.oneOf([ 'question', 'wrong', 'correct' ]).isRequired,
  userAnswer: propTypes.string.isRequired,
  setUserAnswer: propTypes.func.isRequired,
  checkAnswer: propTypes.func.isRequired,
  openFeedbackModal: propTypes.bool.isRequired,
  correctAnswer: propTypes.string,
  explanation: propTypes.string
};

const mapStateToProps = state => ({
  exercise: s.getCurrentExercise(state),
  status: s.freeInput.getStatus(state),
  userAnswer: s.freeInput.getUserAnswer(state),
  openFeedbackModal: s.ui.getOpenFeedbackModal(state),
  correctAnswer: s.practice.getCorrectAnswer(state),
  explanation: s.practice.getExplanation(state)
});

export default connect(
  mapStateToProps,
  {
    setUserAnswer: freeInputActions.setUserAnswer,
    checkAnswer: sagaActions.checkAnswer
  }
)(FreeInput);
