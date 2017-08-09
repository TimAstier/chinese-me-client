import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { actions as sagaActions } from '../../sagas/actions';

class SignupActivate extends Component {
  componentWillMount() {
    const activationToken = this.props.routeParams.activationToken;
    return this.props.activate(activationToken);
  }

  render() {
    return (
      <div></div>
    );
  }
}

SignupActivate.propTypes = {
  activate: propTypes.func.isRequired,
  routeParams: propTypes.object.isRequired
};

export default connect(
  null,
  {
    activate: sagaActions.activate
  }
)(SignupActivate);
