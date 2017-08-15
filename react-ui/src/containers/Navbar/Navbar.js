import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Navbar as NavbarComponent } from '../../components';
import { actions as sagaActions } from '../../sagas/actions';

class Navbar extends Component {

  navigateToSelect() {
    return () => this.props.router.push('/select');
  }

  render() {
    return (
      <NavbarComponent
        { ...this.props }
        navigateToSelect={this.navigateToSelect()}
      />
    );
  }
}

Navbar.propTypes = {
  askQuestion: propTypes.func.isRequired,
  router: propTypes.object.isRequired
};

export default connect(
  null,
  {
    askQuestion: sagaActions.askQuestion
  }
)(Navbar);
