import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ChoiceBox } from '../.';
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
  display: flex;
  align-items: flex-end;
  font-family: 'STKaitiSC';
  font-size: 30px;
  font-weight: bold;
  line-height: 1.2;
  color: #454545;
`;

const ChoicesWrapper = styled.div`
  min-height: 250px;
  margin-top: 22px;
  display: flex;
  flex-direction: column;
`;

const CheckWrapper = styled.div`
  flex-basis: 112px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const AnswerWrapper = styled.div`
  flex-basis: 120px;
  display: flex;
  justify-content: center;
  align-items: stretch;
`;

const AnswerIconWrapper = styled.div`
  align-self: flex-end;
`;

const CorrectAnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5px;
`;

const AnswerLabel = styled.div`
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: 600;
  color: #b2babf;
`;

const Explanation = styled.div`
  width: 330px;
  margin-top: 10px;
	font-family: 'Open Sans';
	font-size: 16px;
	line-height: 1.5;
	color: #454545;

`;

class MultipleChoice extends Component {

  isFinished() {
    const status = this.props.status;
    return status === 'wrong' || status === 'correct';
  }

  renderCheckWrapper() {
    return (
      <CheckWrapper>
        <ScreenButton
          text="Check"
          primary
          action={'checkAnswer'}
          disabled = {this.props.userAnswer === null}
        />
      </CheckWrapper>
    );
  }

  // TODO: DRY (same in characterPinyin)
  renderAnswerWrapper() {
    return (
      <AnswerWrapper>
        <AnswerIconWrapper>
          <img
            src={this.props.status === 'correct' ? iconCorrect : iconWrong}
            alt={this.props.status === 'correct' ? 'icon-correct' : 'icon-wrong'}
          />
        </AnswerIconWrapper>
        <CorrectAnswerWrapper>
          <AnswerLabel>Explanation:</AnswerLabel>
          <Explanation>{this.props.explanation}</Explanation>
        </CorrectAnswerWrapper>
      </AnswerWrapper>
    );
  }

  renderChoices() {
    return this.props.choices.map((choice, i) => {
      const onClick = () => this.props.setUserAnswer(i);
      return (
        <ChoiceBox
          key={i}
          onClick={onClick}
          label={choice}
          setUserAnswer={this.props.setUserAnswer}
          focused={i === this.props.userAnswer}
          disabled={this.props.status !== 'question' && i !== this.props.userAnswer}
          wrong={this.props.status !== 'question' && i === this.props.userAnswer && i !== this.props.correctAnswer}
          correct={this.props.status !== 'question' && i === this.props.correctAnswer}
        />
      );
    });
  }

  render() {
    return (
      <Wrapper>
        <QuestionWrapper>{this.props.question}</QuestionWrapper>
        <ChoicesWrapper>{this.renderChoices()}</ChoicesWrapper>
        {this.isFinished() ?
          this.renderAnswerWrapper()
          : this.renderCheckWrapper()
        }
      </Wrapper>
    );
  }
}

MultipleChoice.propTypes = {
  question: propTypes.string.isRequired,
  choices: propTypes.array.isRequired,
  status: propTypes.oneOf([ 'question', 'wrong', 'correct' ]).isRequired,
  userAnswer: propTypes.number,
  setUserAnswer: propTypes.func.isRequired,
  correctAnswer: propTypes.oneOf([0, 1, 2]).isRequired,
  explanation: propTypes.string.isRequired
};

export default MultipleChoice;
