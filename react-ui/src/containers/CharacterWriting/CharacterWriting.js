import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { StudyVideo } from '../../components';
import selectors from '../../rootSelectors';
import { Character } from '../../models';

class CharacterWriting extends Component {

  render() {
    return <StudyVideo videoUrl={this.props.character.writingUrl} />;
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
