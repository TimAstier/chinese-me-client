import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { OpenQuestion as OpenQuestionComponent } from '../../../components';
import { default as openQuestionConstants } from '../../../constants/openQuestion';
import { actions as sagaActions } from '../../../sagas/actions';

class OpenQuestion extends Component {
  onSubmit(values) {
    return new Promise((resolve, reject) => {
      return this.props.questionAnswered(
        this.props.setting,
        values.get('value'),
        { resolve, reject }
      );
    });
  }

  render() {
    return (
      <OpenQuestionComponent
        label={openQuestionConstants[this.props.setting].label}
        onSubmit={this.onSubmit.bind(this)}
        date={this.props.date}
      />
    );
  }
}

OpenQuestion.propTypes = {
  setting: propTypes.string.isRequired,
  questionAnswered: propTypes.func.isRequired,
  date: propTypes.bool.isRequired
};

export default connect(
  null,
  {
    questionAnswered: sagaActions.questionAnswered
  }
)(OpenQuestion);
