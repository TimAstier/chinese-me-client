import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Bookrow, CharacterBox } from './.';
import { Row } from '../../Shared';
import Media from 'react-media';

class CharacterPractice extends Component {
  _renderCharacterBoxes(boxCount) {
    const array = [];
    for (let i = 1; i < boxCount; i++) {
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
        buttonOptions={
          this.props.calligraphyHash ?
          {
            type: 'calligraphy',
            data: { elementId: this.props.characterId }
          }
          : null
        }
      >
        <Media query="(max-width: 1150px)">
          {matches =>
            matches ? (
              this._renderCharacterBoxes(5)
            ) : (
              this._renderCharacterBoxes(10)
            )
          }
        </Media>
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
