import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Statement as StatementComponent } from '../../components';
import selectors from '../../rootSelectors';

import { actions } from '../../sagas/actions';

class Statement extends Component {

  render() {
    return (
      <StatementComponent {...this.props} />
    );
  }
}

Statement.propTypes = {
  sentences: propTypes.array.isRequired,
  currentSentenceIndex: propTypes.number.isRequired,
  isAudioPlaying: propTypes.bool.isRequired,
  nextSentence: propTypes.func.isRequired,
  previousSentence: propTypes.func.isRequired,
  playSentence: propTypes.func.isRequired,
  stopSentence: propTypes.func.isRequired,
  displayControls: propTypes.bool.isRequired,
  read: propTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    isAudioPlaying: selectors.getIsPlaying(state),
    displayControls: selectors.getDialogMode(state) === 'explore',
    read: selectors.getIsChosenAvatarTalking(state)
  };
};

export default connect(
  mapStateToProps,
  {
    nextSentence: actions.nextSentence,
    previousSentence: actions.previousSentence,
    playSentence: actions.playSentence,
    stopSentence: actions.stopSentence
  }
)(Statement);
