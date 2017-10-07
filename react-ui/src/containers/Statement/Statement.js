import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Statement as StatementComponent } from '../../components';
import selectors from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';

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
  playSentence: propTypes.func.isRequired,
  stopSentence: propTypes.func.isRequired,
  displayControls: propTypes.bool.isRequired,
  read: propTypes.bool.isRequired,
  switchSentence: propTypes.func.isRequired,
  dialogMode: propTypes.string.isRequired
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
    playSentence: sagaActions.playSentence,
    stopSentence: sagaActions.stopSentence,
    switchSentence: sagaActions.switchSentence
  }
)(Statement);
