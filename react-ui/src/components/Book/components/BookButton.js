import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Clickable } from '../../Shared';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  width: 35px;
	height: 35px;
  :hover {
    background-color: #F2F7FA;
  }
`;

const Img = styled.img`
  max-width:80%;
  max-height:80%;
`;

class BookButton extends Component {

  render() {
    return (
      <Clickable>
        <Wrapper onClick={this.props.onClick}>
          <Img src={this.props.image} />
        </Wrapper>
      </Clickable>
    );
  }
}

BookButton.propTypes = {
  onClick: propTypes.func.isRequired,
  image: propTypes.string.isRequired
};

export default BookButton;
