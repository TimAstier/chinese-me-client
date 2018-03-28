import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { FreeInput as FreeInputComponent } from '../../../components';
import s from '../../../rootSelectors';
import { actions as exerciseActions } from '../../../redux/exercise';
import * as models from '../../../models';
import { actions as sagaActions } from '../../../sagas/actions';

class FreeInput extends Component {
  handleChange(event) {
    return this.props.setUserAnswer(event.target.value);
  }

  _text() {
    const { guidelineText, questionText } = this.props.exercise;
    return (
      (guidelineText ? guidelineText : '')
      + (questionText ? (' ' + questionText) : '')
    ).trim();
  }

  _question() {
    if (this.props.exercise.type === 'audioToText') {
      if (!this._text()) {
        return 'Type what you hear in Chinese:';
      }
    }
    // textToChoice
    return this._text();
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
        loadingAnswer={this.props.loadingAnswer}
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
  explanation: propTypes.string,
  loadingAnswer: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  exercise: s.getCurrentExercise(state),
  status: s.exercise.getStatus(state),
  userAnswer: s.exercise.getUserAnswer(state),
  openFeedbackModal: s.ui.getOpenFeedbackModal(state),
  correctAnswer: s.practice.getCorrectAnswer(state),
  explanation: s.practice.getExplanation(state),
  loadingAnswer: s.exercise.getLoadingAnswer(state)
});

export default connect(
  mapStateToProps,
  {
    setUserAnswer: exerciseActions.setUserAnswer,
    checkAnswer: sagaActions.checkAnswer
  }
)(FreeInput);
