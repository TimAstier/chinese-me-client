import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { HanziWrapper as HanziWrapperComponent } from '../../components';
import { actions as sagaActions } from '../../sagas/actions';

class HanziWrapper extends Component {

  render() {
    return (
      <HanziWrapperComponent { ...this.props } />
    );
  }
}

HanziWrapper.propTypes = {
  char: propTypes.string.isRequired,
  mode: propTypes.string.isRequired,
  strokeAnimationFinished: propTypes.func.isRequired,
  onQuizComplete: propTypes.func
};

export default connect(
  null,
  {
    strokeAnimationFinished: sagaActions.strokeAnimationFinished
  }
)(HanziWrapper);
