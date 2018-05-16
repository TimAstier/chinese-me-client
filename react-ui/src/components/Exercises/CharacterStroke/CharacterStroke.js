import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Character } from '../../../models';
import iconCorrect from '../../../images/iconCorrect.svg';
import { Hanzi } from '../../../containers';
import Meaning from '../../Character/Meaning';
import Pinyin from '../../Character/Pinyin';
import pinyinize from 'pinyinize';
import { ErrorBoundary } from '../../Shared';

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

class CharacterStroke extends Component {
  onQuizComplete() {
    this.props.strokeQuizCompleted();
    if (this.props.examInitialized) {
      return null;
    }
    return this.props.setStatus('finished');
  }

  _label() {
    if (this.props.status === 'finished' || this.props.watchAgain) {
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
        <ErrorBoundary>
          <Hanzi
            char={this.props.character.simpChar}
            hanziData={this.props.character.hanziData}
            mode="quiz"
            onQuizComplete={this.onQuizComplete.bind(this)}
          />
        </ErrorBoundary>
        <Pinyin text={pinyinize(this.props.character.pinyinNumber)} />
        <Meaning text={this.props.character.meaning} />
        <IconWrapper hideCheck={this.props.status !== 'finished'}>
          <img src={iconCorrect} alt="icon-correct" />
        </IconWrapper>
      </Wrapper>
    );
  }
}

CharacterStroke.propTypes = {
  character: propTypes.instanceOf(Character).isRequired,
  strokeQuizCompleted: propTypes.func.isRequired,
  examInitialized: propTypes.bool.isRequired,
  hideLabel: propTypes.bool,
  watchAgain: propTypes.bool.isRequired,
  screenType: propTypes.string.isRequired,
  setStatus: propTypes.func.isRequired,
  status: propTypes.string.isRequired
};

export default CharacterStroke;
