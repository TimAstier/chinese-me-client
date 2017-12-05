import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-size: 30px;
  font-family: ChineseFont;
  line-height: 1.1;
`;

class Char extends Component {

  render() {
    return (
      <Wrapper>{this.props.children}</Wrapper>
    );
  }
}

Char.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.object]).isRequired
};

export default Char;
