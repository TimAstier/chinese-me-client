import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  @media (max-height: 700px) {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  margin-top: 30px;
  max-width: 1200px;
  width: 97%;
  max-height: 640px;
  height: 100%;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
`;

class ScreenWrapper extends Component {
  render() {
    return (
      <Wrapper>{this.props.children}</Wrapper>
    );
  }
}

ScreenWrapper.propTypes = {
  children: propTypes.oneOfType([
    propTypes.object,
    propTypes.array
  ])
};

export default ScreenWrapper;
