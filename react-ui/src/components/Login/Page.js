import React, { Component } from 'react';
import propTypes from 'prop-types';
import { LoginForm, OnboardingScreen } from '../.';
import { Bold, Link as LinkComponent } from '../Shared';
import { TitleWrapper, Footer, FooterText } from '../Shared/Onboarding';
import { Link } from 'react-router';

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
          {/* <FooterText><LinkComponent>Forgot your password?</LinkComponent></FooterText> */}
        </Footer>
      </OnboardingScreen>
    );
  }
}

Page.propTypes = {
  onSubmit: propTypes.func.isRequired
};

export default Page;
