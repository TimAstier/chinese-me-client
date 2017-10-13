import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Modal } from '../.';
import ClosedQuestion from './ClosedQuestion';

class QuestionModal extends Component {
  renderContent() {
    switch (this.props.type) {
      case 'closedQuestion':
        return (
          <ClosedQuestion
            onClick={this.props.onClick}
            label="Did you find this useful?"
            choiceA="Yes, I want to see more."
            choiceB="No, please skip this next time."
          />
        );
      default:
        console.log('Unknown question type:', this.props.type); // eslint-disable-line no-console
        return null;
    }
  }

  render() {
    const { open } = this.props;
    return (
      <Modal
        open={open}
        size="small"
      >
        {this.renderContent()}
      </Modal>
    );
  }
}

QuestionModal.propTypes = {
  open: propTypes.bool.isRequired,
  type: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

export default QuestionModal;
