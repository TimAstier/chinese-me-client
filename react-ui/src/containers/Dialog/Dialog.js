import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import * as models from '../../models';
import { Dialog as DialogComponent } from '../../components';
import s from '../../rootSelectors';
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
    avatars: s.getCurrentAvatars(state),
    sentences: s.getSentencesWithValues(state),
    currentSentenceIndex: s.getCurrentSentenceIndex(state),
    chosenAvatarId: s.study.getChosenAvatarId(state) || 0,
    dialogMode: s.study.getDialogMode(state),
    currentEpisodeId: s.study.getCurrentEpisodeId(state),
    currentDialogId: s.study.getCurrentDialogId(state),
    statementsCount: s.getCurrentDialogStatementsCount(state),
    currentStatementIndex: s.getCurrentStatementIndex(state)
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
