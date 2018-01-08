import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import replayIcon from '../../images/replayIcon.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 40px;
	height: 40px;
	border-radius: 24px;
  border: solid 1px #cdd6db;
  :hover {
    background-color: #F2F7FA;
  }
  cursor: pointer;
`;

class HanziAgainButton extends Component {
  render() {
    if (this.props.hidden) {
      return null;
    }
    return (
      <Wrapper onClick={this.props.onClick}>
        <img src={replayIcon} alt=""/>
      </Wrapper>
    );
  }
}

HanziAgainButton.propTypes = {
  onClick: propTypes.func.isRequired,
  hidden: propTypes.bool.isRequired
};

export default HanziAgainButton;
