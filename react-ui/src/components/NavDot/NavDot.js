import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

class NavDot extends Component {

  render() {
    const { completed } = this.props;
    const Dot = styled.div`
      width: 18px;
      border-radius: 18px;
      height: 18px;
      background-color: ${completed ? '#c0c0c0' : '#ececec'};
    `;

    return (
      <Dot />
    );
  }
}

NavDot.propTypes = {
  completed: propTypes.bool
};

export default NavDot;
