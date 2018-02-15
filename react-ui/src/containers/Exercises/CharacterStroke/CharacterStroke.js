import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { CharacterStroke as CharacterStrokeComponent } from '../../../components';
import { Character } from '../../../models';
import s from '../../../rootSelectors';
import { actions as sagaActions } from '../../../sagas/actions';
import { actions as exerciseActions } from '../../../redux/exercise';

class CharacterStroke extends Component {
  render() {
    return (
      <CharacterStrokeComponent { ...this.props }/>
    );
  }
}

CharacterStroke.propTypes = {
  character: propTypes.instanceOf(Character).isRequired,
  timerStatus: propTypes.string.isRequired,
  hideLabel: propTypes.bool,
  strokeQuizCompleted: propTypes.func.isRequired,
  watchAgain: propTypes.bool.isRequired,
  screenType: propTypes.string.isRequired,
  setStatus: propTypes.func.isRequired,
  status: propTypes.string.isRequired
};

const mapStateToProps = state => ({
  character: s.getCurrentCharacter(state),
  timerStatus: s.timer.getStatus(state),
  watchAgain: s.hanzi.getWatchAgain(state),
  screenType: s.routing.getCurrentScreenType(state),
  status: s.exercise.getStatus(state)
});

export default connect(
  mapStateToProps,
  {
    strokeQuizCompleted: sagaActions.strokeQuizCompleted,
    setStatus: exerciseActions.setStatus
  }
)(CharacterStroke);
