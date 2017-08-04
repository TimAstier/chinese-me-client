import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { FeedbackModal as FeedbackModalComponent } from '../../components';
import selectors from '../../rootSelectors';
import { actions as uiActions } from '../../redux/ui';

class FeedbackModal extends Component {

  render() {
    return (
      <FeedbackModalComponent { ...this.props } />
    );
  }
}

FeedbackModal.propTypes = {
  open: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired,
  status: propTypes.oneOf(['writing', 'sending', 'sent']).isRequired
};

const mapStateToProps = state => ({
  open: selectors.getOpenFeedbackModal(state),
  status: selectors.getFeedbackStatus(state)
});

export default connect(
  mapStateToProps,
  {
    handleClose: uiActions.closeFeedbackModal
  }
)(FeedbackModal);
