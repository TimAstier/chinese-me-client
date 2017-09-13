import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const H2 = styled.h2`
  font-size: 18px;
  font-family: 'Calibri';
  color: black;
`;

class PartTitle extends Component {

  render() {
    return (
        <H2>
          {this.props.children}
        </H2>
    );
  }
}

PartTitle.propTypes = {
  children: propTypes.string.isRequired
};

export default PartTitle;
