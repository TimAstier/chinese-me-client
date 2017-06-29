import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
`;

const Label = styled.div`
  width: 290px;
  height: 68px;
  border-radius: 61px;
  background-color: #f3f3f3;
  font-family: 'Open Sans';
	font-size: 30px;
	color: #959595;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  font-family: 'STHeiTi';
  font-size: 90px;
	color: #454545;
`;

class Title extends Component {

  render() {
    return (
      <Wrapper>
        <TopWrapper>
          <Label>{'Part ' + this.props.partNumber}</Label>
        </TopWrapper>
        <BottomWrapper>
          <Header>{this.props.title}</Header>
        </BottomWrapper>
      </Wrapper>
    );
  }
}

Title.propTypes = {
  partNumber: propTypes.number.isRequired,
  title: propTypes.string.isRequired
};

export default Title;
