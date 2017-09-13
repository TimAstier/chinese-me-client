import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 20px;
  font-family: 'Calibri';
`;

class Title extends Component {

  render() {
    return (
        <H1>
          {this.props.children}
        </H1>
    );
  }
}

Title.propTypes = {
  children: propTypes.string.isRequired
};

export default Title;
