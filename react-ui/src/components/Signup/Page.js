import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { SignupForm, OnboardingScreen } from '../.';
import { Bold, Link } from '../Shared';

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

const FooterText = styled.p`
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
            Already have an account? <Link>Log in.</Link>
          </FooterText>
          <FooterText>
            By Clicking "Create your ChineseMe account",
            <br/>
            I agree to ChineseMe's <Link>Terms of Service.</Link>
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
