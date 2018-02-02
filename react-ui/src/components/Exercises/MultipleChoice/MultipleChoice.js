import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import ChoiceBox from './ChoiceBox/ChoiceBox';
import iconWrong from '../../../images/iconWrong.svg';
import iconCorrect from '../../../images/iconCorrect.svg';
import createArrayOfRandomIntegers from '../../../utils/createArrayOfRandomIntegers';
import { Wrapper, QuestionWrapper } from '../Shared';

const ChoicesWrapper = styled.div`
  min-height: 250px;
  margin-top: 22px;
  display: flex;
  flex-direction: column;
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

// const CorrectAnswerWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin-left: 5px;
// `;
//
// const AnswerLabel = styled.div`
//   font-family: 'Open Sans';
//   font-size: 16px;
//   font-weight: 600;
//   color: #b2babf;
// `;
//
// const Explanation = styled.div`
//   max-width: 330px;
//   margin-top: 10px;
// 	font-family: 'Open Sans';
// 	font-size: 16px;
// 	line-height: 1.5;
// 	color: #454545;
// `;

class MultipleChoice extends Component {
  constructor(props) {
    super(props);
    // Create a randomized array of integers used to display choices.
    // This allows to display choices in a random order every time
    // this component is rendered, while keeping the same display if the
    // component re-renders.
    this.state = {
      randomIntegers: createArrayOfRandomIntegers(props.choices.length - 1)
    };
  }

  componentWillReceiveProps(nextProps) {
    // Create a new randomIntegers state for a new question.
    // This happens when several multipleChoice exercises are tested in a row.
    if (this.props.question !== nextProps.question) {
      this.setState({
        randomIntegers: createArrayOfRandomIntegers(nextProps.choices.length - 1)
      });
    }
  }

  isFinished() {
    const status = this.props.status;
    return status === 'wrong' || status === 'correct';
  }

  renderAnswerWrapper() {
    if (!this.isFinished()) {
      return <AnswerWrapper />;
    }
    return (
      <AnswerWrapper>
        <AnswerIconWrapper>
          <img
            src={this.props.status === 'correct' ? iconCorrect : iconWrong}
            alt={this.props.status === 'correct' ? 'icon-correct' : 'icon-wrong'}
          />
        </AnswerIconWrapper>
        {/* { this.props.status === 'wrong' && this.props.explanation &&
          <CorrectAnswerWrapper>
            <AnswerLabel>Explanation:</AnswerLabel>
            <Explanation>{this.props.explanation}</Explanation>
          </CorrectAnswerWrapper>
        } */}
      </AnswerWrapper>
    );
  }

  renderChoices() {
    // Note: The correct answer is always the first one in the choices array
    const choices = this.props.choices.map((choice, i) => {
      const onClick = () => {
        this.props.setUserChoice(i, false);
        this.props.checkAnswer();
      };
      return (
        <ChoiceBox
          key={i}
          onClick={onClick}
          label={choice}
          focused={i === this.props.userChoice}
          disabled={this.props.status !== 'question' && i !== this.props.userChoice}
          wrong={this.props.status !== 'question' && i === this.props.userChoice && i !== 0}
          correct={this.props.status !== 'question' && i === 0}
        />
      );
    });
    const shuffledChoices = this.state.randomIntegers.map(e => choices[e]);
    return shuffledChoices;
  }

  render() {
    return (
      <Wrapper>
        <QuestionWrapper>{this.props.question}</QuestionWrapper>
        <ChoicesWrapper>{this.renderChoices()}</ChoicesWrapper>
        {this.renderAnswerWrapper()}
      </Wrapper>
    );
  }
}

MultipleChoice.propTypes = {
  question: propTypes.string.isRequired,
  choices: propTypes.array.isRequired,
  status: propTypes.oneOf([ 'question', 'wrong', 'correct' ]).isRequired,
  userChoice: propTypes.number,
  setUserChoice: propTypes.func.isRequired,
  // explanation: propTypes.string.isRequired,
  checkAnswer: propTypes.func.isRequired
};

export default MultipleChoice;
