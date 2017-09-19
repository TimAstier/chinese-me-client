import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const ChineseWrapper = styled.div`
  font-size: 18px;
  font-family: 'STKaitiSC';
  margin: 8px 0px;
`;

const Placeholder = styled.span`
  color: red;
`;

class Statement extends Component {
  renderChinese() {
    return (
      <ChineseWrapper>
        {this.props.name ? this.props.name + ' : ' : '- '}
        {this.props.text ?
          this.props.text
            : <Placeholder>{'MISSING CHINESE'}</Placeholder>}
      </ChineseWrapper>
    );
  }

  renderPinyin() {
    return (
      <div>
        {this.props.name ? this.props.name + ' : ' : '- '}
        {this.props.text ?
          <b>{this.props.text}</b>
          : <Placeholder>{'MISSING PINYIN'}</Placeholder>}
      </div>
    );
  }

  renderTranslation() {
    return (
      <div>
        {this.props.name ? this.props.name + ' : ' : '- '}
        {this.props.text ?
          <i>{this.props.text}</i>
          : <Placeholder>{'MISSING TRANSLATION'}</Placeholder>}
      </div>
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
