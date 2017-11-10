import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

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

const ChineseName = styled.div`
  min-width: 70;
  text-align: right;
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

class Statement extends Component {
  renderChinese() {
    return (
      <ChineseWrapper>
        <ChineseMeta>
          <ChineseName>{this.props.name ? this.props.name : null}</ChineseName>
          <Punct>{this.props.name ? ' : ' : '- '}</Punct>
        </ChineseMeta>
        <Text>
          {this.props.text ?
            this.props.text
              : <Placeholder>{'MISSING CHINESE'}</Placeholder>
          }
        </Text>
      </ChineseWrapper>
    );
  }

  renderPinyin() {
    return (
      <div>
        <LatinMeta>
          <LatinMeta>
            {this.props.name ? this.props.name + ' : ' : '- '}
          </LatinMeta>
          <Punct>{this.props.name ? ' : ' : '- '}</Punct>
        </LatinMeta>
        <Text>
          {this.props.text ?
            <b>{this.props.text}</b>
            : <Placeholder>{'MISSING PINYIN'}</Placeholder>
          }
        </Text>
      </div>
    );
  }

  renderTranslation() {
    return (
      <TranslationWrapper>
        <LatinMeta>
          {this.props.name ? this.props.name + ' : ' : '- '}
        </LatinMeta>
        <Text>
          {this.props.text ?
            <i>{this.props.text}</i>
            : <Placeholder>{'MISSING TRANSLATION'}</Placeholder>
          }
        </Text>
      </TranslationWrapper>
    );
  }

  render() {
    switch (this.props.type) {
      case 'chinese': return this.renderChinese();
      case 'pinyin': return this.renderPinyin();
      case 'translation': return this.renderTranslation();
      default: return null;
    }
  }
}

Statement.propTypes = {
  type: propTypes.oneOf(['chinese', 'pinyin', 'translation']).isRequired,
  name: propTypes.string,
  text: propTypes.string
};

export default Statement;
