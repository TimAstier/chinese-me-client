import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { CharacterEtymology as CharacterEtymologyComponent }
  from '../../components';
import selectors from '../../rootSelectors';
import { Character } from '../../models';

class CharacterEtymology extends Component {

  render() {
    return (
      <CharacterEtymologyComponent
        character={this.props.character}
      />
    );
  }
}

CharacterEtymology.propTypes = {
  character: propTypes.instanceOf(Character).isRequired
};

const mapStateToProps = state => ({
  character: selectors.getCurrentCharacter(state)
});

export default connect(
  mapStateToProps
)(CharacterEtymology);
