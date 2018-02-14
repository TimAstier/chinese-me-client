import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

class ModeButton extends Component {
  render() {
    const Wrapper = styled.div`
      width: 115px;
      height: 30px;
      border-radius: 32px;
      background-color: #f2f7fa;
      font-family: 'Open Sans';
    	font-size: 14px;
    	font-weight: 600;
      border: ${this.props.active ? 'solid 2px #55b6ff' : 'none'};
    	color: ${this.props.active ? '#454545' : '#b2babf'};
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
      cursor: pointer;
    `;
    return (
      <Wrapper onClick={this.props.onClick}>
        {this.props.label}
      </Wrapper>
    );
  }
}

ModeButton.propTypes = {
  label: propTypes.string.isRequired,
  active: propTypes.bool.isRequired,
  onClick: propTypes.func.isRequired
};

export default ModeButton;
