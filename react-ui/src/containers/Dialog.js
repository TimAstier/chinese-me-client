import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import * as models from '../models';
import { Dialog as DialogComponent } from '../components';
import selectors from '../rootSelectors';

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
  currentSentenceIndex: propTypes.number.isRequired
};

const mapStateToProps = state => {
  return {
    avatars: selectors.getCurrentAvatars(state),
    sentences: selectors.getCurrentSentences(state),
    currentSentenceIndex: selectors.getCurrentSentenceIndex(state)
  };
};

export default connect(
  mapStateToProps,
  null,
)(Dialog);
