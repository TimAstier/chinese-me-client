import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { StepsBar as StepsBarComponent } from '../components';
import { actions } from '../redux/study';

class StepsBar extends Component {

  render() {
    return (
      <StepsBarComponent { ...this.props } />
    );
  }
}

StepsBar.propTypes = {
  currentStep: propTypes.number.isRequired,
  stepIds: propTypes.arrayOf(propTypes.number).isRequired,
  switchStatement: propTypes.func.isRequired
};

export default connect(
  null,
  {
    switchStatement: actions.switchStatement
  }
)(StepsBar);
