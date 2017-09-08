import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100px;
  width: 100px;
  background-color: orangered;
`;

class PlaceholderFixedWidth extends Component {

  render() {
    return <Wrapper />;
  }
}

export default PlaceholderFixedWidth;
