import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  background-color: orangered;
`;

class PlaceholderFullWidth extends Component {

  render() {
    return <Wrapper />;
  }
}

export default PlaceholderFullWidth;
