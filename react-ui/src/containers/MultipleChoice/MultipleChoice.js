import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { MultipleChoice as MultipleChoiceComponent } from '../../components';
import s from '../../rootSelectors';
import { actions as multipleChoiceActions } from '../../redux/multipleChoice';
import * as models from '../../models';
import { actions as sagaActions } from '../../sagas/actions';

class MultipleChoice extends Component {
  render() {
    return (
      <MultipleChoiceComponent
        question={this.props.multipleChoice.question}
        choices={this.props.multipleChoice.choices}
        status={this.props.status}
        userAnswer={this.props.userAnswer}
        setUserAnswer={this.props.setUserAnswer}
        explanation={this.props.multipleChoice.explanation}
        checkAnswer={this.props.checkAnswer}
      />
    );
  }
}

MultipleChoice.propTypes = {
  multipleChoice: propTypes.instanceOf(models.MultipleChoice).isRequired,
  status: propTypes.oneOf([ 'question', 'wrong', 'correct' ]).isRequired,
  userAnswer: propTypes.number,
  setUserAnswer: propTypes.func.isRequired,
  checkAnswer: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  multipleChoice: s.getCurrentMultipleChoice(state),
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
