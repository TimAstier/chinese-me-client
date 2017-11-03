import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Question as QuestionComponent } from '../../components';
import { default as selectQuestionConstants } from '../../constants/selectQuestion';
import { actions as sagaActions } from '../../sagas/actions';

class SelectQuestion extends Component {

  onSubmit(values) {
    return new Promise((resolve, reject) => {
      return this.props.questionAnswered({ values, resolve, reject });
    });
  }

  render() {
    const { label, choices } = selectQuestionConstants[this.props.setting];
    return (
      <QuestionComponent
        label={label}
        choices={choices}
        onSubmit={this.onSubmit.bind(this)}
      />
    );
  }
}

SelectQuestion.propTypes = {
  setting: propTypes.string.isRequired,
  questionAnswered: propTypes.func.isRequired
};

export default connect(
  null,
  {
    questionAnswered: sagaActions.questionAnswered
  }
)(SelectQuestion);
