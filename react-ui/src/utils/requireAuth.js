import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// import { showFlashMessageWithTimeout } from '../redux/flashMessages';
import selectors from '../rootSelectors';

// Example of High Order Component

export default function(ComposedComponent) {
  class Authenticate extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        // this.props.showFlashMessageWithTimeout({
        //   type: 'error',
        //   text: 'You need to login to access this page.'
        // }, 5000);
        this.props.router.push('/login');
      }
    }

    // componentWillUpdate(nextProps) {
    //   if (!nextProps.isAuthenticated) {
    //     this.context.router.push('/');
    //   }
    // }

    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }

  Authenticate.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    // showFlashMessageWithTimeout: PropTypes.func.isRequired,
    router: PropTypes.object.isRequired,
  };

  Authenticate.contextTypes = {
    router: React.PropTypes.object.isRequired
  };

  function mapStateToProps(state) {
    return {
      isAuthenticated: selectors.getIsAuthenticated(state)
    };
  }

  return connect(mapStateToProps)(Authenticate);
}
