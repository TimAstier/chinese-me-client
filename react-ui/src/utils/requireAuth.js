import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
// import { showFlashMessageWithTimeout } from '../redux/flashMessages';
import selectors from '../rootSelectors';
import swal from 'sweetalert';

// High Order Component

export default function(ComposedComponent) {
  class Authenticate extends Component {
    componentDidMount() {
      if (!this.props.isAuthenticated) {
        this._redirectUser();
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        this._redirectUser();
      }
    }

    _redirectUser() {
      return swal({
        title: 'ChineseMe account required',
        text: 'This part of the course requires students to log in.\n\n This allows us to save your progression and make sure we can provide you with personalised support to assist you in your study of the Chinese language.\n\nIf you don\'t want to create an account now, no worry! You can register later if you want to.',
        icon: 'info',
        buttons: ['Back to the course', 'Register']
      }).then(register => {
        if (register) {
          return this.props.router.replace('/signup');
        }
        return this.props.router.replace('/');
      });
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
      isAuthenticated: selectors.auth.getIsAuthenticated(state)
    };
  }

  return connect(mapStateToProps)(Authenticate);
}
