import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import * as models from '../../../models';

const ChineseWrapper = styled.div`
  font-size: 20px;
  font-family: 'STKaitiSC';
  line-height: 35px;
  display: flex;
`;

const TranslationWrapper = styled.div`
  line-height: 25px;
  display: flex;
`;

const ChineseMeta = styled.div`
  min-width: 80px;
  display: flex;
`;

const LatinMeta = styled.div`
  min-width: 60px;
`;

const Punct = styled.div`
  flex-grow: 1;
  text-align: right;
`;

const Text = styled.div`
  padding-left: 20px;
  flex-grow: 1;
`;

const Placeholder = styled.span`
  color: red;
`;

class Sentence extends Component {

  _renderChinese() {
    return (
      <ChineseWrapper>
        {
          this.props.displayNames &&
            <ChineseMeta>
              {this.props.name ? this.props.name : ''}
              <Punct>{this.props.name ? ' : ' : '- '}</Punct>
            </ChineseMeta>
        }
        <Text>
          {this.props.sentence.chinese ?
            this.props.sentence.chinese
              : <Placeholder>{'{MISSING CHINESE}'}</Placeholder>
          }
        </Text>
      </ChineseWrapper>
    );
  }

  _renderPinyin() {
    return (
      <div>
        {
          this.props.displayNames &&
            <LatinMeta>
              {this.props.name ? this.props.name + ' : ' : '- '}
            </LatinMeta>
        }
        <Text>
          {this.props.sentence.pinyin ?
            <b>{this.props.sentence.pinyin}</b>
            : <Placeholder>{'{MISSING PINYIN}'}</Placeholder>
          }
        </Text>
      </div>
    );
  }

  _renderTranslation() {
    return (
      <TranslationWrapper>
        {
          this.props.displayNames &&
            <LatinMeta>
              {this.props.name ? this.props.name + ' : ' : '- '}
            </LatinMeta>
        }
        <Text>
          {this.props.sentence.translation ?
            <i>{this.props.sentence.translation}</i>
            : <Placeholder>{'{MISSING TRANSLATION}'}</Placeholder>
          }
        </Text>
      </TranslationWrapper>
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
  name: propTypes.string,
  sentenceType: propTypes.string.isRequired,
  displayNames: propTypes.bool.isRequired
};

export default Sentence;
