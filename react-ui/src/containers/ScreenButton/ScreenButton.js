import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ScreenButton as ScreenButtonComponent } from '../../components';
import { connect } from 'react-redux';
import { actions as sagaActions } from '../../sagas/actions';
import { actions as uiActions } from '../../redux/ui';

class ScreenButton extends Component {

  render() {
    const mapActionToOnClick = submitAction => {
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
