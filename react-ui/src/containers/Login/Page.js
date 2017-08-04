import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { LoginPage as LoginPageComponent } from '../../components';
import { actions } from '../../sagas/actions';

class Page extends Component {
  // From a thread 'integrate redux-sagas with redux-form'
  // https://github.com/redux-saga/redux-saga/issues/161
  onSubmit(values) {
    return new Promise((resolve, reject) => {
      return this.props.loginRequest({ values, resolve, reject });
    });
  }

  render() {
    return (
      <LoginPageComponent onSubmit={this.onSubmit.bind(this)} />
    );
  }
}

Page.propTypes = {
  loginRequest: propTypes.func.isRequired
};

export default connect(
  null,
  {
    loginRequest: actions.loginRequest
  }
)(Page);
