import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { SignupForm } from '../../components';
import { userSignupRequest, isUserExists } from './operations';
import { showFlashMessageWithTimeout } from '../../redux/flashMessages';

class SignupPage extends Component {
  render() {
    const { userSignupRequest, showFlashMessageWithTimeout,
      isUserExists } = this.props;
    return (
      <div className="page">
        <SignupForm
          isUserExists={isUserExists}
          userSignupRequest={userSignupRequest}
          showFlashMessageWithTimeout={showFlashMessageWithTimeout}
        />
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  showFlashMessageWithTimeout: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
};

export default connect(
  null,
  { userSignupRequest, showFlashMessageWithTimeout, isUserExists }
)(SignupPage);
