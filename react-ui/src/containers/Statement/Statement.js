import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Statement as StatementComponent } from '../../components';
import selectors from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';
import * as models from '../../models';

class Statement extends Component {

  render() {
    return (
      <StatementComponent { ...this.props } />
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
  dialogMode: propTypes.string.isRequired,
  words: propTypes.arrayOf(propTypes.instanceOf(models.Word)).isRequired,
  currentStatementLength: propTypes.number.isRequired
};

const mapStateToProps = state => ({
  isAudioPlaying: selectors.getIsPlaying(state),
  displayControls: selectors.getDialogMode(state) === 'explore',
  read: selectors.getIsChosenAvatarTalking(state),
  words: selectors.getCurrentWords(state),
  currentStatementLength: selectors.getCurrentStatementLength(state)
});

export default connect(
  mapStateToProps,
  {
    playSentence: sagaActions.playSentence,
    stopSentence: sagaActions.stopSentence,
    switchSentence: sagaActions.switchSentence
  }
)(Statement);
