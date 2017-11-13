import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { actions as sagaActions } from '../../../sagas/actions';
import { bookComponents as c } from '../../../components';

class Link extends Component {

  _handleClick() {
    switch (this.props.type) {
      case 'askUserData':
        return this.props.askUserData;
      default:
        return () => console.log('Unknown link type');
    }
  }

  render() {
    return (
      <c.Link
        handleClick={this._handleClick()}
        children={ this.props.children}
      />
    );
  }
}

Link.propTypes = {
  type: propTypes.oneOf(['askUserData']).isRequired,
  askUserData: propTypes.func.isRequired,
  children: propTypes.node.isRequired
};

export default connect(
  null,
  {
    askUserData: sagaActions.askUserData
  }
)(Link);
