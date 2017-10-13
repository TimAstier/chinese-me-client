import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ScreenButton } from '../.';

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
`;

const ButtonsWrapper = styled.div`
  flex-grow: 1;
  margin-top: 25px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
`;

class ClosedQuestion extends Component {

  render() {
    return (
      <Wrapper>
        <QuestionWrapper>
          {this.props.label}
        </QuestionWrapper>
        <ButtonsWrapper>
          <ScreenButton
            width={300}
            text={this.props.choiceA}
            onClick={this.props.onClick}
            data={'A'}
          />
          <ScreenButton
            width={300}
            text={this.props.choiceB}
            onClick={this.props.onClick}
            data={'B'}
          />
        </ButtonsWrapper>
      </Wrapper>
    );
  }
}

ClosedQuestion.propTypes = {
  label: propTypes.string.isRequired,
  choiceA: propTypes.string.isRequired,
  choiceB: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired
};

export default ClosedQuestion;
