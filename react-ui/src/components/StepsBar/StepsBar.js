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
    let key = 0;
    for (let i = 1; i <= currentStep; i++) {
      navDots.push(<NavDot completed key={key} />);
      key++;
    }
    for (let i = key + 1; i <= totalSteps; i++) {
      navDots.push(<NavDot key={key} />);
      key++;
    }
    return <Wrapper>{navDots}</Wrapper>;
  }
}

StepsBar.propTypes = {
  currentStep: propTypes.number.isRequired,
  totalSteps: propTypes.number.isRequired
};

export default StepsBar;
