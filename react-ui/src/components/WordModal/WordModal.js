import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Modal } from '../.';
import { Word } from '../../models';
import styled from 'styled-components';
import pinyinize from 'pinyinize';

const Wrapper = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
`;

const CharacterWrapper = styled.div`
  min-height: 110px;
  padding-left: 40px;
  font-family: ChineseFont;
	font-size: 70px;
	font-weight: bold;
	color: #454545;
  display: flex;
  align-items: flex-end;
`;

const PinyinWrapper = styled.div`
  min-height: 50px;
  padding-left: 40px;
  display: flex;
  align-items: center;
  font-family: 'STKaitiSC';
	font-size: 25px;
	font-weight: bold;
	line-height: 1.0;
	color: #7f8c94;
  font-style: italic;
  border-bottom: solid 2px #e3eef3;
`;

const MeaningsWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 32px;
  overflow-y: scroll;
`;

const MeaningItem = styled.div`
  display: flex;
  min-height: 35px;
  margin-bottom: 10px;
`;

const MeaningNumber = styled.div`
  width: 26px;
  height: 26px;
  background-color: #55b6ff;
  border-radius: 13px;
  font-family: 'Open Sans';
	font-size: 16px;
	color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MeaningText = styled.div`
  font-family: 'Open Sans';
  max-width: 500px;
  font-size: 18px;
  line-height: 1.3;
  color: #7f8c94;
  padding-left: 10px;
`;


class WordModal extends Component {
  renderMeanings() {
    const array = this.props.word.get('meanings').map((m, i) => {
      return (
        <MeaningItem key={i}>
          <MeaningNumber>{i + 1}</MeaningNumber>
          <MeaningText>{m}</MeaningText>
        </MeaningItem>
      );
    });
    return (
      <MeaningsWrapper>
        {array}
      </MeaningsWrapper>
    );
  }

  render() {
    const { open } = this.props;
    return (
      <Modal
        open={open}
        closeIcon="close"
        size="small"
        handleClose={this.props.handleClose}
      >
        {this.props.word &&
          <Wrapper>
            <CharacterWrapper>
              {this.props.word.get('chinese')}
            </CharacterWrapper>
            <PinyinWrapper>
              {pinyinize(this.props.word.get('pinyin'))}
            </PinyinWrapper>
            {this.renderMeanings()}
          </Wrapper>
        }
      </Modal>
    );
  }
}

WordModal.propTypes = {
  open: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired,
  word: propTypes.instanceOf(Word)
};

export default WordModal;
