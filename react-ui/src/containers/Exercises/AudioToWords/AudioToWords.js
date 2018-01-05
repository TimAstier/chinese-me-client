import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { AudioToWords as AudioToWordsComponent } from '../../../components';
import s from '../../../rootSelectors';
import { List } from 'immutable';
import * as models from '../../../models';

class AudioToWords extends Component {
  render() {
    return (
      <AudioToWordsComponent { ...this.props } />
    );
  }
}

AudioToWords.propTypes = {
  currentBoxIndex: propTypes.number.isRequired,
  results: propTypes.instanceOf(List).isRequired,
  status: propTypes.oneOf(['question', 'finished']).isRequired,
  userAnswer: propTypes.string.isRequired,
  words: propTypes.arrayOf(propTypes.instanceOf(models.Word)).isRequired
};

const mapStateToProps = state => ({
  currentBoxIndex: s.audioToWords.getCurrentBoxIndex(state),
  results: s.audioToWords.getResults(state),
  status: s.audioToWords.getStatus(state),
  userAnswer: s.audioToWords.getUserAnswer(state),
  words: s.getExerciseWords(state)
});

export default connect(
  mapStateToProps
)(AudioToWords);
