import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
	height: 40px;
	border-radius: 24px;
  color: ${props => props.paused ? '#ffffff' : '#b2babf'};
  border: ${props => props.paused ? 'none' : 'solid 1px #cdd6db'};
	background-color: ${props => props.paused ? '#55b6ff' : '#ffffff'};
  :hover {
    opacity: 0.92;
  }
  cursor: pointer;
`;

const Pause = styled.div`
  font-size: 10px;
  padding-right: 4px;
`;

const Play = styled.div`

`;

class PauseButton extends Component {
  render() {
    return (
      <Wrapper onClick={this.props.onClick} paused={this.props.paused}>
        {this.props.paused ? <Play>&#9658;</Play> : <Pause>&#9616;&#9616;</Pause> }
      </Wrapper>
    );
  }
}

PauseButton.propTypes = {
  onClick: propTypes.func.isRequired,
  paused: propTypes.bool.isRequired
};

export default PauseButton;
