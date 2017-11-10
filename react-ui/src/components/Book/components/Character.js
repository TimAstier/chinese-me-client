import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  height: 90px;
  align-items: center;
`;

const CharacterBox = styled.div`
  width: 60px;
  height: 60px;
  background-color: #ffffff;
  border: solid 2px #FD5356;
  font-size: 40px;
  font-family: 'STKaitiSC';
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pinyin = styled.div`
  padding-left: 10px;
`;

class Character extends Component {

  render() {
    return (
      <Wrapper>
        <CharacterBox>{this.props.simpChar}</CharacterBox>
        <Pinyin><b>{this.props.pinyinNumber}</b></Pinyin>
      </Wrapper>
    );
  }
}

Character.propTypes = {
  simpChar: propTypes.string.isRequired,
  pinyinNumber: propTypes.string.isRequired
};

export default Character;
