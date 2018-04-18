import React, { Component } from 'react';
import propTypes from 'prop-types';
import OpenQuestionForm from './OpenQuestionForm';
import LabelWrapper from './LabelWrapper';

class OpenQuestion extends Component {
  render() {
    return (
      <div>
        <LabelWrapper>{ this.props.label }</LabelWrapper>
        <OpenQuestionForm
          onSubmit={ this.props.onSubmit }
          date={this.props.date }
        />
      </div>
    );
  }
}

OpenQuestion.propTypes = {
  label: propTypes.string.isRequired,
  date: propTypes.bool.isRequired,
  onSubmit: propTypes.func.isRequired
};

export default OpenQuestion;
