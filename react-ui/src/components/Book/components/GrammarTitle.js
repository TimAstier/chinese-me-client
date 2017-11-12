import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Bookrow } from './.';

const H3 = styled.h3`
  font-size: 18px;
  font-family: 'Calibri';
  color: black;
  font-weight: normal;
`;

class Title extends Component {

  render() {
    return (
      <Bookrow>
        <H3>
          {this.props.letter + '. '}
          {<span>{this.props.title}</span>}
        </H3>
      </Bookrow>
    );
  }
}

Title.propTypes = {
  title: propTypes.object.isRequired,
  letter: propTypes.string.isRequired
};

export default Title;
