import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { MultipleChoice as MultipleChoiceComponent } from '../../components';
import selectors from '../../rootSelectors';
import { actions as multipleChoiceActions } from '../../redux/multipleChoice';
import * as models from '../../models';

class MultipleChoice extends Component {

  render() {
    return (
      <MultipleChoiceComponent
        question={this.props.multipleChoice.question}
        choices={this.props.multipleChoice.choices}
        status={this.props.status}
        userAnswer={this.props.userAnswer}
        setUserAnswer={this.props.setUserAnswer}
        correctAnswer={this.props.multipleChoice.correctAnswer}
        explanation={this.props.multipleChoice.explanation}
      />
    );
  }
}

MultipleChoice.propTypes = {
  multipleChoice: propTypes.instanceOf(models.MultipleChoice).isRequired,
  status: propTypes.oneOf([ 'question', 'wrong', 'correct' ]).isRequired,
  userAnswer: propTypes.number,
  setUserAnswer: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  multipleChoice: selectors.getCurrentMultipleChoice(state),
  status: selectors.getMultipleChoiceStatus(state),
  userAnswer: selectors.getMultipleChoiceUserAnswer(state)
});

export default connect(
  mapStateToProps,
  {
    setUserAnswer: multipleChoiceActions.setUserAnswer
  }
)(MultipleChoice);
