import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ScreenButton } from '../../containers';
import iconWrong from '../../images/iconWrong.svg';
import iconCorrect from '../../images/iconCorrect.svg';

const Wrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionWrapper = styled.div`
  min-height: 104px;
  max-width: 900px;
  display: flex;
  text-align: center;
  align-items: flex-end;
  font-family: 'STKaitiSC';
  font-size: 30px;
  font-weight: bold;
  line-height: 1.2;
  color: #454545;
`;

const InputWrapper = styled.div`
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const CheckWrapper = styled.div`
  flex-basis: 98px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const AnswerWrapper = styled.div`
  margin-top: 50px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CorrectAnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
`;

const AnswerLabel = styled.div`
  font-family: 'Open Sans';
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.11;
  letter-spacing: 0.9px;
  color: #b2babf;
`;

const Input = styled.input`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: ${props => props.isFinished ? '#f2f7fa' : '#ffffff'};
  box-shadow: 0 0 8px 0 rgba(85, 182, 255, 0.6);
  border: solid 2px ${props => props.isFinsihed ? '#cdd6db' : '#55b6ff'};
  font-family: 'Ubuntu';
  font-size: 30px;
  text-align: center;
  color: #454545;
  -webkit-appearance: none;
  outline: none;
`;

class FreeInput extends Component {
  isFinished() {
    const status = this.props.status;
    return status === 'wrong' || status === 'correct';
  }

  renderInputWrapper() {
    // This way of setting autofocus allow the input to be re-focused
    // when the modal is closed. It uses innerRef instead of ref
    // to work with styled-components.
    // It also unfocus the input if the feedback modal is open
    return (
      <InputWrapper>
        <Input
          isFinished={this.isFinished()}
          type="text"
          value={this.props.userAnswer}
          onChange={this.props.handleChange}
          readOnly={this.isFinished() ? true : undefined}
          innerRef={this.props.openFeedbackModal ?
            undefined
            : input => input && input.focus()
          }
        />
      </InputWrapper>
    );
  }

  renderCheckWrapper() {
    return (
      <CheckWrapper>
        <ScreenButton
          text="Check"
          primary
          action={'checkAnswer'}
          disabled = {this.props.userAnswer === '' ? true : undefined}
        />
      </CheckWrapper>
    );
  }

  renderAnswerWrapper() {
    if (this.props.status === 'correct') {
      return (
        <AnswerWrapper>
          <img src={iconCorrect} alt="icon-correct" />
        </AnswerWrapper>
      );
    }
    return (
      <AnswerWrapper>
        <img src={iconWrong} alt="icon-wrong" />
        <CorrectAnswerWrapper>
          <AnswerLabel>
            {`The correct answer is: "${this.props.correctAnswer}".`}
            <br />
            {this.props.explanation}
          </AnswerLabel>
        </CorrectAnswerWrapper>
      </AnswerWrapper>
    );
  }

  render() {
    return (
      <Wrapper>
        <QuestionWrapper>{this.props.question}</QuestionWrapper>
        {this.renderInputWrapper()}
        {this.isFinished() ?
          this.renderAnswerWrapper()
          : this.renderCheckWrapper()
        }
      </Wrapper>
    );
  }
}

FreeInput.propTypes = {
  question: propTypes.string.isRequired,
  status: propTypes.oneOf([ 'question', 'wrong', 'correct' ]).isRequired,
  userAnswer: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
  openFeedbackModal: propTypes.bool.isRequired,
  correctAnswer: propTypes.string,
  explanation: propTypes.string
};

export default FreeInput;
