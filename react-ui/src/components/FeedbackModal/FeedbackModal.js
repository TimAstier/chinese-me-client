import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Modal } from '../.';
import FeedbackWriting from './FeedbackWriting';
import FeedbackSending from './FeedbackSending';
import FeedbackSent from './FeedbackSent';

class FeedbackModal extends Component {
  renderContent() {
    switch (this.props.status) {
      case 'writing': return <FeedbackWriting />;
      case 'sending': return <FeedbackSending />;
      case 'sent': return <FeedbackSent />;
      default: return null;
    }
  }

  render() {
    return (
      <Modal { ...this.props } size="small">
        {this.renderContent()}
      </Modal>
    );
  }
}

FeedbackModal.propTypes = {
  open: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired,
  status: propTypes.oneOf(['writing', 'sending', 'sent']).isRequired
};

export default FeedbackModal;
