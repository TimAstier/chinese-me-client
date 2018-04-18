import React, { Component } from 'react';
import propTypes from 'prop-types';
import SelectQuestionForm from './SelectQuestionForm';
import LabelWrapper from './LabelWrapper';

class SelectQuestion extends Component {
  render() {
    return (
      <div>
        <LabelWrapper>{ this.props.label }</LabelWrapper>
        <SelectQuestionForm
          onSubmit={ this.props.onSubmit }
          choices={ this.props.choices }
        />
      </div>
    );
  }
}

SelectQuestion.propTypes = {
  label: propTypes.string.isRequired,
  choices: propTypes.arrayOf(
    propTypes.shape({
      value: propTypes.string,
      label: propTypes.string
    })
  ).isRequired,
  onSubmit: propTypes.func.isRequired
};

export default SelectQuestion;
