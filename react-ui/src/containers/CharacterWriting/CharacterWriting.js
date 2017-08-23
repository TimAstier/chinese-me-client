import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { CharacterWriting as CharacterWritingComponent }
  from '../../components';
import selectors from '../../rootSelectors';
import { Character } from '../../models';

class CharacterWriting extends Component {

  render() {
    return (
      <CharacterWritingComponent
        character={this.props.character}
      />
    );
  }
}

CharacterWriting.propTypes = {
  character: propTypes.instanceOf(Character).isRequired
};

const mapStateToProps = state => ({
  character: selectors.getCurrentCharacter(state)
});

export default connect(
  mapStateToProps
)(CharacterWriting);
