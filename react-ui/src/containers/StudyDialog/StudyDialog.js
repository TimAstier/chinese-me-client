import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { EpisodeScreen, Dialog } from '../.';
import selectors from '../../rootSelectors';
import * as models from '../../models';

class StudyDialog extends Component {
  render() {
    const stepsOptions = {
      currentStep: this.props.currentStatementIndex,
      stepIds: this.props.dialog ? this.props.dialog.statements : []
    };

    return (
      <EpisodeScreen
        stepsOptions={stepsOptions}
        screenLabel={'Dialog - ' + this.props.dialogMode}
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
    currentStatementIndex: selectors.getCurrentStatementIndex(state),
    dialogMode: selectors.getDialogMode(state)
  };
};

StudyDialog.propTypes = {
  dialog: propTypes.instanceOf(models.Dialog),
  statement: propTypes.instanceOf(models.Statement),
  currentStatementIndex: propTypes.number,
  dialogMode: propTypes.string.isRequired
};

export default connect(
  mapStateToProps
)(StudyDialog);
