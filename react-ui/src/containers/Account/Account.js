import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Account as AccountComponent } from '../../components';
import s from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';

class Account extends Component {
  initialized() {
    return this.props.userSettings.get('giftCode') !== undefined;
  }

  onGiftCodeSubmit(values) {
    return new Promise((resolve, reject) => {
      return this.props.activateGiftCode({ values, resolve, reject });
    });
  }

  render() {
    return (
      <AccountComponent
        initialized={ this.initialized() }
        userEmail={ this.props.userEmail }
        createdAt={ this.props.createdAt }
        giftCodeActivated={ this.props.userSettings ?
          this.props.userSettings.get('giftCode')
          : false
        }
        onGiftCodeSubmit={ this.onGiftCodeSubmit.bind(this) }
      />
    );
  }
}

const mapStateToProps = state => ({
  userEmail: s.auth.getCurrentUserEmail(state),
  createdAt: s.auth.getCurrentUserCreatedAt(state),
  userSettings: s.settings.getSettings(state)
});

Account.propTypes = {
  userEmail: propTypes.string.isRequired,
  createdAt: propTypes.string.isRequired,
  userSettings: propTypes.object.isRequired,
  activateGiftCode: propTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  {
    activateGiftCode: sagaActions.activateGiftCode
  }
)(Account);
