import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Bookrow, CharacterBox } from './.';

class CharacterPractice extends Component {
  render() {
    return (
      <Bookrow
        buttonOptions={
          this.props.calligraphyHash
          ? {
            type: 'calligraphy',
            data: { elementId: this.props.characterId }
          }
          : null
        }
      >
        <CharacterBox
          simpChar={this.props.simpChar}
        />
      </Bookrow>
    );
  }
}

CharacterPractice.propTypes = {
  simpChar: propTypes.string.isRequired,
  characterId: propTypes.number.isRequired,
  calligraphyHash: propTypes.string
};

export default CharacterPractice;
