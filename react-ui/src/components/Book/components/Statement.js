import React, { Component } from 'react';
import propTypes from 'prop-types';
import { bookContainers as C } from '../../../containers';
import { Space } from './.';
import styled from 'styled-components';
import { Row } from '../../Shared';

const ChineseWrapper = styled.div`
  font-size: 30px;
  font-family: Kai;
  line-height: 35px;
  display: flex;
  min-width: ${props => props.width}
`;

const ChineseMeta = styled.div`
  min-width: 120px;
  display: flex;
`;

const LatinMeta = styled.div`
  min-width: 120px;
  line-height: 30px;
`;

const Punct = styled.div`
  flex-grow: 1;
  text-align: right;
`;

const Text = styled.div`
  flex-grow: 1;
  span {
    margin-right: 10px;
  }
`;

class Statement extends Component {
  _renderChineseMeta() {
    if (this.props.displayNames) {
      return (
        <ChineseMeta>
          {this.props.name ? this.props.name : ''}
          <Punct>{this.props.name ? ' : ' : '- '}</Punct>
        </ChineseMeta>
      );
    }
    return <div>-&nbsp;</div>;
  }

  _renderChinese() {
    return (
      <ChineseWrapper>
        {this._renderChineseMeta()}
        <Space width={25}/>
        {this._renderSentences()}
      </ChineseWrapper>
    );
  }

  _renderChineseWithTranslation() {
    return (
      <Row>
        <ChineseWrapper width={'250px'}>
          {this._renderChineseMeta()}
          {this._renderSentences('chinese')}
        </ChineseWrapper>
        <Row>
          {this._renderLatinMeta()}
          { this._renderSentences('translation') }
        </Row>
      </Row>
    );
  }

  _renderLatinMeta() {
    if (this.props.displayNames) {
      return (
        <LatinMeta>
          <Row>
            {this.props.name ? this.props.name : ''}
            <Punct>{this.props.name ? ' : ' : '- '}</Punct>
          </Row>
        </LatinMeta>
      );
    }
    return <div>-&nbsp;</div>;
  }

  _renderPinyin() {
    return (
      <Row>
        {this._renderLatinMeta()}
        <Space width={25}/>
        {this._renderSentences()}
      </Row>
    );
  }

  _renderTranslation() {
    return (
      <Row>
        {this._renderLatinMeta()}
        <Space width={25}/>
        {this._renderSentences()}
      </Row>
    );
  }

  _renderSentences(sentenceType = this.props.sentenceType) {
    if (!this.props.sentences) {
      return null;
    }
    const array = this.props.sentences.map(id => {
      return (
        <C.Sentence
          key={id}
          sentenceId={id}
          sentenceType={sentenceType}
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
      case 'chineseWithTranslation': return this._renderChineseWithTranslation();
      default: return null;
    }
  }
}

Statement.propTypes = {
  sentenceType: propTypes.oneOf([
    'chinese',
    'pinyin',
    'translation',
    'chineseWithTranslation'
  ]).isRequired,
  sentences: propTypes.arrayOf(propTypes.number),
  displayNames: propTypes.bool.isRequired,
  avatarId: propTypes.number,
  name: propTypes.string
};

export default Statement;
