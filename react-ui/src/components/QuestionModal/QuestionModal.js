import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Modal } from '../.';
import { ClosedQuestion, OpenQuestion, SelectQuestion } from '../../containers';
import { QuestionTypeException } from '../../exceptions';

class QuestionModal extends Component {
  renderContent() {
    switch (this.props.questionType) {
      case 'closedQuestion':
        return <ClosedQuestion setting={this.props.setting} />;
      case 'openQuestion':
        return <OpenQuestion setting={this.props.setting} />;
      case 'selectQuestion':
        return <SelectQuestion setting={this.props.setting} />;
      default:
        throw new QuestionTypeException(this.props.questionType);
    }
  }

  render() {
    return (
      <Modal
        open={this.props.open}
        size="small"
        handleClose={this.props.handleClose}
      >
        {this.props.setting && this.props.questionType && this.renderContent()}
      </Modal>
    );
  }
}

QuestionModal.propTypes = {
  open: propTypes.bool.isRequired,
  questionType: propTypes.string.isRequired,
  setting: propTypes.string.isRequired,
  handleClose: propTypes.func.isRequired
};

export default QuestionModal;
