import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

class ChoiceBox extends Component {
  border() {
    if (this.props.correct) {
      return 'solid 2px #91ca49';
    } else if (this.props.wrong) {
      return 'solid 2px #cdd6db';
    } else if (this.props.focused) {
      return 'solid 2px #55b6ff';
    }
    return 'none';
  }

  boxShadow() {
    if (this.props.correct) {
      return '0 0 7px 0 rgba(145, 202, 73, 0.5)';
    } else if (this.props.focused) {
      return '0 0 7px 0 rgba(85, 182, 255, 0.5)';
    } else if (this.props.disabled) {
      return 'none';
    }
    return '0 0 7px 0 rgba(0, 0, 0, 0.1)';
  }

  backgroundColor() {
    if (this.props.disabled) {
      return '#f2f7fa';
    }
    return '#ffffff';
  }

  color() {
    if (this.props.disabled) {
      return '#b2babf';
    }
    return '#454545';
  }

  render() {
    const Wrapper = styled.div`
      height: 58px;
      min-width: 250px;
      max-width: 400px;
      border-radius: 48px;
      background-color: ${this.backgroundColor()};
      box-shadow: ${this.boxShadow()};
      border: ${this.border()};
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      font-family: 'STKaitiSC';
    	font-size: ${this.props.fontSize};
    	font-weight: bold;
    	color: ${this.color()};
      cursor: pointer;
      margin-top: 5px;
      margin-bottom: 10px;
      padding-right: 20px;
      padding-left: 20px;
    `;

    return (
      <Wrapper onClick={this.props.onClick}>
        {this.props.label}
      </Wrapper>
    );
  }
}

ChoiceBox.propTypes = {
  label: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  focused: propTypes.bool,
  disabled: propTypes.bool,
  wrong: propTypes.bool,
  correct: propTypes.bool,
  fontSize: propTypes.string.isRequired
};

export default ChoiceBox;
