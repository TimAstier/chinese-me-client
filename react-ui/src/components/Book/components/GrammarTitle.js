import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Bookrow } from './.';
const Scroll = require('react-scroll');
const Element = Scroll.Element;

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
        <Element name={`grammar-${this.props.grammarId}`}>
          <H3>
            {this.props.letter + '. '}
            {<span>{this.props.title}</span>}
          </H3>
        </Element>
      </Bookrow>
    );
  }
}

GrammarTitle.propTypes = {
  title: propTypes.string.isRequired,
  letter: propTypes.string.isRequired,
  grammarId: propTypes.number
};

export default GrammarTitle;
