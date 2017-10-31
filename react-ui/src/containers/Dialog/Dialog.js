import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import * as models from '../../models';
import { Dialog as DialogComponent } from '../../components';
import selectors from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';

class Dialog extends Component {

  render() {
    return (
      <DialogComponent { ...this.props } />
    );
  }
}

Dialog.propTypes = {
  sentences: propTypes.arrayOf(propTypes.instanceOf(models.Sentence)).isRequired,
  avatars: propTypes.arrayOf(propTypes.instanceOf(models.Avatar)).isRequired,
  currentSentenceIndex: propTypes.number.isRequired,
  chosenAvatarId: propTypes.number.isRequired,
  dialogMode: propTypes.string.isRequired,
  dialogLinkClick: propTypes.func.isRequired,
  currentEpisodeId: propTypes.string.isRequired,
  currentDialogId: propTypes.string.isRequired,
  previousStatement: propTypes.func.isRequired,
  nextStatement: propTypes.func.isRequired,
  statementsCount: propTypes.number.isRequired,
  currentStatementIndex: propTypes.number.isRequired
};

const mapStateToProps = state => {
  return {
    avatars: selectors.getCurrentAvatars(state),
    sentences: selectors.getSentencesWithValues(state),
    currentSentenceIndex: selectors.getCurrentSentenceIndex(state),
    chosenAvatarId: selectors.getChosenAvatarId(state) || 0,
    dialogMode: selectors.getDialogMode(state),
    currentEpisodeId: selectors.getCurrentEpisodeId(state),
    currentDialogId: selectors.getCurrentDialogId(state),
    statementsCount: selectors.getCurrentDialogStatementsCount(state),
    currentStatementIndex: selectors.getCurrentStatementIndex(state)
  };
};

export default connect(
  mapStateToProps,
  {
    dialogLinkClick: sagaActions.dialogLinkClick,
    nextStatement: sagaActions.nextStatement,
    previousStatement: sagaActions.previousStatement
  },
)(Dialog);
