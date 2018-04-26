import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Speech as SpeechComponent } from '../../../components';
import * as models from '../../../models';
import s from '../../../rootSelectors';

class Speech extends Component {
  render() {
    return (
      <SpeechComponent
        status={this.props.status}
        guidelineText={this.props.exercise.guidelineText}
        questionText={this.props.exercise.questionText}
        type={this.props.exercise.type}
        audioUrl={this.props.exercise.audioUrl}
        userSettings={this.props.userSettings}
      />
    );
  }
}

Speech.propTypes = {
  status: propTypes.string.isRequired,
  exercise: propTypes.instanceOf(models.Exercise).isRequired,
  userSettings: propTypes.object
};

const mapStateToProps = state => ({
  exercise: s.getCurrentExercise(state),
  status: s.exercise.getStatus(state)
});

export default connect(
  mapStateToProps
)(Speech);
