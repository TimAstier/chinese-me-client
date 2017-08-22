import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import * as models from '../../models';
import { Clickable } from '../Shared';
import { PlayAudioButton } from '../../containers';
import iconYourTurn from '../../images/iconYourTurn.svg';

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
`;

const ChineseWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: 'STKaitiSC';
	font-size: 22px;
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
  font-size: 20px;
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
  :hover {
    opacity: ${props => props.dialogMode === 'explore' ? 1 : 'none'};
  }
`;

const FormatedSentences = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  line-height: 1.2;
  text-align: center;
`;

class Statement extends Component {

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
          {s[language]}
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
        <ChineseWrapper>
          {this.renderStatement('chinese')}
        </ChineseWrapper>
        <L1Wrapper>
          {this.renderStatement('english')}
        </L1Wrapper>
        {this.renderControlWrapper()}
      </Wrapper>
    );
  }
}

Statement.propTypes = {
  sentences: propTypes.arrayOf(propTypes.instanceOf(models.Sentence)).isRequired,
  currentSentenceIndex: propTypes.number.isRequired,
  isAudioPlaying: propTypes.bool.isRequired,
  playSentence: propTypes.func.isRequired,
  stopSentence: propTypes.func.isRequired,
  displayControls: propTypes.bool.isRequired,
  read: propTypes.bool.isRequired,
  switchSentence: propTypes.func.isRequired,
  dialogMode: propTypes.string.isRequired
};

export default Statement;
