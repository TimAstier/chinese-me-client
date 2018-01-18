import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { CharacterEtymology as CharacterEtymologyComponent } from '../../components';
import s from '../../rootSelectors';
import { Character } from '../../models';
import * as content from '../../components/Book/etymology';

class CharacterEtymology extends Component {
  render() {
    return (
      <CharacterEtymologyComponent
        content={content[this.props.character.etymologyHash]}
        character={this.props.character.simpChar}
      />
    );
  }
}

CharacterEtymology.propTypes = {
  character: propTypes.instanceOf(Character).isRequired
};

const mapStateToProps = state => ({
  character: s.getCurrentCharacter(state)
});

export default connect(
  mapStateToProps
)(CharacterEtymology);
