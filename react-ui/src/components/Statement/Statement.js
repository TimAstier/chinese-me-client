import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import * as models from '../../models';
import { Clickable } from '../Shared';
import { PlayAudioButton, WordModal, NewWordLink } from '../../containers';
import iconYourTurn from '../../images/iconYourTurn.svg';
import findWordsPosition from '../../utils/findWordsPosition';
import isEmpty from 'lodash/isEmpty';

const blinker = keyframes`
  50% { opacity: 0; }
`;

const Wrapper = styled.div`
  width: 550px;
  height: 310px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.08);
  border: solid 2px #dce6eb;
  display: flex;
  flex-direction: column;
  cursor: default;
`;

const ChineseWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: ChineseFont;
	font-size: ${props => props.length > 29 ? '22px' : '30px'};
	font-weight: 900;
	line-height: 1.5;
  flex-wrap: wrap;
  color: #454545;
`;

const L1Wrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans';
  font-size: 18px;
  font-weight: 900;
  line-height: 1.5;
  color: #454545;
  flex-wrap: wrap;
`;

const ControlWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
`;

const PlayAudioWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReadIconWrapper = styled.div`
  font-size: 18px;
  animation: ${blinker} 1s linear infinite;
`;

const ReadMessageWrapper = styled.div`
  font-family: 'Open Sans';
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #55b6ff;
  margin-left: 9px;
`;

const Sentence = styled.span`
  padding-left: ${props => props.padded ? '10px' : '0px'};
  opacity: ${props => props.active ? 1 : 0.3};
  cursor: ${props => props.active || props.dialogMode !== 'explore' ? 'normal' : 'pointer'};
`;

const FormatedSentences = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  max-width: 500px;
  line-height: 1.2;
  text-align: center;
`;

class Statement extends Component {

  renderSentenceWithWords(chineseText) {
    const wordsPosition = findWordsPosition(chineseText, this.props.words);
    if (!isEmpty(wordsPosition)) {
      const { words, positions } = wordsPosition;
      const result = chineseText.split('');
      positions.forEach((p, i) => {
        result[p] = (
          <NewWordLink
            key={i}
            simpChar={result[p]}
            words={words[i]}
          />
        );
      });
      return result;
    }
    return chineseText;
  }

  renderStatement(language) {
    const { sentences, currentSentenceIndex, switchSentence, dialogMode }
      = this.props;
    const segments = [];
    sentences.forEach((s, i) => {
      const active = i === currentSentenceIndex;
      segments.push(
        <Sentence
          key={i}
          padded={i !== 0}
          active={active}
          dialogMode={dialogMode}
          onClick={
            dialogMode !== 'explore' || active ?
            undefined
            : () => switchSentence(s.id)
          }
        >
          {!(dialogMode === 'explore' && language === 'chinese' && active) ?
            s[language]
            : this.renderSentenceWithWords(s.chinese)
          }
        </Sentence>
      );
    });
    return <FormatedSentences>{segments}</FormatedSentences>;
  }

  renderControls() {
    return (
      <ControlWrapper>
        <PlayAudioWrapper>
          <Clickable>
            <PlayAudioButton
              onClick={this.props.isAudioPlaying ?
                () => this.props.stopSentence()
                : () => this.props.playSentence()
              }
            />
          </Clickable>
        </PlayAudioWrapper>
      </ControlWrapper>
    );
  }

  renderReadMessage() {
    return (
      <ControlWrapper>
        <MessageWrapper>
          <ReadIconWrapper>
            <img src={iconYourTurn} alt="your turn" />
          </ReadIconWrapper>
          <ReadMessageWrapper>
            Your turn!
          </ReadMessageWrapper>
        </MessageWrapper>
      </ControlWrapper>
    );
  }

  renderControlWrapper() {
    if (this.props.displayControls) {
      return this.renderControls();
    } else if (this.props.read) {
      return this.renderReadMessage();
    }
    return <ControlWrapper/>;
  }

  render() {
    return (
      <Wrapper>
        <WordModal />
        <ChineseWrapper length={this.props.currentStatementLength}>
          {this.renderStatement('chinese')}
        </ChineseWrapper>
        <L1Wrapper>
          {this.renderStatement('translation')}
        </L1Wrapper>
        {this.renderControlWrapper()}
      </Wrapper>
    );
  }
}

Statement.propTypes = {
  sentences: propTypes.arrayOf(propTypes.instanceOf(models.Sentence)).isRequired,
  words: propTypes.arrayOf(propTypes.instanceOf(models.Word)).isRequired,
  currentSentenceIndex: propTypes.number.isRequired,
  isAudioPlaying: propTypes.bool.isRequired,
  playSentence: propTypes.func.isRequired,
  stopSentence: propTypes.func.isRequired,
  displayControls: propTypes.bool.isRequired,
  read: propTypes.bool.isRequired,
  switchSentence: propTypes.func.isRequired,
  dialogMode: propTypes.string.isRequired,
  currentStatementLength: propTypes.number.isRequired
};

export default Statement;
