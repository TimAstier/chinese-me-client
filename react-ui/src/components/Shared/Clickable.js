import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

class Clickable extends Component {

  render() {
    const Clickable = styled.div`
      cursor: pointer;
    `;
    return (
      <Clickable>
        {this.props.children}
      </Clickable>
    );
  }
}

Clickable.propTypes = {
  children: propTypes.node.isRequired
};

export default Clickable;
