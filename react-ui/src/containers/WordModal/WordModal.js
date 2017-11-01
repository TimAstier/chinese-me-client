import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { WordModal as WordModalComponent } from '../../components';
import s from '../../rootSelectors';
import { Word } from '../../models';
import { actions as uiActions } from '../../redux/ui';

class WordModal extends Component {

  render() {
    return (
      <WordModalComponent { ...this.props } />
    );
  }
}

WordModal.propTypes = {
  open: propTypes.bool.isRequired,
  word: propTypes.instanceOf(Word)
};

const mapStateToProps = state => ({
  open: s.ui.getOpenWordModal(state),
  word: s.getCurrentWord(state)
});

export default connect(
  mapStateToProps,
  {
    handleClose: uiActions.closeWordModal
  }
)(WordModal);
