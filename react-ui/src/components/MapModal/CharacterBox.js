import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const Wrapper = styled.div`
  width: 40px;
	height: 40px;
	border-radius: 10px;
	background-color: #edf6fc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'STKaitiSC';
	font-size: 18px;
	font-weight: 900;
	color: #454545;
  margin: 7px;
  cursor: pointer;
  :hover {
    color: #55b6ff;
  }
`;

const CheckmarkWrapper = styled.div`
  position: absolute;
  margin-left: 15px;
  margin-top: -6px;
`;

class CharacterBox extends Component {

  render() {
    return (
      <Wrapper>
        {this.props.char}
        {this.props.completed &&
          <CheckmarkWrapper>
            <Icon name="checkmark" color="green" size="small"/>
          </CheckmarkWrapper>
        }
      </Wrapper>
    );
  }
}

CharacterBox.propTypes = {
  char: propTypes.string.isRequired,
  completed: propTypes.bool
};

export default CharacterBox;
