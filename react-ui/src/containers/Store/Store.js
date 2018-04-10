import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Immutable from 'immutable';
import { Store as StoreComponent } from '../../components';
import s from '../../rootSelectors';

class Store extends Component {
  render() {
    return (
      <StoreComponent
        userEmail={this.props.userEmail}
        seasons={this.props.seasons}
      />
    );
  }
}

const mapStateToProps = state => ({
  userEmail: s.auth.getCurrentUserEmail(state),
  seasons: s.entities.getSeasons(state)
});

Store.propTypes = {
  userEmail: propTypes.string.isRequired,
  seasons: propTypes.instanceOf(Immutable.OrderedMap).isRequired
};

export default connect(
  mapStateToProps
)(Store);
