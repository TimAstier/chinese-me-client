import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Bookrow } from './.';
import { Row } from '../../Shared';

const NumberWrapper = styled.div`
  width: 70px;
  font-size: 21px;
  margin-top: 4px;
  font-weight: bold;
`;

const SentenceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 21px;
  line-height: 1.3;
`;

const Chinese = styled.span`
  font-size: 30px;
  font-family: ChineseFont;
  margin-bottom: 5px;
  line-height: 1.1;
`;

const Pinyin = styled.span`
  font-weight: bold;
  font-family: 'cambria';
`;

const Translation = styled.span`
  font-style: italic;
  font-size: 21px;
  margin-top: ${props => props.basic ? '10px' : '0px'};
`;

const Placeholder = styled.span`
  color: red;
`;

const Wrapper = styled.div`
  width: 100%;
`;

class Example extends Component {
  _renderBasic() {
    if (this.props.displayTranslation) {
      return (
        <Row>
          <Chinese>
            { this.props.chinese }
          </Chinese>
          <Translation basic={this.props.basic}>
            { this.props.translation }
          </Translation>
        </Row>
      );
    }
    return (
      <Chinese>
        { this.props.chinese }
      </Chinese>
    );
  }

  _renderFull() {
    return (
      <Row>
        {
          this.props.code &&
            <NumberWrapper>{this.props.code}</NumberWrapper>
        }
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
        marginBottom={25}
        buttonOptions={
          this.props.audio ? {
            type: 'audio',
            data: {
              url: this.props.audioUrl,
              slowUrl: this.props.slowAudioUrl,
              text: this.props.chinese
            },
            top: true,
            toggleSlow: true,
            origin: this.props.code
          }
            : undefined
        }
      >
        <Wrapper>
          { this.props.basic ? this._renderBasic() : this._renderFull() }
        </Wrapper>
      </Bookrow>
    );
  }
}

Example.propTypes = {
  basic: propTypes.bool,
  code: propTypes.string,
  chinese: propTypes.string.isRequired,
  pinyin: propTypes.string,
  translation: propTypes.string,
  literalTranslation: propTypes.string,
  audioUrl: propTypes.string,
  slowAudioUrl: propTypes.string,
  audio: propTypes.bool.isRequired,
  displayTranslation: propTypes.bool
};

export default Example;
