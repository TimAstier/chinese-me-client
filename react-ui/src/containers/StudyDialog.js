import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { Dialog } from '../components';
import { EpisodeScreen } from './';
import { actions as entitiesActions } from '../redux/entities';
import { actions as studyActions } from '../redux/study';
import { getCurrentDialog, getCurrentStatementIndex,
  getCurrentSentenceIndex, getCurrentSentences, getCurrentAvatars,
  getCurrentStatement } from '../rootReducer';
import * as models from '../models';

class StudyDialog extends Component {
  componentWillMount() {
    // TODO: Store currentEpisode in the store
    this.props.set('currentEpisodeId', 4);
    this.props.set('currentDialogId', 1);
    this.props.set('currentStatementId', 1);
    this.props.set('currentSentenceId', 4);
    return this.props.fetch('/episode/4/dialogs');
    // TODO: Render this only when entities have been retrieved
    // This would solve the issue with default values for rendering
  }

  render() {
    const stepsOptions = {
      currentStep: this.props.currentStatementIndex,
      stepIds: this.props.statement ? this.props.statement.sentences : []
    };

    return (
      <EpisodeScreen
        stepsOptions={stepsOptions}
        screenLabel={'Dialog - Explore'}
        next
        skip
      >
        <Dialog
          personalities= {this.props.avatars}
          sentences={this.props.sentences}
          currentSentenceIndex={this.props.currentSentenceIndex || 0}
        />
      </EpisodeScreen>
    );
  }
}

const mapStateToProps = state => {
  return {
    dialog: getCurrentDialog(state),
    currentStatementIndex: getCurrentStatementIndex(state),
    currentSentenceIndex: getCurrentSentenceIndex(state),
    sentences: getCurrentSentences(state),
    statement: getCurrentStatement(state),
    avatars: getCurrentAvatars(state)
  };
};

StudyDialog.propTypes = {
  fetch: propTypes.func.isRequired,
  set: propTypes.func.isRequired,
  dialog: propTypes.instanceOf(models.Dialog),
  currentStatementIndex: propTypes.number,
  currentSentenceIndex: propTypes.number,
  statement: propTypes.instanceOf(models.Statement),
  sentences: propTypes.arrayOf(propTypes.instanceOf(models.Sentence)).isRequired,
  avatars: propTypes.arrayOf(propTypes.instanceOf(models.Avatar)).isRequired
};

export default connect(
  mapStateToProps,
  {
    fetch: entitiesActions.fetch,
    set: studyActions.set
  }
)(StudyDialog);
