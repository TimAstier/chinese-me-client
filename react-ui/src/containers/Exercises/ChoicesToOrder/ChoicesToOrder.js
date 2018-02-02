import React, { Component } from 'react';
import { List } from 'immutable';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { ChoicesToOrder as ChoicesToOrderComponent } from '../../../components';
import * as models from '../../../models';
import { actions as exerciseActions } from '../../../redux/exercise';
import s from '../../../rootSelectors';

class ChoicesToOrder extends Component {
  handleBlockClick(index) {
    if (this.props.indexes.indexOf(index) !== -1) {
      return this.props.removeIndex(index);
    }
    return this.props.pushIndex(index);
  }

  render() {
    return (
      <ChoicesToOrderComponent
        usedChoices={this.props.usedChoices}
        choices={this.props.exercise.choices}
        indexes={this.props.indexes}
        pushIndex={this.props.pushIndex}
        handleBlockClick={this.handleBlockClick.bind(this)}
        userAnswer={this.props.userAnswer}
        correctAnswer={this.props.correctAnswer}
        explanation={this.props.explanation}
        status={this.props.status}
      />
    );
  }
}

const mapStateToProps = state => ({
  exercise: s.getCurrentExercise(state),
  indexes: s.exercise.getIndexes(state),
  usedChoices: s.getUsedChoices(state),
  userAnswer: s.getChoicesToOrderUserAnswer(state),
  correctAnswer: s.practice.getCorrectAnswer(state),
  explanation: s.practice.getExplanation(state),
  status: s.exercise.getStatus(state)
});

ChoicesToOrder.propTypes = {
  exercise: propTypes.instanceOf(models.Exercise).isRequired,
  pushIndex: propTypes.func.isRequired,
  removeIndex: propTypes.func.isRequired,
  indexes: propTypes.instanceOf(List).isRequired,
  usedChoices: propTypes.array.isRequired,
  userAnswer: propTypes.string.isRequired,
  correctAnswer: propTypes.string,
  explanation: propTypes.string,
  status: propTypes.string.isRequired
};

export default connect(
  mapStateToProps,
  {
    pushIndex: exerciseActions.pushIndex,
    removeIndex: exerciseActions.removeIndex
  }
)(ChoicesToOrder);
