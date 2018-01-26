import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { SignupForm, OnboardingScreen } from '../.';
import { Link as LinkComponent } from '../Shared';
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
  font-size: ${props => props.fontSize};
  line-height: 1.5;
  color: #bfbfbf;
  max-width: 400px;
`;

class Page extends Component {
  render() {
    return (
      <OnboardingScreen>
        <TitleWrapper>
          <p>Create a new account</p>
        </TitleWrapper>
        <SignupForm onSubmit={this.props.onSubmit} />
        <Footer>
          <FooterText fontSize={'16px'}>
            <p>
              Already have an account?
              <LinkComponent><Link to="/login"> Log in.</Link></LinkComponent>
            </p>
          </FooterText>
          <br />
          <FooterText fontSize={'13px'}>
            <p>
              By clicking on the Sign Up button above you are agreeing to the <LinkComponent><a href="/study/terms-of-service">Terms of Service</a></LinkComponent> and the <LinkComponent><a href="/study/privacy-policy">Privacy Policy</a></LinkComponent>.
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
