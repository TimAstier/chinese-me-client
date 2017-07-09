import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { EpisodeScreen, Dialog } from '../.';
import { actions as entitiesActions } from '../../redux/entities';
import { actions as studyActions } from '../../redux/study';
import selectors from '../../rootSelectors';
import * as models from '../../models';

class StudyDialog extends Component {
  componentWillMount() {
    // TODO: Store currentEpisode in the store
    this.props.set('currentEpisodeId', 4);
    this.props.set('currentDialogId', 3);
    this.props.set('currentStatementId', 5);
    this.props.set('currentSentenceId', 6);
    return this.props.fetch('/episode/4/dialogs');
    // TODO: Render this only when entities have been retrieved
    // This would solve the issue with default values for rendering
  }

  render() {
    const stepsOptions = {
      currentStep: this.props.currentStatementIndex,
      stepIds: this.props.dialog ? this.props.dialog.statements : []
    };

    return (
      <EpisodeScreen
        stepsOptions={stepsOptions}
        screenLabel={'Dialog - Explore'}
      >
        <Dialog />
      </EpisodeScreen>
    );
  }
}

const mapStateToProps = state => {
  return {
    dialog: selectors.getCurrentDialog(state),
    statement: selectors.getCurrentStatement(state),
    currentStatementIndex: selectors.getCurrentStatementIndex(state)
  };
};

StudyDialog.propTypes = {
  fetch: propTypes.func.isRequired,
  set: propTypes.func.isRequired,
  dialog: propTypes.instanceOf(models.Dialog),
  statement: propTypes.instanceOf(models.Statement),
  currentStatementIndex: propTypes.number,
};

export default connect(
  mapStateToProps,
  {
    fetch: entitiesActions.fetch,
    set: studyActions.set
  }
)(StudyDialog);
