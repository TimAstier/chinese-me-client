import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { get as getChar } from '../../redux/chars';

class ResourceScreen extends Component {

  render() {
    // Allow to pass props along with children coming from react-router
    // See following link for case with multiple children
    // http://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children

    // const childrenWithProps = React.cloneElement(this.props.children, { ...grammarProps });
    const charProps = {
      getChar: this.props.getChar.bind(this),
      char: this.props.char,
      isFetching: this.props.isFetching
    };

    const childrenWithProps = React.cloneElement(this.props.children, charProps);
    return (
      <div id="resource-screen">
        <div id="main-content">
          {childrenWithProps}
        </div>
      </div>
    );
  }
}

ResourceScreen.propTypes = {
  children: PropTypes.node,
  getChar: PropTypes.func.isRequired,
  char: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

function MapStateToProps(state) {
  return {
    char: state.get('chars').get('char'),
    isFetching: state.get('chars').get('isFetching')
  };
}

export default connect(MapStateToProps, { getChar })(ResourceScreen);
