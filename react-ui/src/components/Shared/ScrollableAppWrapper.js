import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Footer } from '../.';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: #F2F7FA;
  overflow-y: auto;
`;

class ScrollableAppWrapper extends Component {

  render() {
    return (
      <Wrapper>
        {this.props.children}
        <Footer />
      </Wrapper>
    );
  }
}

ScrollableAppWrapper.propTypes = {
  children: propTypes.node
};

export default ScrollableAppWrapper;
