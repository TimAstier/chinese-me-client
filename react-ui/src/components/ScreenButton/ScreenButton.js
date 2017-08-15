import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

class Screen extends Component {

  render() {
    const { text, primary, disabled } = this.props;

    const hoverBackgroundColor = () => {
      if (disabled) return 'none';
      return primary ? '#4ea7eb' : '#f2f7fa';
    };

    const activeBackgroundColor = () => {
      if (disabled) return 'none';
      return primary ? '#4799d7' : '#cdd6db';
    };

    const Button = styled.button`
      width: 146px;
      height: 48px;
      border-radius: 57px;
      background-color: ${ primary ? '#55b6ff' : '#ffffff' };
      outline: none;
      border: none;
      font-family: 'Open Sans';
    	font-size: 20px;
    	color: ${ primary ? '#ffffff' : '#959595' };
      border: ${ primary ? 'none' : 'solid 1px #cdd6db' };
      opacity: ${ disabled ? 0.3 : 1 };
      cursor: ${ disabled ? 'default' : 'pointer' };
      :hover {
        background-color: ${ hoverBackgroundColor() };
      }
      :active {
        background-color: ${ activeBackgroundColor() };
      }
    `;

    return (
      <Button
        onClick={this.props.onClick}
      >
        {text}
      </Button>
    );
  }
}

Screen.propTypes = {
  text: propTypes.string.isRequired,
  primary: propTypes.bool,
  disabled: propTypes.bool,
  onClick: propTypes.func.isRequired
};

export default Screen;
