import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

class Screen extends Component {
  render() {
    const { text, primary, disabled, height, width, fontSize } = this.props;

    const hoverBackgroundColor = () => {
      if (disabled) return 'none';
      return primary ? '#4ea7eb' : '#f2f7fa';
    };

    const activeBackgroundColor = () => {
      if (disabled) return 'none';
      return primary ? '#4799d7' : '#cdd6db';
    };

    const Button = styled.button`
      width: ${ width ? `${width}px` : '146px' };
      height: ${ height ? `${height}px` : '48px' };
      @media (max-width: 500px) {
        width: ${ width ? `${width}px` : '120px' };
        height: ${ height ? `${height}px` : '45px' };
      }
      border-radius: 57px;
      @media (max-width: 500px) {
        border-radius: 43px;
      }
      background-color: ${ primary ? '#55b6ff' : '#ffffff' };
      outline: none;
      border: none;
      font-family: 'Open Sans';
    	font-size: ${ fontSize ? `${fontSize}px` : '20px' };
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
      display: flex;
      justify-content: center;
      align-items: center;
      ${''/* For safari:  */}
      display: -webkit-box;
      -webkit-box-pack: center; /* justify-content */
      -webkit-box-align: center; /* align-items */
      img {
        margin-right: 10px;
      }
    `;
    return (
      <Button
        onClick={this.props.onClick}
        data={this.props.data}
      >
        {
          this.props.icon &&
            <img src={this.props.icon} alt="" width="20px" />
        }
        {text}
      </Button>
    );
  }
}

Screen.propTypes = {
  text: propTypes.string.isRequired,
  primary: propTypes.bool,
  disabled: propTypes.bool,
  onClick: propTypes.func,
  height: propTypes.number,
  width: propTypes.number,
  fontSize: propTypes.number,
  data: propTypes.string,
  icon: propTypes.string
};

export default Screen;
