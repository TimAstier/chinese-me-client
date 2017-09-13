import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const NumberWrapper = styled.div`
  width: 30px;
`;

const SentenceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Pinyin = styled.span`
  font-weight: bold;
`;

const Translation = styled.span`
  font-style: italic;
`;

class Example extends Component {

  render() {
    return (
      <Wrapper>
        <NumberWrapper>{this.props.code}</NumberWrapper>
        <SentenceWrapper>
          <span>{this.props.chinese}</span>
          <Pinyin>{this.props.pinyin}</Pinyin>
          <Translation>{this.props.translation}</Translation>
          {this.props.literalTranslation &&
            <span>{this.props.literalTranslation}</span>}
        </SentenceWrapper>
      </Wrapper>
    );
  }
}

Example.propTypes = {
  code: propTypes.string.isRequired,
  chinese: propTypes.string.isRequired,
  pinyin: propTypes.string.isRequired,
  translation: propTypes.string.isRequired,
  literalTranslation: propTypes.string
};

export default Example;
