import React, { Component, PropTypes } from 'react';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth';
import logo from '../../logo.png';

class NavigationBar extends Component {

  logout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <Menu.Menu position="right" className="main-menu-link">
        <Menu.Item>
          <Button
            as={Link}
            to="#"
            basic
            inverted
            onClick={this.logout.bind(this)}>
            <Icon name="power"/>Logout
          </Button>
        </Menu.Item>
      </Menu.Menu>
    );

    const guestLinks = (
      <Menu.Menu position="right" className="main-menu-link">
        <Menu.Item>
          <Button as={Link} to="/signup" primary inverted >
            <Icon name="pencil"/>
            Signup
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button as={Link} to="/login" secondary inverted >
            <Icon name="user"/>
            Login
          </Button>
        </Menu.Item>
      </Menu.Menu>
    );

    return (
    <Menu id="navbar" inverted>
      <Menu.Item>
        <img
          className="logo"
          src={logo}
          alt="ChineseMe logo"
        />
      </Menu.Item>
      <Link
        to={ isAuthenticated ? '/app' : '/' }
        className="item header main-menu-header"
      >
        ChineseMe
      </Link>
      { isAuthenticated ? userLinks : guestLinks }
    </Menu>
    );
  }
}

NavigationBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.get('auth').toJS()
  };
}

// { logout } is a mapDispatchToProps shortcut
export default connect(
  mapStateToProps,
  { logout }
)(NavigationBar);
