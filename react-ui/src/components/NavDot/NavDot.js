import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { Clickable } from '../Shared';

class NavDot extends Component {

  render() {
    const { completed } = this.props;
    const Dot = styled.div`
      width: 18px;
      border-radius: 18px;
      height: 18px;
      background-color: ${completed ? '#c0c0c0' : '#ececec'};
      margin-right: 3px;
      margin-left: 3px;
    `;
    if (this.props.clickable) {
      return (
        <Clickable>
          <Dot onClick={() => this.props.switchStatement(this.props.id)}/>
        </Clickable>
      );
    }
    return <Dot />;
  }
}

NavDot.propTypes = {
  completed: propTypes.bool,
  id: propTypes.number.isRequired,
  switchStatement: propTypes.func.isRequired,
  clickable: propTypes.bool
};

export default NavDot;
