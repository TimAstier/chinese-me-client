import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import * as models from '../../../models';

const Placeholder = styled.span`
  color: red;
`;

class Sentence extends Component {

  _renderChinese() {
    return (
      this.props.sentence.chinese ?
        <span>{this.props.sentence.chinese}</span>
        : <Placeholder>{'{MISSING CHINESE}'}</Placeholder>
    );
  }

  _renderPinyin() {
    return (
      this.props.sentence.pinyin ?
        <span><b>{this.props.sentence.pinyin}</b></span>
        : <Placeholder>{'{MISSING PINYIN}'}</Placeholder>
    );
  }

  _renderTranslation() {
    return (
      this.props.sentence.translation ?
        <span><i>{this.props.sentence.translation}</i></span>
        : <Placeholder>{'{MISSING TRANSLATION}'}</Placeholder>
    );
  }

  render() {
    switch (this.props.sentenceType) {
      case 'chinese': return this._renderChinese();
      case 'pinyin': return this._renderPinyin();
      case 'translation': return this._renderTranslation();
      default: return null;
    }
  }
}

Sentence.propTypes = {
  sentence: propTypes.instanceOf(models.Sentence).isRequired,
  sentenceType: propTypes.string.isRequired
};

export default Sentence;
