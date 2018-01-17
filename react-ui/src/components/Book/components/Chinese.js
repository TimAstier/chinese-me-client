import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.span`
  font-size: '21px';
  font-family: ChineseFont;
`;

class Char extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}

Char.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.object]).isRequired
};

export default Char;
