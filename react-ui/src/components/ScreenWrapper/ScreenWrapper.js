import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

class ScreenWrapper extends Component {

  render() {
    const Wrapper = styled.div`
      margin-top: 30px;
      width: 1200px;
      height: 640px;
      border-radius: 10px;
      background-color: #ffffff;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
      display: flex;
      flex-direction: column;
    `;

    return (
      <Wrapper>{this.props.children}</Wrapper>
    );
  }
}

ScreenWrapper.propTypes = {
  children: propTypes.array
};

export default ScreenWrapper;
