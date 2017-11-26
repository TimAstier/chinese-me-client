import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { AudioToText as AudioToTextComponent } from '../../components';
import s from '../../rootSelectors';
import { List } from 'immutable';
import * as models from '../../models';
import Immutable from 'immutable';

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
  status: propTypes.oneOf(['question', 'finished']).isRequired,
  userAnswer: propTypes.string.isRequired,
  audioToText: propTypes.instanceOf(models.AudioToText).isRequired,
  words: propTypes.instanceOf(Immutable.OrderedMap).isRequired
};

const mapStateToProps = state => ({
  currentBoxIndex: s.audioToText.getCurrentBoxIndex(state),
  results: s.audioToText.getResults(state),
  status: s.audioToText.getStatus(state),
  userAnswer: s.audioToText.getUserAnswer(state),
  audioToText: s.getCurrentAudioToText(state),
  words: s.entities.getWords(state)
});

export default connect(
  mapStateToProps
)(AudioToText);
