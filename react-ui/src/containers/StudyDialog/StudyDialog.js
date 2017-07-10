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
  dialog: propTypes.instanceOf(models.Dialog),
  statement: propTypes.instanceOf(models.Statement),
  currentStatementIndex: propTypes.number,
};

export default connect(
  mapStateToProps
)(StudyDialog);
