import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ClosedQuestion as ClosedQuestionComponent } from '../../../components';
import { default as closedQuestionConstants } from '../../../constants/closedQuestion';
import { actions as sagaActions } from '../../../sagas/actions';

class ClosedQuestion extends Component {
  handleClick(e) {
    return this.props.questionAnswered(
      this.props.setting,
      e.target.getAttribute('data'),
      undefined // no reduxFormFcs since this is not built with redux-form
    );
  }

  render() {
    const { label, choiceA, choiceB } =
      closedQuestionConstants[this.props.setting];
    return (
      <ClosedQuestionComponent
        onClick={this.handleClick.bind(this)}
        label={label}
        choiceA={choiceA}
        choiceB={choiceB}
      />
    );
  }
}

ClosedQuestion.propTypes = {
  setting: propTypes.string.isRequired,
  questionAnswered: propTypes.func.isRequired
};

export default connect(
  null,
  {
    questionAnswered: sagaActions.questionAnswered
  }
)(ClosedQuestion);
