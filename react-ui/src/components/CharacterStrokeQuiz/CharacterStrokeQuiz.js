import React, { Component } from 'react';
import propTypes from 'prop-types';
import HanziWriter from 'hanzi-writer';
import styled from 'styled-components';
import { Character } from '../../models';
import iconCorrect from '../../images/iconCorrect.svg';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
`;

const LabelWrapper = styled.div`
  min-height: 60px;
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

const HanziWrapper = styled.div`
  margin-top: 20px;
  width: 200px;
  min-height: 200px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.08);
  border: solid 2px #dce6eb;
  font-size: 100px;
  font-family: 'STKaitiSC';
	color: #454545;
  display: flex;
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
        width: 200,
        height: 200,
        showOutline: true,
        showCharacter: false,
        strokeAnimationDuration: 600,
        delayBetweenStrokes: 0,
        showHintAfterMisses: 1
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
    let div;
    return (
      <Wrapper>
        <LabelWrapper>{!this.state.finished ? 'Your turn!' : ''}</LabelWrapper>
        <HanziWrapper>
          <div ref={div => {hanziRef = div;}} />
        </HanziWrapper>
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
  timerStatus: propTypes.string.isRequired
};

export default CharacterStrokeQuiz;
