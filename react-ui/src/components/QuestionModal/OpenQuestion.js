import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import OpenQuestionForm from './OpenQuestionForm';

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

class OpenQuestion extends Component {

  render() {
    return (
      <Wrapper>
        <QuestionWrapper>{ this.props.label }</QuestionWrapper>
        <OpenQuestionForm onSubmit={this.props.onSubmit}/>
      </Wrapper>
    );
  }
}

OpenQuestion.propTypes = {
  label: propTypes.string.isRequired,
  onSubmit: propTypes.func.isRequired
};

export default OpenQuestion;
