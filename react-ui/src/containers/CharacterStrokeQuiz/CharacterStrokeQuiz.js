import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { CharacterStrokeQuiz as CharacterStrokeQuizComponent } from '../../components';
import { Character } from '../../models';
import selectors from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';

class CharacterStrokeQuiz extends Component {

  render() {
    return (
      <CharacterStrokeQuizComponent { ...this.props }/>
    );
  }
}

CharacterStrokeQuiz.propTypes = {
  character: propTypes.instanceOf(Character).isRequired,
  timerStatus: propTypes.string.isRequired,
  hideLabel: propTypes.bool,
  strokeQuizCompleted: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  character: selectors.getCurrentCharacter(state),
  timerStatus: selectors.getTimerStatus(state)
});

export default connect(
  mapStateToProps,
  {
    strokeQuizCompleted: sagaActions.strokeQuizCompleted
  }
)(CharacterStrokeQuiz);
