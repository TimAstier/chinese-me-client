import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Bookrow } from './.';
import { Row } from '../../Shared';

const NumberWrapper = styled.div`
  width: 40px;
`;

const SentenceWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Chinese = styled.span`
  font-size: ${props => props.big ? '34px' : '22px'};
  line-height: 1;
  font-family: ChineseFont;
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

  _renderBasic() {
    return (
      <Chinese big={ this.props.big }>
        { this.props.chinese }
      </Chinese>
    );
  }

  _renderFull() {
    return (
      <Row>
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
      </Row>
    );
  }

  render() {
    return (
      <Bookrow
        marginBottom={15}
        button={
          this.props.audioUrl ?
          {
            type: 'audio',
            data: { url: this.props.audioUrl }
          }
          : undefined
        }
          >
        { this.props.basic ? this._renderBasic() : this.renderFull() }
      </Bookrow>
    );
  }
}

Example.propTypes = {
  basic: propTypes.bool,
  big: propTypes.bool,
  code: propTypes.string.isRequired,
  chinese: propTypes.string.isRequired,
  pinyin: propTypes.string,
  translation: propTypes.string,
  literalTranslation: propTypes.string,
  audioUrl: propTypes.string
};

export default Example;
