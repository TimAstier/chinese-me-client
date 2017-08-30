import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { WordBoxResult } from './..';
import { WordBox } from '../../containers';
import { List } from 'immutable';
import { ScreenButton } from '../../containers';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

const CheckWrapper = styled.div`
  flex-basis: 98px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

class AudioToText extends Component {
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
            Write the pinyin, with tone, of the words you hear
          </MainGuideline>
          <SecondaryGuideline>
            (Write the original tone of each word without tone sandhi)
          </SecondaryGuideline>
        </GuidelineWrapper>
        <WordBoxesWrapper>{this.renderWordBoxes()}</WordBoxesWrapper>
        {this.props.status !== 'finished' && this.renderCheckWrapper()}
      </Wrapper>
    );
  }
}

AudioToText.propTypes = {
  words: propTypes.array.isRequired,
  currentBoxIndex: propTypes.number.isRequired,
  results: propTypes.instanceOf(List).isRequired,
  status: propTypes.string.isRequired,
  userAnswer: propTypes.string.isRequired
};

export default AudioToText;
