import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { QuestionModal as QuestionModalComponent } from '../../components';
import s from '../../rootSelectors';
import { actions as uiActions } from '../../redux/ui';

class QuestionModal extends Component {
  handleClose() {
    return this.props.closeQuestionModal();
  }

  render() {
    return (
      <QuestionModalComponent
        open={this.props.open}
        setting={this.props.setting}
        questionType={this.props.questionType}
        handleClose={this.handleClose.bind(this)}
      />
    );
  }
}

QuestionModal.propTypes = {
  open: propTypes.bool.isRequired,
  setting: propTypes.string.isRequired,
  questionType: propTypes.string.isRequired,
  closeQuestionModal: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  open: s.ui.getOpenQuestionModal(state),
  setting: s.question.getSetting(state),
  questionType: s.question.getType(state)
});

export default connect(
  mapStateToProps,
  {
    closeQuestionModal: uiActions.closeQuestionModal
  }
)(QuestionModal);
