import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const ChineseWrapper = styled.div`
  font-size: 18px;
  font-family: 'STKaitiSC';
  margin: 8px 0px;
`;

class Statement extends Component {
  renderChinese() {
    return (
      <ChineseWrapper>
        {this.props.name ? this.props.name + ' : ' : '- '}
        {this.props.text}
      </ChineseWrapper>
    );
  }

  renderPinyin() {
    return (
      <div>
        {this.props.name ? this.props.name + ' : ' : '- '}
        {<b>{this.props.text}</b>}
      </div>
    );
  }

  renderTranslation() {
    return (
      <div>
        {this.props.name ? this.props.name + ' : ' : '- '}
        {<i>{this.props.text}</i>}
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
  text: propTypes.string.isRequired
};

export default Statement;
