import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/auth';
import { LoginForm } from '../../components';

class LoginPage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <LoginForm login={this.props.login}/>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);
