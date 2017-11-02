import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { QuestionModal as QuestionModalComponent } from '../../components';
import s from '../../rootSelectors';

class QuestionModal extends Component {

  render() {
    return <QuestionModalComponent { ...this.props } />;
  }
}

QuestionModal.propTypes = {
  open: propTypes.bool.isRequired,
  setting: propTypes.string.isRequired,
  questionType: propTypes.string.isRequired
};

const mapStateToProps = state => ({
  open: s.ui.getOpenQuestionModal(state),
  setting: s.question.getSetting(state),
  questionType: s.question.getType(state)
});

export default connect(
  mapStateToProps
)(QuestionModal);
