import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { FeedbackModal as FeedbackModalComponent } from '../../components';
import selectors from '../../rootSelectors';
import { actions as uiActions } from '../../redux/ui';
import { actions as sagaActions } from '../../sagas/actions';

class FeedbackModal extends Component {
  onSubmit(values) {
    return new Promise((resolve, reject) => {
      return this.props.sendFeedback({ values, resolve, reject });
    });
  }

  render() {
    return (
      <FeedbackModalComponent
        { ...this.props }
        onSubmit={ this.onSubmit.bind(this) }
      />
    );
  }
}

FeedbackModal.propTypes = {
  open: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired,
  status: propTypes.oneOf(['writing', 'sending', 'sent']).isRequired,
  sendFeedback: propTypes.func.isRequired,
};

const mapStateToProps = state => ({
  open: selectors.getOpenFeedbackModal(state),
  status: selectors.getFeedbackStatus(state)
});

export default connect(
  mapStateToProps,
  {
    handleClose: uiActions.closeFeedbackModal,
    sendFeedback: sagaActions.sendFeedback
  }
)(FeedbackModal);
