import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import * as models from '../../../models';
import insertVariables from '../../../utils/insertVariables';

const Placeholder = styled.span`
  color: red;
`;

const Translation = styled.span`
  line-height: 30px;
`;

class Sentence extends Component {
  _renderChinese() {
    return (
      this.props.sentence.chinese ?
        <span>
          {
            insertVariables(
              this.props.sentence.chinese,
              this.props.settings
            )
          }
        </span>
        : <Placeholder>{'{MISSING CHINESE}'}</Placeholder>
    );
  }

  _renderPinyin() {
    return (
      this.props.sentence.pinyin ?
        <span>
          <b>
            {
              insertVariables(
                this.props.sentence.pinyin,
                this.props.settings
              )
            }
          </b>
        </span>
        : <Placeholder>{'{MISSING PINYIN}'}</Placeholder>
    );
  }

  _renderTranslation() {
    return (
      this.props.sentence.translation ?
        <Translation>
          <i>
            {
              insertVariables(
                this.props.sentence.translation,
                this.props.settings
              )
            }
          </i>
        </Translation>
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
  sentenceType: propTypes.string.isRequired,
  settings: propTypes.object.isRequired
};

export default Sentence;
