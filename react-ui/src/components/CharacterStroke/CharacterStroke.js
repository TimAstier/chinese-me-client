import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Character } from '../../models';
import Meaning from '../Character/Meaning';
import Pinyin from '../Character/Pinyin';
import pinyinize from 'pinyinize';
import { HanziWrapper } from '../../containers';

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

class CharacterStroke extends Component {

  render() {
    return (
      <Wrapper>
        <LabelWrapper>Watch:</LabelWrapper>
        <HanziWrapper
          char={this.props.character.simpChar}
          mode="stroke"
        />
        <Pinyin text={pinyinize(this.props.character.pinyinNumber)} />
        <Meaning text={this.props.character.meaning} />
      </Wrapper>
    );
  }
}

CharacterStroke.propTypes = {
  character: propTypes.instanceOf(Character).isRequired
};

export default CharacterStroke;
