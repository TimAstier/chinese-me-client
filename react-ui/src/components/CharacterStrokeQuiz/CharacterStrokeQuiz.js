import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Character } from '../../models';
import iconCorrect from '../../images/iconCorrect.svg';
import { Hanzi } from '../../containers';
import Meaning from '../Character/Meaning';
import Pinyin from '../Character/Pinyin';
import pinyinize from 'pinyinize';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
`;

const LabelWrapper = styled.div`
  min-height: 35px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: 'Open Sans';
  font-size: 24px;
	font-weight: 600;
  color: #454545;
`;

const IconWrapper = styled.div`
  text-align: center;
  height: 80px;
  padding-top: 20px;
  visibility: ${props => props.hideCheck ? 'hidden' : 'visible'};
`;

class CharacterStrokeQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false
    };
  }

  onQuizComplete() {
    this.props.strokeQuizCompleted();
    if (this.props.timerStatus === 'running') {
      return null;
    }
    return this.setState({
      finished: true
    });
  }

  _label() {
    if (this.state.finished || this.props.watchAgain) {
      return '';
    }
    if (this.props.screenType === 'character/strokeQuiz') {
      return 'Your turn!';
    }
    return 'Write the character!';
  }

  render() {
    return (
      <Wrapper>
        {this.props.hideLabel !== true &&
          <LabelWrapper>
            {this._label()}
          </LabelWrapper>
        }
        <Hanzi
          char={this.props.character.simpChar}
          mode="quiz"
          onQuizComplete={this.onQuizComplete.bind(this)}
        />
        <Pinyin text={pinyinize(this.props.character.pinyinNumber)} />
        <Meaning text={this.props.character.meaning} />
        <IconWrapper hideCheck={!this.state.finished}>
          <img src={iconCorrect} alt="icon-correct" />
        </IconWrapper>
      </Wrapper>
    );
  }
}

CharacterStrokeQuiz.propTypes = {
  character: propTypes.instanceOf(Character).isRequired,
  strokeQuizCompleted: propTypes.func.isRequired,
  timerStatus: propTypes.string.isRequired,
  hideLabel: propTypes.bool,
  watchAgain: propTypes.bool.isRequired,
  screenType: propTypes.string.isRequired
};

export default CharacterStrokeQuiz;
