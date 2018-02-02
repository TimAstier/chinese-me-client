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
  currentBoxIndex: s.exercise.getCurrentBoxIndex(state),
  results: s.exercise.getResults(state),
  status: s.exercise.getStatus(state),
  userAnswer: s.exercise.getUserAnswer(state),
  words: s.getExerciseWords(state)
});

export default connect(
  mapStateToProps
)(AudioToWords);
