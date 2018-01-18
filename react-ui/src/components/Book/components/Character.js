import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Bookrow } from './.';
import { CharacterBox } from './.';

class Character extends Component {
  render() {
    return (
      <Bookrow>
        <CharacterBox simpChar={this.props.simpChar}/>
      </Bookrow>
    );
  }
}

Character.propTypes = {
  simpChar: propTypes.string
};

export default Character;
