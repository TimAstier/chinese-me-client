import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Character } from '../../../models';
import { ScreenButton, HintModal, Hanzi } from '../../../containers';
import iconWrong from '../../../images/iconWrong.svg';
import iconCorrect from '../../../images/iconCorrect.svg';
import Meaning from '../../Character/Meaning';
import pinyinize from 'pinyinize';
import { Wrapper, CheckWrapper } from '../Shared';

const LabelWrapper = styled.div`
  min-height: 35px;
  font-family: 'Open Sans';
  font-size: 24px;
	font-weight: 600;
  color: #454545;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const InputWrapper = styled.div`
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const AnswerWrapper = styled.div`
  min-height: 120px;
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
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.11;
  letter-spacing: 0.9px;
  color: #b2babf;
`;

const PinyinNumber = styled.div`
  margin-top: 10px;
  font-family: 'Open Sans';
  font-size: 26px;
  font-weight: bold;
  letter-spacing: 2.6px;
  color: #55b6ff;
`;

const Input = styled.input`
  width: 160px;
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

class CharacterPinyin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalTitle: '',
      modalMessage: ''
    };
  }

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
          value={
            this.props.status === 'correct'
            ? pinyinize(this.props.userAnswer.replace(/\s+/g, ''))
              : this.props.userAnswer
          }
          onChange={this.props.handleChange}
          innerRef={this.props.openFeedbackModal ?
            undefined
            : input => input && input.focus()
          }
          readOnly={this.isFinished() ? true : undefined}
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
          <AnswerIconWrapper>
            <img src={iconCorrect} alt="icon-correct" />
          </AnswerIconWrapper>
        </AnswerWrapper>
      );
    }
    return (
      <AnswerWrapper>
        <AnswerIconWrapper>
          <img src={iconWrong} alt="icon-wrong" />
        </AnswerIconWrapper>
        <CorrectAnswerWrapper>
          <AnswerLabel>Correct answer</AnswerLabel>
          <PinyinNumber>{this.props.character.pinyinNumber}</PinyinNumber>
        </CorrectAnswerWrapper>
      </AnswerWrapper>
    );
  }

  _renderQuestion() {
    if (this.props.status === 'question') {
      return 'Type the pinyin!';
    }
    return '';
  }

  render() {
    return (
      <Wrapper>
        <HintModal/>
        {this.props.hideLabel !== true &&
          <LabelWrapper>
            {this._renderQuestion()}
          </LabelWrapper>
        }
        <Hanzi
          char={this.props.character.simpChar}
          mode="static"
        />
        {this.renderInputWrapper()}
        <Meaning text={this.props.character.meaning} />
        {this.isFinished() ?
          this.renderAnswerWrapper()
          : this.renderCheckWrapper()
        }
      </Wrapper>
    );
  }
}

CharacterPinyin.propTypes = {
  character: propTypes.instanceOf(Character).isRequired,
  status: propTypes.oneOf([ 'question', 'wrong', 'correct' ]).isRequired,
  userAnswer: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
  openFeedbackModal: propTypes.bool.isRequired,
  hideLabel: propTypes.bool
};

export default CharacterPinyin;
