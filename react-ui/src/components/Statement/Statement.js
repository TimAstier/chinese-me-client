import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import * as models from '../../models';
import { Clickable } from '../Shared';

const Wrapper = styled.div`
  width: 550px;
  height: 320px;
  border-radius: 15px;
  background-color: #ffffff;
  border: solid 2px #eaeaea;
  display: flex;
  flex-direction: column;
`;

const ChineseWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: 'STHeiTi';
  font-size: 25px;
  color: #454545;
  flex-wrap: wrap;
`;

const L1Wrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Open Sans';
  font-size: 20px;
  color: #959595;
  flex-wrap: wrap;
`;

const ControlWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
`;

const LeftChevronWrapper = styled.div`
  flex: 2 0 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const RightChevronWrapper = styled.div`
  flex: 2 0 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const PlayAudioWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sentence = styled.span`
  padding-left: ${props => props.padded ? '10px' : '0px'};
  opacity: ${props => props.active ? 1 : 0.3};
`;

const FormatedSentences = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  line-height: 1.2;
  text-align: center;
`;

const renderChinese = (sentences, currentSentenceIndex) => {
  const chinese = [];
  sentences.forEach((s, i) => {
    chinese.push(
      <Sentence
        key={i}
        padded={i !== 0}
        active={i === currentSentenceIndex}
      >
        {s.chinese}
      </Sentence>
    );
  });
  return <FormatedSentences>{chinese}</FormatedSentences>;
};

const renderL1 = (sentences, currentSentenceIndex) => {
  const l1 = [];
  sentences.forEach((s, i) => {
    l1.push(
      <Sentence
        key={i}
        padded={i !== 0}
        active={i === currentSentenceIndex}
      >
        {s.english}
      </Sentence>
    );
  });
  return <FormatedSentences>{l1}</FormatedSentences>;
};

class Statement extends Component {
  renderControls() {
    return (
      <ControlWrapper>
        <LeftChevronWrapper>
          {this.props.currentSentenceIndex > 0 &&
            <Clickable>
              <Icon
                name="chevron left"
                size="big"
                color="teal"
                onClick={this.props.previousSentence}
              />
            </Clickable>
          }
        </LeftChevronWrapper>
        <PlayAudioWrapper>
          <Clickable>
            {!this.props.isAudioPlaying ?
              <Icon
                name="video play outline"
                size="huge"
                color="teal"
                onClick={() => this.props.playSentence()}
              />
              :
              <Icon
                name="stop circle outline"
                size="huge"
                color="teal"
                onClick={() => this.props.stopSentence()}
              />
            }
          </Clickable>
        </PlayAudioWrapper>
        <RightChevronWrapper>
          {this.props.currentSentenceIndex < this.props.sentences.length - 1 &&
            <Clickable>
              <Icon
                name="chevron right"
                size="big"
                color="teal"
                onClick={this.props.nextSentence}
              />
            </Clickable>
          }
        </RightChevronWrapper>
      </ControlWrapper>
    );
  }

  render() {
    return (
      <Wrapper>
        <ChineseWrapper>
          {renderChinese(this.props.sentences, this.props.currentSentenceIndex)}
        </ChineseWrapper>
        <L1Wrapper>
          {renderL1(this.props.sentences, this.props.currentSentenceIndex)}
        </L1Wrapper>
        { this.props.displayControls
          ? this.renderControls()
            : <ControlWrapper/>
        }
      </Wrapper>
    );
  }
}

Statement.propTypes = {
  sentences: propTypes.arrayOf(propTypes.instanceOf(models.Sentence)).isRequired,
  currentSentenceIndex: propTypes.number.isRequired,
  isAudioPlaying: propTypes.bool.isRequired,
  nextSentence: propTypes.func.isRequired,
  previousSentence: propTypes.func.isRequired,
  playSentence: propTypes.func.isRequired,
  stopSentence: propTypes.func.isRequired,
  displayControls: propTypes.bool.isRequired
};

export default Statement;
