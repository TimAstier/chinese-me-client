import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const NumberWrapper = styled.div`
  width: 40px;
`;

const SentenceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Chinese = styled.span`
  font-size: 20px;
  font-family: 'STKaitiSC';
  margin-bottom: 5px;
`;

const Pinyin = styled.span`
  font-weight: bold;
`;

const Translation = styled.span`
  font-style: italic;
`;

const Placeholder = styled.span`
  color: red;
`;

class Example extends Component {

  render() {
    return (
      <Wrapper>
        <NumberWrapper>{this.props.code}</NumberWrapper>
        <SentenceWrapper>
          <Chinese>{this.props.chinese}</Chinese>
          <Pinyin>{this.props.pinyin}</Pinyin>
          {this.props.translation ?
            <Translation>{this.props.translation}</Translation>
            : <Placeholder>{'MISSING TRANSLATION'}</Placeholder>
          }
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
  translation: propTypes.string,
  literalTranslation: propTypes.string
};

export default Example;
