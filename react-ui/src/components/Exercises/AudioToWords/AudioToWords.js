import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { WordBoxResult } from './../..';
import { WordBox } from '../../../containers';
import { List } from 'immutable';
import * as models from '../../../models';
import { ScreenButton } from '../../../containers';
import { Wrapper, CheckWrapper } from '../Shared';

const GuidelineWrapper = styled.div`
  height: 171px;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.5;
  color: #b2babf;
  font-family: 'Open Sans';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const MainGuideline = styled.div`
  color: #454545;
`;

const SecondaryGuideline = styled.div`
  color: #b2babf;
`;

const WordBoxesWrapper = styled.div`
  height: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class AudioToWords extends Component {
  renderWordBoxes() {
    return this.props.words.map((w, i) => {
      if (this.props.results.get(i) !== undefined) {
        return (
          <WordBoxResult
            key={i}
            word={w}
            success={this.props.results.getIn([i, 'success'])}
            userAnswer={this.props.results.getIn([i, 'userAnswer'])}
          />
        );
      }
      return (
        <WordBox
          key={i}
          index={i}
          word={w}
          userAnswer={this.props.userAnswer}
          currentBoxIndex={this.props.currentBoxIndex}
        />
      );
    });
  }

  renderCheckWrapper() {
    return (
      <CheckWrapper>
        <ScreenButton
          text="Check"
          primary
          action={'checkAnswer'}
          disabled = {this.props.userAnswer === '' ? true : undefined}
        />
      </CheckWrapper>
    );
  }

  render() {
    return (
      <Wrapper>
        <GuidelineWrapper>
          <MainGuideline>
            Write the pinyin, with tones, of the words you hear
          </MainGuideline>
          <SecondaryGuideline>
            (If there is tone sandhi, write the actual tone that you hear)
          </SecondaryGuideline>
        </GuidelineWrapper>
        <WordBoxesWrapper>{this.renderWordBoxes()}</WordBoxesWrapper>
        {this.props.status !== 'finished' && this.renderCheckWrapper()}
      </Wrapper>
    );
  }
}

AudioToWords.propTypes = {
  words: propTypes.arrayOf(propTypes.instanceOf(models.Word)).isRequired,
  currentBoxIndex: propTypes.number.isRequired,
  results: propTypes.instanceOf(List).isRequired,
  status: propTypes.oneOf(['question', 'finished']).isRequired,
  userAnswer: propTypes.string.isRequired
};

export default AudioToWords;
