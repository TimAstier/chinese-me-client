import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { EpisodeScreen, CharacterPinyin } from '../.';
import selectors from '../../rootSelectors';

class StudyCharacterPinyin extends Component {
  render() {
    // TODO: link this to actual data with selectors
    const progressMenuOptions = {
      type: 'character',
      currentElement: this.props.currentCharacterPosition,
      totalElements: this.props.charactersCount
    };

    return (
      <EpisodeScreen
        progressMenuOptions={progressMenuOptions}
        skip
      >
        <CharacterPinyin />
      </EpisodeScreen>
    );
  }
}

const mapStateToProps = state => {
  return {
    charactersCount: selectors.getCurrentEpisode(state).characters.length,
    currentCharacterPosition: selectors.getCurrentCharacterPosition(state),
  };
};

StudyCharacterPinyin.propTypes = {
  charactersCount: propTypes.number,
  currentCharacterPosition: propTypes.number,
};

export default connect(
  mapStateToProps
)(StudyCharacterPinyin);
