import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { AudioToText as AudioToTextComponent } from '../../components';
import selectors from '../../rootSelectors';
import { List } from 'immutable';
import * as models from '../../models';

class AudioToText extends Component {

  render() {
    return (
      <AudioToTextComponent { ...this.props } />
    );
  }
}

AudioToText.propTypes = {
  currentBoxIndex: propTypes.number.isRequired,
  results: propTypes.instanceOf(List).isRequired,
  status: propTypes.string.isRequired,
  userAnswer: propTypes.string.isRequired,
  audioToText: propTypes.instanceOf(models.AudioToText).isRequired,
  words: propTypes.instanceOf(models.WordMap).isRequired
};

const mapStateToProps = state => ({
  currentBoxIndex: selectors.getCurrentBoxIndex(state),
  results: selectors.getAudioToTextResults(state),
  status: selectors.getAudioToTextStatus(state),
  userAnswer: selectors.getAudioToTextUserAnswer(state),
  audioToText: selectors.getCurrentAudioToText(state),
  words: selectors.getWords(state)
});

export default connect(
  mapStateToProps
)(AudioToText);
