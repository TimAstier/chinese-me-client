import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

class Pinyin extends Component {

  render() {
    const Wrapper = styled.div`
      min-height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Open Sans';
      font-size: 20px;
      color: #454545;
      padding-top: 20px;
    `;
    return (
      <Wrapper>{this.props.text}</Wrapper>
    );
  }
}

Pinyin.propTypes = {
  text: propTypes.string.isRequired
};

export default Pinyin;
