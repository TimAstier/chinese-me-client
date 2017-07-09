import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ScreenButton as ScreenButtonComponent } from '../../components';
import { connect } from 'react-redux';
import { actions } from '../../redux/study';

class ScreenButton extends Component {

  render() {
    const onClick = this.props.primary ? this.props.next : this.props.skip;
    return (
      <ScreenButtonComponent
        text={this.props.text}
        primary={this.props.primary}
        onClick={onClick}
      />
    );
  }
}

ScreenButton.propTypes = {
  text: propTypes.string.isRequired,
  primary: propTypes.bool,
  next: propTypes.func.isRequired,
  skip: propTypes.func.isRequired
};

export default connect(
  null,
  {
    next: actions.next,
    skip: actions.skip
  }
)(ScreenButton);
