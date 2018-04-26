import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import s from '../../rootSelectors';
import { Question as QuestionComponent } from '../../components';

class Question extends Component {
  render() {
    return (
      <QuestionComponent { ...this.props } />
    );
  }
}

Question.propTypes = {
  setting: propTypes.string.isRequired,
  questionType: propTypes.string.isRequired,
  initialized: propTypes.bool.isRequired,
  saving: propTypes.bool.isRequired,
  userSettings: propTypes.object.isRequired,
  result: propTypes.func,
  title: propTypes.string,
  questionIntro: propTypes.string,
  status: propTypes.string.isRequired
};

const mapStateToProps = state => ({
  setting: s.question.getSetting(state),
  questionType: s.question.getType(state),
  initialized: s.question.getInitialized(state),
  saving: s.question.getSaving(state),
  userSettings: s.getAugmentedSettings(state),
  title: s.question.getTitle(state),
  result: s.getQuestionResult(state),
  questionIntro: s.question.getQuestionIntro(state),
  status: s.question.getStatus(state)
});

export default connect(
  mapStateToProps
)(Question);
