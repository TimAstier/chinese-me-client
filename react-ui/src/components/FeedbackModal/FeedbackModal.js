import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Modal } from '../.';
import FeedbackWriting from './FeedbackWriting';
import FeedbackSending from './FeedbackSending';
import FeedbackSent from './FeedbackSent';

class FeedbackModal extends Component {
  renderContent() {
    switch (this.props.status) {
      case 'writing': return <FeedbackWriting onSubmit={this.props.onSubmit}/>;
      case 'sending': return <FeedbackSending />;
      case 'sent': return <FeedbackSent handleClose={this.props.handleClose}/>;
      default: return null;
    }
  }

  render() {
    const { open, handleClose } = this.props;
    return (
      <Modal
        open={open}
        handleClose={handleClose}
        size="small"
        closeIcon={this.props.status === 'sending' ? undefined : 'close'}
        basic={this.props.status === 'sending' ? true : undefined}
      >
        {this.renderContent()}
      </Modal>
    );
  }
}

FeedbackModal.propTypes = {
  open: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired,
  status: propTypes.oneOf(['writing', 'sending', 'sent']).isRequired,
  onSubmit: propTypes.func.isRequired,
};

export default FeedbackModal;
