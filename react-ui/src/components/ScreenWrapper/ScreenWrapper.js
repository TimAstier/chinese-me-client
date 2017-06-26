import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

class ScreenWrapper extends Component {

  render() {
    const Wrapper = styled.div`
      width: 1200px;
      height: 777px;
      border-radius: 15px;
      background-color: #ffffff;
    	box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
    `;

    return (
      <Wrapper>{this.props.children}</Wrapper>
    );
  }
}

ScreenWrapper.propTypes = {
  children: propTypes.object
};

export default ScreenWrapper;
