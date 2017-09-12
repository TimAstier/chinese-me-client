import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { SignupForm, OnboardingScreen } from '../.';
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
  line-height: 1.5;
  color: #bfbfbf;
`;

class Page extends Component {

  render() {
    return (
      <OnboardingScreen>
        <TitleWrapper>
          <p><Bold>Sign up </Bold>for ChineseMe</p>
        </TitleWrapper>
        <SignupForm onSubmit={this.props.onSubmit} />
        <Footer>
          <FooterText>
            <p>
              Already have an account?
              <LinkComponent><Link to="/login"> Log in.</Link></LinkComponent>
            </p>
          </FooterText>
          <FooterText>
            <p>
              <br/>
              By Clicking "Create your ChineseMe account",
              <br/>
              I agree to ChineseMe's <LinkComponent>Terms of Service.</LinkComponent>
            </p>
          </FooterText>
        </Footer>
      </OnboardingScreen>
    );
  }
}

Page.propTypes = {
  onSubmit: propTypes.func.isRequired
};

export default Page;
