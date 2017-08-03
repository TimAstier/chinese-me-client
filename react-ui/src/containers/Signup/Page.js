import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { SignupPage as SignupPageComponent } from '../../components';
import { actions } from '../../sagas/actions';

class Page extends Component {
  // From a thread 'integrate redux-sagas with redux-form'
  // https://github.com/redux-saga/redux-saga/issues/161
  onSubmit(values) {
    return new Promise((resolve, reject) => {
      return this.props.createNewUser({ values, resolve, reject });
    });
  }

  render() {
    return (
      <SignupPageComponent onSubmit={this.onSubmit.bind(this)} />
    );
  }
}

Page.propTypes = {
  createNewUser: propTypes.func.isRequired
};

export default connect(
  null,
  {
    createNewUser: actions.createNewUser
  }
)(Page);
