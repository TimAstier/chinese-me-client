import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { TakeMoney as TakeMoneyComponent } from '../../components';
import { actions as sagaActions } from '../../sagas/actions';

class TakeMoney extends Component {
  render() {
    return (
      <TakeMoneyComponent { ...this.props } />
    );
  }
}

TakeMoney.propTypes = {
  reloadApp: propTypes.func.isRequired
};

export default connect(
  null,
  {
    reloadApp: sagaActions.reloadApp
  }
)(TakeMoney);
