import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import OpenQuestionForm from './OpenQuestionForm';
import SelectQuestionForm from './SelectQuestionForm';

const Wrapper = styled.div`
  height: 230px;
  display: flex;
  flex-direction: column;
`;

const QuestionWrapper = styled.div`
  height: 67px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: 'Open Sans';
	font-size: 20px;
	color: #454545;
  margin-bottom: 20px;
`;

class Question extends Component {
  render() {
    return (
      <Wrapper>
        <QuestionWrapper>{ this.props.label }</QuestionWrapper>
        { this.props.choices ?
          <SelectQuestionForm
            onSubmit={ this.props.onSubmit }
            choices={ this.props.choices }
          />
          :
          <OpenQuestionForm
            onSubmit={ this.props.onSubmit }
            date={this.props.date}
          />
        }
      </Wrapper>
    );
  }
}

Question.propTypes = {
  label: propTypes.string.isRequired,
  choices: propTypes.arrayOf(
    propTypes.shape({
      value: propTypes.string,
      label: propTypes.string
    })
  ),
  date: propTypes.bool,
  onSubmit: propTypes.func.isRequired
};

export default Question;
