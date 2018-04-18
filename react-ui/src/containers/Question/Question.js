import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import s from '../../rootSelectors';
import { Question as QuestionComponent } from '../../components';

class Question extends Component {
  render() {
    return (
      <QuestionComponent
        initialized={this.props.initialized}
        setting={this.props.setting}
        questionType={this.props.questionType}
        saving={this.props.saving}
      />
    );
  }
}

Question.propTypes = {
  setting: propTypes.string.isRequired,
  questionType: propTypes.string.isRequired,
  initialized: propTypes.bool.isRequired,
  saving: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  setting: s.question.getSetting(state),
  questionType: s.question.getType(state),
  initialized: s.question.getInitialized(state),
  saving: s.question.getSaving(state)
});

export default connect(
  mapStateToProps
)(Question);
