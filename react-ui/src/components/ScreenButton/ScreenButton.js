import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

class Screen extends Component {

  render() {
    const { text, primary, disabled } = this.props;
    const Button = styled.button`
      width: 146px;
      height: 50px;
      border-radius: 57px;
      background-color: ${ primary ? '#4990e2' : 'white' };
      outline: none;
      border: none;
      font-family: 'Open Sans';
    	font-size: 20px;
    	color: ${ primary ? '#ffffff' : '#959595' };
      border: solid 1px #bfbfbf;
      opacity: ${ disabled ? 0.3 : 1 };
      cursor: ${ disabled ? 'default' : 'pointer' };
    `;

    return (
      <Button onClick={this.props.onClick}>
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
