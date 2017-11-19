import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Bookrow } from './.';

const H3 = styled.h3`
  font-size: 24px;
  font-family: 'Calibri';
  color: #8B3244;
  font-weight: normal;
`;

class GrammarTitle extends Component {

  render() {
    return (
      <Bookrow
        backgroundColor={'#F3F3F3'}
      >
        <H3>
          {this.props.letter + '. '}
          {<span>{this.props.title}</span>}
        </H3>
      </Bookrow>
    );
  }
}

GrammarTitle.propTypes = {
  title: propTypes.string.isRequired,
  letter: propTypes.string.isRequired
};

export default GrammarTitle;
