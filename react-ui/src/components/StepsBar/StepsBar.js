import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { NavDot } from '../.';

const Wrapper = styled.div`
  display: flex;
`;

class StepsBar extends Component {

  render() {
    const { currentStep, stepIds } = this.props;
    const navDots = [];
    for (let i = 0; i < stepIds.length; i++) {
      navDots.push(
        <NavDot
          completed={i <= currentStep ? true : false}
          key={i}
          id={stepIds[i]}
          switchStatement={this.props.switchStatement}
          clickable={this.props.clickable}
        />);
    }
    return <Wrapper>{navDots}</Wrapper>;
  }
}

StepsBar.propTypes = {
  currentStep: propTypes.number.isRequired,
  stepIds: propTypes.arrayOf(propTypes.number).isRequired,
  switchStatement: propTypes.func.isRequired,
  clickable: propTypes.bool.isRequired
};

export default StepsBar;
