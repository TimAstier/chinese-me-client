import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Character } from '../../models';
import { ScreenButton } from '../../containers';
import { Modal } from '../../containers';
import { Icon } from 'semantic-ui-react';

const Wrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
`;

const LabelWrapper = styled.div`
  flex: 1 0 0;
  font-family: 'Open Sans';
  font-size: 26px;
  color: #454545;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const CharacterBoxWrapper = styled.div`
  flex: 3 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CharacterBox = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  background-color: #ffffff;
  border: solid 2px #eaeaea;
  font-size: 140px;
  font-family: 'STHeiTi';
	color: #454545;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 200px;
  height: 60px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 0 8px 0 rgba(74, 144, 226, 0.51);
  border: solid 2px #4990e2;
  font-family: 'Open Sans';
	font-size: 30px;
	text-align: center;
	color: #454545;
  -webkit-appearance: none;
  outline: none;
`;

const Answer = styled.div`
  font-family: 'Open Sans';
  font-size: 35px;
  color: #4990e2;
`;

const FeedbackWrapper = styled.div`
  display: flex;
  width: 200px;
  justify-content: center;
`;

const FeedbackIconWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeedbackMessageWrapper = styled.div`
  flex: 2 0 0;
	font-family: 'Open Sans';
	font-size: 25px;
	color: #959595;
  display: flex;
  justify-content: center;
  align-items: center;
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

  renderInputWrapper() {
    switch (this.props.status) {
      case 'question':
      case 'mistake':
        return (
          <InputWrapper>
            <Input
              type="text"
              value={this.props.userAnswer}
              onChange={this.props.handleChange}
              autoFocus
            />
          </InputWrapper>
        );
      case 'wrong':
      case 'correct':
        return (
          <InputWrapper>
            <Answer>{this.props.character.pinyinNumber}</Answer>
          </InputWrapper>
        );
      default: return null;
    }
  }

  renderCheckWrapper() {
    switch (this.props.status) {
      case 'question':
      case 'mistake':
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
      case 'wrong':
        return <CheckWrapper />;
      case 'correct':
        return (
          <CheckWrapper>
            <FeedbackWrapper>
              <FeedbackIconWrapper>
                <Icon name="thumbs up" color="teal" size="big" />
              </FeedbackIconWrapper>
              <FeedbackMessageWrapper>
                Good job!
              </FeedbackMessageWrapper>
            </FeedbackWrapper>
          </CheckWrapper>
        );
      default:
        return null;
    }
  }

  renderMessage() {
    if (this.props.attemptsLeft > 1) {
      return 'You have ' + this.props.attemptsLeft + ' attempts lefts';
    }
    return 'You have 1 attempt left';
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
                text="Got it"
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
        {this.renderCheckWrapper()}
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
  handleChange: propTypes.func.isRequired
};

export default CharacterPinyin;
