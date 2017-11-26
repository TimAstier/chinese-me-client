import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import iconCheck from '../../images/iconCheck.svg';

const Wrapper = styled.div`
  width: 40px;
	height: 40px;
  position: relative;
	border-radius: 10px;
	background-color: #edf6fc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ChineseFont;
	font-size: 20px;
	font-weight: 900;
	color: #454545;
  margin: 7px;
  cursor: pointer;
  :hover {
    color: #55b6ff;
  };
`;

const CheckmarkWrapper = styled.div`
  position: absolute;
  margin-left: 15px;
  margin-top: -6px;
`;

class CharacterBox extends Component {

  render() {
    return (
      <Wrapper onClick={this.props.onClick}>
        {this.props.char}
        {this.props.completed &&
          <CheckmarkWrapper>
            <img src={iconCheck} alt="icon-check" />
          </CheckmarkWrapper>
        }
      </Wrapper>
    );
  }
}

CharacterBox.propTypes = {
  char: propTypes.string.isRequired,
  completed: propTypes.bool,
  onClick: propTypes.func.isRequired
};

export default CharacterBox;
