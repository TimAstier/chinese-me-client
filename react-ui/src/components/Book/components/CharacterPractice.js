import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Bookrow, CharacterBox } from './.';
import { Row } from '../../Shared';

class CharacterPractice extends Component {

  _renderCharacterBoxes() {
    const array = [];
    for (let i = 1; i < 10; i++) {
      array.push(
        <CharacterBox
          simpChar={i <= 3 ? this.props.simpChar : undefined}
          grey={i === 2 || i === 3}
          key={i}
        />
      );
    }
    return <Row>{array}</Row>;
  }

  render() {
    return (
      <Bookrow
        buttonOptions={{
          type: 'writing',
          data: { elementId: this.props.characterId }
        }}
      >
        {this._renderCharacterBoxes()}
      </Bookrow>
    );
  }
}

CharacterPractice.propTypes = {
  simpChar: propTypes.string.isRequired,
  characterId: propTypes.number.isRequired
};

export default CharacterPractice;