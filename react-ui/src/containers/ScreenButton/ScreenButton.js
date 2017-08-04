import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ScreenButton as ScreenButtonComponent } from '../../components';
import { connect } from 'react-redux';
import { actions as sagaActions } from '../../sagas/actions';
import { actions as uiActions } from '../../redux/ui';

// Note:
// ScreenButtons with the primary prop are mounted with an eventListener
// which allow to triger the associated onClick function via enter key
// There should never be more than ONE primary button on a screen.

class ScreenButton extends Component {
  constructor() {
    super();
    this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
  }

  componentDidMount() {
    if (this.props.primary) {
      document.addEventListener('keydown', this.handleEnterKeyPress);
    }
  }

  componentWillUnmount() {
    if (this.props.primary) {
      document.removeEventListener('keydown', this.handleEnterKeyPress);
    }
  }

  mapActionToOnClick(submitAction) {
    if (this.props.disabled) {
      return () => {};
    }
    switch (submitAction) {
      case 'next': return this.props.next;
      case 'skip': return this.props.skip;
      case 'closeModal': return this.props.handleCloseModal;
      case 'checkAnswer': return this.props.checkAnswer;
      default: return () => {};
    }
  }

  handleEnterKeyPress(event) {
    if (event.keyCode === 13 && !this.props.disabled) {
      return this.mapActionToOnClick(this.props.action).bind(this)();
    }
    return null;
  }

  render() {
    return (
      <ScreenButtonComponent
        text={this.props.text}
        onClick={this.mapActionToOnClick(this.props.action).bind(this)}
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
  action: propTypes.oneOf(['next', 'skip', 'closeModal', 'checkAnswer']),
  next: propTypes.func.isRequired,
  skip: propTypes.func.isRequired,
  handleCloseModal: propTypes.func.isRequired,
  checkAnswer: propTypes.func.isRequired
};

export default connect(
  null,
  {
    next: sagaActions.next,
    skip: sagaActions.skip,
    handleCloseModal: uiActions.closeModal,
    checkAnswer: sagaActions.checkAnswer
  }
)(ScreenButton);
