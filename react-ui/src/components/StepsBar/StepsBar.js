import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { NavDot } from '../.';

const Wrapper = styled.div`
  display: flex;
`;

class StepsBar extends Component {

  render() {
    const { currentStep, totalSteps } = this.props;
    const navDots = [];
    for (let i = 0; i < currentStep; i++) {
      navDots.push(<NavDot completed />);
    }
    for (let i = 0; i < totalSteps; i++) {
      navDots.push(<NavDot />);
    }
    navDots.push(<NavDot />);
    return <Wrapper>{navDots}</Wrapper>;
  }
}

StepsBar.propTypes = {
  currentStep: propTypes.number.isRequired,
  totalSteps: propTypes.number.isRequired
};

export default StepsBar;
