import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Navbar as NavbarComponent } from '../../components';
import { actions as sagaActions } from '../../sagas/actions';
import { actions as uiActions } from '../../redux/ui';
import s from '../../rootSelectors';

class Navbar extends Component {
  render() {
    return (
      <NavbarComponent
        { ...this.props }
      />
    );
  }
}

Navbar.propTypes = {
  askQuestion: propTypes.func.isRequired,
  openMapModal: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired,
  logout: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: s.auth.getIsAuthenticated(state)
});

export default connect(
  mapStateToProps,
  {
    askQuestion: sagaActions.askQuestion,
    openMapModal: uiActions.openMapModal,
    logout: sagaActions.logout
  }
)(Navbar);
