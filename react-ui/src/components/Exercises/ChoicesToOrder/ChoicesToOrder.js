import React, { Component } from 'react';
import { List } from 'immutable';
import propTypes from 'prop-types';
import { ScreenButton } from '../../../containers';
import styled from 'styled-components';
import { Wrapper, CheckWrapper, QuestionWrapper } from '../Shared';
import iconWrong from '../../../images/iconWrong.svg';
import iconCorrect from '../../../images/iconCorrect.svg';

const DropArea = styled.div`
  min-height: 120px;
  max-width: 550px;
  width: 95%;
  background-color: lightgrey;
  padding: 20px 20px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ChoicesArea = styled.div`
  min-height: 120px;
  max-width: 550px;
  width: 95%;
  background-color: lightgrey;
  padding: 20px 20px;
  display: flex;
  flex-wrap: wrap;
`;

const Block = styled.div`
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  font-family: ChineseFont;
  font-size: 25px;
  height: 35px;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: 10px;
  border-radius: 3px;
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
`;

const BlockPlaceholder = styled.div`
  display: flex;
  background-color: grey;
  justify-content: center;
  align-items: center;
  font-family: ChineseFont;
  color: grey;
  font-size: 25px;
  height: 35px;
  padding-right: 20px;
  padding-left: 20px;
  margin-right: 10px;
  border-radius: 3px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome and Opera */
`;

const AnswerWrapper = styled.div`
  margin-top: 10px;
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

class ChoicesToOrder extends Component {
  isFinished() {
    const status = this.props.status;
    return status === 'wrong' || status === 'correct';
  }

  _renderUsedChoices() {
    return this.props.usedChoices.map(choice => {
      return (
        <Block
          key={`used${choice.index}`}
          onClick={() => this.props.handleBlockClick(choice.index)}
        >
          {choice.value}
        </Block>
      );
    });
  }

  _renderUnusedChoices() {
    return this.props.choices.map((choice, i) => {
      if (this.props.indexes.indexOf(i) !== -1) {
        return (
          <BlockPlaceholder
            key={i}
          >
            {choice}
          </BlockPlaceholder>
        );
      }
      return (
        <Block
          key={i}
          onClick={() => this.props.handleBlockClick(i)}
        >
          {choice}
        </Block>
      );
    });
  }

  renderCheckWrapper() {
    return (
      <CheckWrapper>
        <ScreenButton
          text="Check"
          primary
          action={'checkAnswer'}
          disabled={this.props.userAnswer === '' ? true : undefined}
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
        <img src={iconWrong} alt="icon-wrong" height={84} width={84}/>
        <CorrectAnswerWrapper>
          <AnswerLabel>
            {`The correct answer is: "${this.props.correctAnswer}"`}
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
        <QuestionWrapper>Find the correct order:</QuestionWrapper>
        <DropArea>
          {this._renderUsedChoices()}
        </DropArea>
        <ChoicesArea>
          {this._renderUnusedChoices()}
        </ChoicesArea>
        { this.isFinished() ?
          this.renderAnswerWrapper()
          : this.renderCheckWrapper()
        }
      </Wrapper>
    );
  }
}

ChoicesToOrder.propTypes = {
  handleBlockClick: propTypes.func.isRequired,
  usedChoices: propTypes.array.isRequired,
  indexes: propTypes.instanceOf(List).isRequired,
  choices: propTypes.array.isRequired,
  userAnswer: propTypes.string.isRequired,
  correctAnswer: propTypes.string,
  explanation: propTypes.string,
  status: propTypes.string.isRequired
};

export default ChoicesToOrder;
