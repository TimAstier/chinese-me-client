import React, { Component } from 'react';
import propTypes from 'prop-types';
import HanziWriter from 'hanzi-writer';
import styled from 'styled-components';
import { Character } from '../../models';
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

let hanziRef = null;

class CharacterStroke extends Component {

  componentDidMount() {
    if (this.props.character.hanziData) {
      const hanziWriter = new HanziWriter(hanziRef, this.props.character.hanziData, {
        charDataLoader: data => data,
        ...hanziWriterConfig
      });
      hanziWriter.animateCharacter({
        onComplete: () => this.props.strokeAnimationFinished()
      });
    }
  }

  render() {
    return (
      <Wrapper>
        <LabelWrapper>Watch:</LabelWrapper>
        <HanziWrapper reference={div => {hanziRef = div;}} />
        <Pinyin text={this.props.character.pinyinNumber} />
        <Meaning text={this.props.character.meaning} />
      </Wrapper>
    );
  }
}

CharacterStroke.propTypes = {
  character: propTypes.instanceOf(Character).isRequired,
  strokeAnimationFinished: propTypes.func.isRequired
};

export default CharacterStroke;
