import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { SignupForm } from '../../components';
import { userSignupRequest, isUserExists } from '../../redux/signup';
import { showFlashMessageWithTimeout } from '../../redux/flashMessages';

class SignupPage extends Component {
  render() {
    const { userSignupRequest, showFlashMessageWithTimeout,
      isUserExists } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm
            isUserExists={isUserExists}
            userSignupRequest={userSignupRequest}
            showFlashMessageWithTimeout={showFlashMessageWithTimeout}
          />
        </div>
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
