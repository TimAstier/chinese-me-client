import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Navbar as NavbarComponent } from '../../components';
import { actions as sagaActions } from '../../sagas/actions';
import { actions as uiActions } from '../../redux/ui';

class Navbar extends Component {
  render() {
    return <NavbarComponent { ...this.props } />;
  }
}

Navbar.propTypes = {
  askQuestion: propTypes.func.isRequired,
  openMapModal: propTypes.func.isRequired
};

export default connect(
  null,
  {
    askQuestion: sagaActions.askQuestion,
    openMapModal: uiActions.openMapModal,
  }
)(Navbar);
