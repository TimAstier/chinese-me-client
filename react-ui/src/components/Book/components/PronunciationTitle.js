import React, { Component } from 'react';
import propTypes from 'prop-types';
import { PartTitle } from './.';

const Scroll = require('react-scroll');
const Element = Scroll.Element;

class PronunciationTitle extends Component {
  render() {
    return (
      <Element name={`pronunciation-${this.props.pronunciationId}`}>
        <PartTitle type="secondary">
          <span>
            {this.props.letter && this.props.letter + '. '}
            {this.props.title}
          </span>
        </PartTitle>
      </Element>
    );
  }
}

PronunciationTitle.propTypes = {
  title: propTypes.string.isRequired,
  letter: propTypes.string,
  pronunciationId: propTypes.number
};

export default PronunciationTitle;
