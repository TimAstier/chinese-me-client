import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style-type: none;
`;

class Ul extends Component {

  render() {
    return (
      <StyledUl>{this.props.children}</StyledUl>
    );
  }
}

Ul.propTypes = {
  children: propTypes.array.isRequired
};

export default Ul;
