import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style-type: none;
  font-size: 21px;
  li {
    line-height: 25px;
  }
`;

class Ul extends Component {

  render() {
    return (
      <StyledUl>{this.props.children}</StyledUl>
    );
  }
}

Ul.propTypes = {
  children: propTypes.oneOfType([propTypes.array, propTypes.object]).isRequired
};

export default Ul;
