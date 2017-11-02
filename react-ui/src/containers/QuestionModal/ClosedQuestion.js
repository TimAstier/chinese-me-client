import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ClosedQuestion as ClosedQuestionComponent } from '../../components';
import { default as closedQuestionConstants } from '../../constants/closedQuestion';
import { actions as sagaActions } from '../../sagas/actions';

class ClosedQuestion extends Component {

  handleClick(e) {
    return this.props.questionAnswered(e.target.getAttribute('data'));
  }

  render() {
    return (
      <ClosedQuestionComponent
        onClick={this.handleClick.bind(this)}
        label={closedQuestionConstants[this.props.setting].label}
        choiceA={closedQuestionConstants[this.props.setting].choiceA}
        choiceB={closedQuestionConstants[this.props.setting].choiceB}
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
