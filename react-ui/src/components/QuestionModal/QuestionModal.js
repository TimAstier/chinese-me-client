import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Modal } from '../.';
import ClosedQuestion from './ClosedQuestion';
import constants from '../../constants/closedQuestion';

class QuestionModal extends Component {
  renderContent() {
    switch (this.props.type) {
      case 'closedQuestion':
        if (!constants.hasOwnProperty(this.props.screenType)) {
          return null;
        }
        return (
          <ClosedQuestion
            onClick={this.props.onClick}
            label={constants[this.props.screenType].label}
            choiceA={constants[this.props.screenType].choiceA}
            choiceB={constants[this.props.screenType].choiceB}
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
  screenType: propTypes.string.isRequired
};

export default QuestionModal;
