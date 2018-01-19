import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 75px;
  height: 75px;
  background-color: #ffffff;
  border: solid 1px #FD5356;
  font-size: 40px;
  font-family: YingBi;
  display: flex;
  color: ${props => props.grey ? '#F2F2F2' : 'black'};
  justify-content: center;
  align-items: center;
`;

class CharacterBox extends Component {
  render() {
    return (
      <Wrapper grey={this.props.grey}>
        {this.props.simpChar}
      </Wrapper>
    );
  }
}

CharacterBox.propTypes = {
  simpChar: propTypes.string,
  grey: propTypes.bool
};

export default CharacterBox;
