import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Character } from '../../models';
import { ScreenButton } from '../../containers';
import { Modal } from '../../containers';
import iconWrong from '../../images/iconWrong.svg';
import iconCorrect from '../../images/iconCorrect.svg';

const Wrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
`;

const LabelWrapper = styled.div`
  flex-basis: 74px;
  font-family: 'Open Sans';
  font-size: 24px;
	font-weight: 600;
  color: #454545;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const CharacterBoxWrapper = styled.div`
  flex-basis: 190px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const InputWrapper = styled.div`
  flex-basis: 70px;
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

const CharacterBox = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.08);
  border: solid 2px #dce6eb;
  font-size: 100px;
  font-family: 'STKaitiSC';
	color: #454545;
  display: flex;
  justify-content: center;
  align-items: center;
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

const ModalContent = styled.div`
  text-align: center;
  background-color: white;
  color: #454545;
  height: 260px;
  display: flex;
  flex-direction: column;
`;

const ModalTitle = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
	font-family: 'Open Sans';
  font-weight: 600;
	font-size: 30px;
	color: #454545;
`;

const ModalMessage = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans';
	font-size: 25px;
	color: #454545;
`;

const ModalControls = styled.div`
  flex: 2 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class CharacterPinyin extends Component {
  isFinished() {
    const status = this.props.status;
    return status === 'wrong' || status === 'correct';
  }

  renderInputWrapper() {
    const Input = styled.input`
      width: 160px;
      height: 50px;
      border-radius: 10px;
      background-color: ${this.isFinished() ? '#f2f7fa' : '#ffffff'};
      box-shadow: 0 0 8px 0 rgba(85, 182, 255, 0.6);
      border: solid 2px ${this.isFinished() ? '#cdd6db' : '#55b6ff'};
      font-family: 'Open Sans';
    	font-size: 20px;
    	text-align: center;
    	color: #454545;
      -webkit-appearance: none;
      outline: none;
    `;

    // This way of setting autofocus allow the input to be re-focused
    // when the modal is closed. It uses innerRef instead of ref
    // to work with styled-components.
    // It also unfocus the input if the feedback modal is open
    return (
      <InputWrapper>
        <Input
          type="text"
          value={this.props.userAnswer}
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

  renderMessage() {
    if (this.props.attemptsLeft > 1) {
      return 'You can try ' + this.props.attemptsLeft + ' more times before seeing the answer.';
    }
    return 'You have one more try.';
  }

  render() {
    return (
      <Wrapper>
        <Modal open={this.props.openModal} size="small">
          <ModalContent>
            <ModalTitle>Wrong answer</ModalTitle>
            <ModalMessage>{this.renderMessage()}</ModalMessage>
            <ModalControls>
              <ScreenButton
                primary
                text="Try again"
                action={'closeModal'}
              />
            </ModalControls>
          </ModalContent>
        </Modal>
        <LabelWrapper>
          Type the pinyin of this character
        </LabelWrapper>
        <CharacterBoxWrapper>
          <CharacterBox>
            {this.props.character.simpChar}
          </CharacterBox>
        </CharacterBoxWrapper>
        {this.renderInputWrapper()}
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
  status: propTypes.oneOf([
    'question',
    'wrong',
    'correct'
  ]).isRequired,
  attemptsLeft: propTypes.number.isRequired,
  openModal: propTypes.bool.isRequired,
  userAnswer: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
  openFeedbackModal: propTypes.bool.isRequired
};

export default CharacterPinyin;
