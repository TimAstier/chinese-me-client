import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

class Screen extends Component {

  render() {
    const { text, primary } = this.props;
    const Button = styled.button`
      width: 146px;
      height: 50px;
      border-radius: 57px;
      background-color: ${primary ? '#4990e2' : 'white'};
      outline: none;
      border: none;
      font-family: 'Open Sans';
    	font-size: 20px;
    	color: ${primary ? '#ffffff' : '#959595'};
      border: solid 1px #bfbfbf;
    `;

    return (
      <Button>
        {text}
      </Button>
    );
  }
}

Screen.propTypes = {
  text: propTypes.string.isRequired,
  primary: propTypes.bool
};

export default Screen;
