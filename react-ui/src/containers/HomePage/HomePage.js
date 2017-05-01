import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Message, Image, Button } from 'semantic-ui-react';
import logo from '../../logo.png';
import { getIsAuthenticated } from '../../redux/auth';

class HomePage extends Component {
  render() {
    const message = this.props.isAuthenticated
      ? 'Welcome back to ChineseMe!'
      : 'Welcome to ChineseMe';
    return (
      <div id="home-screen">
        <Message
          size="massive"
          className="center"
          id="greetings"
        >
          {message}
        </Message>
        {this.props.isAuthenticated ?
          <Link to="/study" className="item color">
            <Image
              id="home-logo"
              src={logo}
              alt="ChineseMe logo"
              shape="circular"
              centered
            />
            <Button id="get-started-btn" primary>Continue</Button>
          </Link>
          :
          <Image
            id="home-logo"
            src={logo}
            alt="ChineseMe logo"
            shape="circular"
            centered
          />
        }
      </div>
    );
  }
}

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: getIsAuthenticated(state)
  };
}

export default connect(mapStateToProps)(HomePage);
