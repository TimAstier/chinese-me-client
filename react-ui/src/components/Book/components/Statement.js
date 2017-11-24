import React, { Component } from 'react';
import propTypes from 'prop-types';
import { bookContainers as C } from '../../../containers';
import styled from 'styled-components';

const ChineseWrapper = styled.div`
  font-size: 25px;
  font-family: Kai;
  line-height: 35px;
  display: flex;
`;

const TranslationWrapper = styled.div`
  font-size: 18px;
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
  span {
    margin-right: 10px;
  }
`;

class Statement extends Component {

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
        { this._renderSentences() }
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
        { this._renderSentences() }
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
        { this._renderSentences() }
      </TranslationWrapper>
    );
  }

  _renderSentences() {
    if (!this.props.sentences) {
      return null;
    }
    const array = this.props.sentences.map(id => {
      return (
        <C.Sentence
          key={id}
          sentenceId={id}
          sentenceType={this.props.sentenceType}
        />
      );
    });
    return (
      <Text>
        {array}
      </Text>
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

Statement.propTypes = {
  sentenceType: propTypes.oneOf(['chinese', 'pinyin', 'translation']).isRequired,
  sentences: propTypes.arrayOf(propTypes.number),
  displayNames: propTypes.bool.isRequired,
  avatarId: propTypes.number,
  name: propTypes.string
};

export default Statement;
