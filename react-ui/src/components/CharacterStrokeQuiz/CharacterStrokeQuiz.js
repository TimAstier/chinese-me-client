import React, { Component } from 'react';
import propTypes from 'prop-types';
import HanziWriter from 'hanzi-writer';
import styled from 'styled-components';
import { Character } from '../../models';
import iconCorrect from '../../images/iconCorrect.svg';
import HanziWrapper from '../Character/HanziWrapper';
import Meaning from '../Character/Meaning';
import Pinyin from '../Character/Pinyin';
import hanziWriterConfig from '../../constants/hanziWriterConfig';

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

let hanziRef = null;

// TODO: Improve hanzi-writer implementation (separate)
// Maybe use the timer example (side effect)

class CharacterStrokeQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finished: false
    };
  }

  componentDidMount() {
    if (this.props.character.hanziData) {
      const hanziWriter = new HanziWriter(hanziRef, this.props.character.hanziData, {
        charDataLoader: data => data,
        ...hanziWriterConfig
      });
      hanziWriter.quiz({
        onComplete: () => {
          this.props.strokeQuizCompleted();
          // TODO: move this logic into hanzi-writer saga
          if (this.props.timerStatus === 'running') {
            return null;
          }
          return this.setState({
            finished: true
          });
        }
      });
    }
  }

  render() {
    return (
      <Wrapper>
        {this.props.hideLabel !== true &&
          <LabelWrapper>{!this.state.finished ? 'Your turn!' : ''}</LabelWrapper>
        }
        <HanziWrapper reference={div => {hanziRef = div;}} />
        <Pinyin text={this.props.character.pinyinNumber} />
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
  hideLabel: propTypes.bool
};

export default CharacterStrokeQuiz;
