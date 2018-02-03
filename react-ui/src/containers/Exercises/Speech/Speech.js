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
        text={this.props.exercise.text}
        type={this.props.exercise.type}
      />
    );
  }
}

Speech.propTypes = {
  status: propTypes.string.isRequired,
  exercise: propTypes.instanceOf(models.Exercise).isRequired
};

const mapStateToProps = state => ({
  exercise: s.getCurrentExercise(state),
  status: s.exercise.getStatus(state)
});

export default connect(
  mapStateToProps
)(Speech);
