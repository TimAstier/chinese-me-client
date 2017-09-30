import React, { Component } from 'react';
import propTypes from 'prop-types';
import HanziWriter from 'hanzi-writer';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const HanziWrapper = styled.div`
  padding-top: 50px;
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
