import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Wrapper = styled.div`
  height: 700px;
  width: 1000px;
  display: flex;
  justify-content: center;
  background-color: orangered;
`;

class TestWrapper extends Component {

  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}

TestWrapper.propTypes = {
  children: propTypes.node
};

export default TestWrapper;
