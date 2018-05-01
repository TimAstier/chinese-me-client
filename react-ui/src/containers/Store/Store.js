import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Immutable from 'immutable';
import { Store as StoreComponent } from '../../components';
import s from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';

class Store extends Component {
  initialized() {
    return this.props.userSettings.get('giftCode') !== undefined;
  }

  render() {
    return (
      <StoreComponent
        userEmail={ this.props.userEmail }
        seasons={ this.props.seasons }
        initialized={ this.initialized() }
        giftCode={ this.props.userSettings ?
          this.props.userSettings.get('giftCode')
          : false
        }
        unlockSeason={this.props.unlockSeason}
      />
    );
  }
}

const mapStateToProps = state => ({
  userEmail: s.auth.getCurrentUserEmail(state),
  seasons: s.entities.getSeasons(state),
  userSettings: s.settings.getSettings(state)
});

Store.propTypes = {
  userEmail: propTypes.string.isRequired,
  seasons: propTypes.instanceOf(Immutable.OrderedMap).isRequired,
  userSettings: propTypes.object.isRequired,
  unlockSeason: propTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  {
    unlockSeason: sagaActions.unlockSeason
  }
)(Store);
