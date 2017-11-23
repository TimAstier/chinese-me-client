import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { LoginForm, OnboardingScreen } from '../.';
import { Bold, Link as LinkComponent } from '../Shared';
import { Link } from 'react-router';

// TODO: DRY this with login form

const TitleWrapper = styled.div`
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: 'Open Sans';
	font-size: 30px;
	font-weight: 300;
	line-height: 1.5;
	color: #454545;
`;

const Footer = styled.div`
  flex-grow: 1;
  padding-top: 30px;
  text-align: center;
`;

const FooterText = styled.div`
  font-family: 'Open Sans';
  font-size: 16px;
  line-height: 3;
  color: #bfbfbf;
`;

class Page extends Component {

  render() {
    return (
      <OnboardingScreen>
        <TitleWrapper>
          <p><Bold>Log in</Bold> to your ChineseMe account</p>
        </TitleWrapper>
        <LoginForm onSubmit={this.props.onSubmit} />
        <Footer>
          <FooterText>
            <p>
              Don't have an account yet?
              <LinkComponent><Link to="/signup"> Sign up.</Link></LinkComponent>
            </p>
          </FooterText>
          <FooterText><LinkComponent>Forgot your password?</LinkComponent></FooterText>
        </Footer>
      </OnboardingScreen>
    );
  }
}

Page.propTypes = {
  onSubmit: propTypes.func.isRequired
};

export default Page;
