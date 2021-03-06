import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-height: 98px;
  height: 13%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

class CheckWrapper extends Component {
  render() {
    return (
      <Wrapper>
        {this.props.children}
      </Wrapper>
    );
  }
}

CheckWrapper.propTypes = {
  children: propTypes.node.isRequired
};

export default CheckWrapper;
