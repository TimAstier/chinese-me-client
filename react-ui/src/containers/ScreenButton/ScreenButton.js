import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ScreenButton as ScreenButtonComponent } from '../../components';
import { connect } from 'react-redux';
import { actions } from '../../sagas/actions';

class ScreenButton extends Component {

  render() {
    const mapActionToOnClick = submitAction => {
      if (this.props.disabled) {
        return () => {};
      }
      switch (submitAction) {
        case 'next': return this.props.next;
        case 'skip': return this.props.skip;
        default: return () => {};
      }
    };

    return (
      <ScreenButtonComponent
        text={this.props.text}
        onClick={mapActionToOnClick(this.props.action)}
        primary={this.props.primary}
        disabled={this.props.disabled}
      />
    );
  }
}

ScreenButton.propTypes = {
  text: propTypes.string.isRequired,
  primary: propTypes.bool,
  disabled: propTypes.bool,
  action: propTypes.oneOf(['next', 'skip']),
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
