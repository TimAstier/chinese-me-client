import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
// import { showFlashMessageWithTimeout } from '../redux/flashMessages';
import selectors from '../rootSelectors';

// High Order Component

export default function(ComposedComponent) {
  class Authenticate extends Component {
    componentDidMount() {
      if (!this.props.isAuthenticated) {
        // this.props.showFlashMessageWithTimeout({
        //   type: 'error',
        //   text: 'You need to login to access this page.'
        // }, 5000);
        this.props.router.replace('/signup');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this.context.router.replace('/signup');
      }
    }

    render() {
      return this.props.isAuthenticated ?
        <ComposedComponent {...this.props} />
        : null;
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: propTypes.bool.isRequired,
    // showFlashMessageWithTimeout: PropTypes.func.isRequired,
    router: propTypes.object.isRequired,
  };

  Authenticate.contextTypes = {
    router: propTypes.object.isRequired
  };

  function mapStateToProps(state) {
    return {
      isAuthenticated: selectors.getIsAuthenticated(state)
    };
  }

  return connect(mapStateToProps)(Authenticate);
}
