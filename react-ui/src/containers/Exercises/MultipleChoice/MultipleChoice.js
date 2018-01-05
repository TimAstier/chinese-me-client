import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { MultipleChoice as MultipleChoiceComponent } from '../../../components';
import s from '../../../rootSelectors';
import { actions as multipleChoiceActions } from '../../../redux/multipleChoice';
import * as models from '../../../models';
import { actions as sagaActions } from '../../../sagas/actions';

class MultipleChoice extends Component {
  _question() {
    if (this.props.exercise.type === 'audioToChoice') {
      if (this.props.exercise.text === null) {
        return 'Listen and select the correct answer:';
      }
    }
    // textToChoice
    return this.props.exercise.text;
  }

  render() {
    // TODO: explanation (teacher comment)
    return (
      <MultipleChoiceComponent
        question={this._question()}
        choices={this.props.exercise.choices}
        status={this.props.status}
        userAnswer={this.props.userAnswer}
        setUserAnswer={this.props.setUserAnswer}
        explanation={null}
        checkAnswer={this.props.checkAnswer}
      />
    );
  }
}

MultipleChoice.propTypes = {
  exercise: propTypes.instanceOf(models.Exercise).isRequired,
  status: propTypes.oneOf([ 'question', 'wrong', 'correct' ]).isRequired,
  userAnswer: propTypes.number,
  setUserAnswer: propTypes.func.isRequired,
  checkAnswer: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  exercise: s.getCurrentExercise(state),
  status: s.multipleChoice.getStatus(state),
  userAnswer: s.multipleChoice.getUserAnswer(state)
});

export default connect(
  mapStateToProps,
  {
    setUserAnswer: multipleChoiceActions.setUserAnswer,
    checkAnswer: sagaActions.checkAnswer
  }
)(MultipleChoice);
