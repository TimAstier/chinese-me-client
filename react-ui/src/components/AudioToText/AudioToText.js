import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { WordBox } from '../../containers';

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

class AudioToText extends Component {

  renderWordBoxes() {
    return this.props.words.map((w, i) => {
      return (
        <WordBox
          key={i}
          index={i}
        />
      );
    });
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
      </Wrapper>
    );
  }
}

AudioToText.propTypes = {
  words: propTypes.array.isRequired,
  currentBoxIndex: propTypes.number.isRequired
};

export default AudioToText;
