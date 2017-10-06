import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Exam as ExamComponent } from '../../components';
import selectors from '../../rootSelectors';
import { MultipleChoice, AudioToText } from '../.';

class Exam extends Component {

  mapTypeToContainer(type) {
    switch (type) {
      case 'multipleChoice': return MultipleChoice;
      case 'audioToText': return AudioToText;
      default:
        console.log('Unkown exercise type'); // eslint-disable-line no-console
        return null;
    }
  }

  render() {
    // TODO: Pass an Initialized props from Exam reducer.
    // Render exercice container in Exam component only when initialized
    const container =
      this.mapTypeToContainer(this.props.currentExercise.get('type'));
    return (
      <ExamComponent
        score={this.props.score}
        scoreMax={this.props.scoreMax}
        container={container}
        initialized={this.props.initialized}
      />
    );
  }
}

Exam.propTypes = {
  score: propTypes.number.isRequired,
  scoreMax: propTypes.number.isRequired,
  currentExercise: propTypes.object.isRequired,
  initialized: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  score: selectors.getExamScore(state),
  scoreMax: selectors.getExamScoreMax(state),
  currentExercise: selectors.getExamCurrentExercise(state),
  initialized: selectors.getExamInitialized(state)
});

export default connect(
  mapStateToProps
)(Exam);
