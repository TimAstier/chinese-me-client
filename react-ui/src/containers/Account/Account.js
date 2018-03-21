import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Account as AccountComponent } from '../../components';
import s from '../../rootSelectors';

class Account extends Component {
  render() {
    return (
      <AccountComponent
        userEmail={this.props.userEmail}
      />
    );
  }
}

const mapStateToProps = state => ({
  userEmail: s.auth.getCurrentUserEmail(state)
});

Account.propTypes = {
  userEmail: propTypes.string.isRequired
};

export default connect(
  mapStateToProps
)(Account);
