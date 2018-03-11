import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import logo from '../../images/whiteBackgroundLogo.svg';
import { Link } from 'react-router';

const Wrapper = styled.div`
  max-width: 640px;
  width: 95%;
  min-height: '${props => props.minHeight ? props.minHeight : '691px'}';
  border-radius: 10px;
	background-color: #ffffff;
	box-shadow: 0 0 33px 0 rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
`;

const HeaderLine = styled.div`
  height: 10px;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #55b6ff;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.div`
  min-height: 90px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

class OnboardingScreen extends Component {
  render() {
    return (
      <Wrapper minHeight={this.props.minHeight}>
        <HeaderLine />
        <ContentWrapper>
          {this.props.children}
        </ContentWrapper>
        <Footer>
          <Link to="/">
            <img src={logo} alt="ChineseMe logo" />
          </Link>
        </Footer>
      </Wrapper>
    );
  }
}

OnboardingScreen.propTypes = {
  children: propTypes.node,
  minHeight: propTypes.string
};

export default OnboardingScreen;
