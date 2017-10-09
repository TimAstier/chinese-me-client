import React, { Component } from 'react';
import propTypes from 'prop-types';
import HanziWriter from 'hanzi-writer';
import styled from 'styled-components';
import { Character } from '../../models';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
`;

const LabelWrapper = styled.div`
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: 'Open Sans';
  font-size: 24px;
	font-weight: 600;
  color: #454545;
`;

const HanziWrapper = styled.div`
  min-height: 250px;
  width: 250px;
  display: flex;
`;

let hanziRef = null;

class CharacterStroke extends Component {

  componentDidMount() {
    if (this.props.character.hanziData) {
      const hanziWriter = new HanziWriter(hanziRef, this.props.character.hanziData, {
        charDataLoader: data => data,
        width: 250,
        height: 250,
        showOutline: true,
        showCharacter: false,
        strokeAnimationDuration: 600,
        delayBetweenStrokes: 0,
        showHintAfterMisses: 1
      });
      hanziWriter.animateCharacter({
        onComplete: () => this.props.strokeAnimationFinished()
      });
    }
  }

  render() {
    let div;
    return (
      <Wrapper>
        <LabelWrapper>Watch:</LabelWrapper>
        <HanziWrapper>
          <div ref={div => {hanziRef = div;}} />
        </HanziWrapper>
      </Wrapper>
    );
  }
}

CharacterStroke.propTypes = {
  character: propTypes.instanceOf(Character).isRequired,
  strokeAnimationFinished: propTypes.func.isRequired
};

export default CharacterStroke;
