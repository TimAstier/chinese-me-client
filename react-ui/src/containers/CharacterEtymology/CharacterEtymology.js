import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { StudyVideo } from '../../components';
import selectors from '../../rootSelectors';
import { Character } from '../../models';

class CharacterEtymology extends Component {

  render() {
    return <StudyVideo videoUrl={this.props.character.etymologyUrl} />;
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
