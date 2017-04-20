import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/auth';
import { LoginForm } from '../../components';
import { showFlashMessageWithTimeout } from '../../redux/flashMessages';

class LoginPage extends Component {
  render() {
    return (
      <div className="page">
        <LoginForm
          login={this.props.login}
          showFlashMessageWithTimeout={this.props.showFlashMessageWithTimeout}
        />
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  showFlashMessageWithTimeout: PropTypes.func.isRequired
};

export default connect(null, { login, showFlashMessageWithTimeout })(LoginPage);
