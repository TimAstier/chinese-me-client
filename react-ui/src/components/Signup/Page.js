import React, { Component } from 'react';
import propTypes from 'prop-types';
import { SignupForm, OnboardingScreen } from '../.';
import { Link as LinkComponent } from '../Shared';
import { TitleWrapper, Footer, FooterText } from '../Shared/Onboarding';
import { Link } from 'react-router';

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
              By clicking on the Sign Up button above you are agreeing to the <LinkComponent><a href="/terms-of-service">Terms of Service</a></LinkComponent> and the <LinkComponent><a href="/privacy-policy">Privacy Policy</a></LinkComponent>.
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
