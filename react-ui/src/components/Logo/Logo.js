import React, { Component } from 'react';
import styled from 'styled-components';
import logoSrc from './logo.png';

const Img = styled.img`
  width: 247px;
  height: 76px;
`;

class Logo extends Component {

  render() {
    return (
      <Img src={logoSrc}/>
    );
  }
}

export default Logo;
