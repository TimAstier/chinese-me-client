import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { bookComponents as c } from '../../../components';
import * as models from '../../../models';
import { default as s } from '../../../rootSelectors';

class Character extends Component {

  render() {
    return this.props.options.practice ?
      <c.CharacterPractice
        simpChar={this.props.character.simpChar}
        characterId={this.props.characterId}
      />
      : <c.Character simpChar={this.props.character.simpChar} />;
  }
}

Character.propTypes = {
  characterId: propTypes.number.isRequired,
  character: propTypes.instanceOf(models.Character),
  options: propTypes.shape({
    practice: propTypes.bool
  }).isRequired
};

const mapStateToProps = (state, ownProps) => ({
  character: s.entities.getCharacters(state).get(String(ownProps.characterId))
});

export default connect(
  mapStateToProps
)(Character);
