import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import iconCheck from '../../images/iconCheck.svg';

const Wrapper = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  color: #454545;
  :hover {
    color: ${props => props.onClick ? '#55b6ff' : 'none'};
  }
  cursor: ${props => props.onClick ? 'pointer' : 'normal'};
`;


const CheckmarkWrapper = styled.div`
  flex-basis: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleWrapper = styled.div`
  font-family: 'STKaitiSC';
  flex-grow: 1;
  display: flex;
  align-items: center;
	height: 20px;
	font-size: 18px;
	font-weight: 900;
`;

class MapItem extends Component {
  render() {
    return (
      <Wrapper onClick={this.props.onClick}>
        <CheckmarkWrapper>
          {this.props.completed && <img src={iconCheck} alt="icon-check" />}
        </CheckmarkWrapper>
        <TitleWrapper>{this.props.title}</TitleWrapper>
      </Wrapper>
    );
  }
}

MapItem.propTypes = {
  title: propTypes.string.isRequired,
  completed: propTypes.bool,
  onClick: propTypes.func
};

export default MapItem;
