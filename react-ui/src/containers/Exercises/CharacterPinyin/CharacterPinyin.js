import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { CharacterPinyin as CharacterPinyinComponent } from '../../../components';
import { Character, Exercise } from '../../../models';
import s from '../../../rootSelectors';
import { actions as exerciseActions } from '../../../redux/exercise';

class CharacterPinyin extends Component {
  handleChange(event) {
    return this.props.setUserAnswer(event.target.value);
  }

  render() {
    return (
      <CharacterPinyinComponent
        handleChange={this.handleChange.bind(this)}
        { ...this.props }
      />
    );
  }
}

CharacterPinyin.propTypes = {
  character: propTypes.instanceOf(Character).isRequired,
  exercise: propTypes.instanceOf(Exercise).isRequired,
  status: propTypes.oneOf([
    'question',
    'wrong',
    'correct'
  ]).isRequired,
  userAnswer: propTypes.string.isRequired,
  setUserAnswer: propTypes.func.isRequired,
  openFeedbackModal: propTypes.bool.isRequired,
  hideLabel: propTypes.bool
};

const mapStateToProps = state => ({
  exercise: s.getCurrentExercise(state),
  character: s.getExerciseCharacter(state),
  status: s.exercise.getStatus(state),
  userAnswer: s.exercise.getUserAnswer(state),
  openFeedbackModal: s.ui.getOpenFeedbackModal(state)
});

const mapDispatchToProps = () => ({
  setUserAnswer: exerciseActions.setUserAnswer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(CharacterPinyin);
