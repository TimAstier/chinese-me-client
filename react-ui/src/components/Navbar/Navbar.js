import React, { Component } from 'react';
import propTypes from 'prop-types';
import Media from 'react-media';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

class Navbar extends Component {
  render() {
    return (
      <Media query="(max-width: 800px)">
        { matches =>
          matches
          ? (<MobileNavbar { ...this.props } />)
          : (<DesktopNavbar { ...this.props } />)
        }
      </Media>
    );
  }
}

Navbar.propTypes = {
  askQuestion: propTypes.func.isRequired,
  openMapModal: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired,
  logout: propTypes.func.isRequired
};

export default Navbar;
