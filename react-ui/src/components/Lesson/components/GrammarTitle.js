import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const H3 = styled.h3`
  font-size: 16px;
  font-family: 'Calibri';
  color: black;
  font-weight: normal;
`;

class Title extends Component {

  render() {
    return (
        <H3>
          {this.props.letter + '. '}
          {<span>{this.props.children}</span>}
        </H3>
    );
  }
}

Title.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.array]).isRequired,
  letter: propTypes.string.isRequired
};

export default Title;
