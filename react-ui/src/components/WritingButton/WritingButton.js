import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Clickable } from '../Shared';
import image from '../../images/handWithPen.png';

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
`;

class WritingButton extends Component {

  render() {
    return (
      <Clickable>
        <Wrapper onClick={this.props.onClick}>
          <img src={image} />
        </Wrapper>
      </Clickable>
    );
  }
}

WritingButton.propTypes = {
  onClick: propTypes.func.isRequired
};

export default WritingButton;
