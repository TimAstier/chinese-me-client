import React, { Component } from 'react';
import propTypes from 'prop-types';
import HanziWriter from 'hanzi-writer';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const LabelWrapper = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: 'Open Sans';
  font-size: 24px;
	font-weight: 600;
  color: #454545;
`;

const HanziWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;

let hanziRef = null;

class CharacterStroke extends Component {

  componentDidMount() {
    const hanziWriter = new HanziWriter(hanziRef, this.props.simpChar, {
      width: 300,
      height: 300,
      showOutline: true,
      showCharacter: false,
      strokeAnimationDuration: 1000,
      delayBetweenStrokes: 0,
      showHintAfterMisses: 1
    });
    hanziWriter.animateCharacter({
      onComplete: () => this.props.strokeAnimationFinished()
    });
  }

  hanziWrapper() {}

  render() {
    let div;
    return (
      <Wrapper>
        <LabelWrapper>Watch how it is written</LabelWrapper>
        <HanziWrapper>
          <div ref={div => {hanziRef = div;}} />
        </HanziWrapper>
      </Wrapper>
    );
  }
}

CharacterStroke.propTypes = {
  simpChar: propTypes.string.isRequired,
  strokeAnimationFinished: propTypes.func.isRequired
};

export default CharacterStroke;