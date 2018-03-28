import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ScreenButton as ScreenButtonComponent } from '../../components';
import { connect } from 'react-redux';
import { actions as sagaActions } from '../../sagas/actions';
import { actions as uiActions } from '../../redux/ui';
import s from '../../rootSelectors';

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
    // when the action is passed directly through the onClick prop
    if (!submitAction) {
      return this.props.onClick;
    }
    switch (submitAction) {
      case 'next':
        // This prevents calling nextScreen while doing practice
        return this.props.isReviewInitialized ? this.props.nextQuestion : this.props.next;
      case 'closeHintModal': return this.props.handleCloseHintModal;
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
        loading={this.props.loading}
      />
    );
  }
}

ScreenButton.propTypes = {
  text: propTypes.string.isRequired,
  primary: propTypes.bool,
  disabled: propTypes.bool,
  action: propTypes.oneOf(['next', 'closeHintModal', 'checkAnswer']),
  next: propTypes.func.isRequired,
  handleCloseHintModal: propTypes.func.isRequired,
  checkAnswer: propTypes.func.isRequired,
  onClick: propTypes.func,
  isReviewInitialized: propTypes.bool.isRequired,
  nextQuestion: propTypes.func.isRequired,
  loading: propTypes.bool
};

const mapStateToProps = state => ({
  isReviewInitialized: s.practice.getInitialized(state)
});

export default connect(
  mapStateToProps,
  {
    next: sagaActions.next,
    handleCloseHintModal: uiActions.closeHintModal,
    checkAnswer: sagaActions.checkAnswer,
    nextQuestion: sagaActions.nextQuestion
  }
)(ScreenButton);
