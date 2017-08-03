import React, { Component } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Logo, SignupForm } from '../.';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin-top: 40px;
  height: 45px;
  font-family: 'Open Sans';
  font-size: 45px;
  font-weight: 300;
  text-align: center;
  color: #454545;
`;

const Footer = styled.div`
  margin-top: 30px;
  text-align: center;
`;

const FooterText = styled.p`
  font-family: 'Open Sans';
  font-size: 18px;
  color: #bfbfbf;
`;

class Page extends Component {

  render() {
    return (
      <Wrapper>
        <Logo />
        <Title>Signup for ChineseMe</Title>
        <SignupForm onSubmit={this.props.onSubmit} />
        <Footer>
          <FooterText>Already have an account? Sign in.</FooterText>
          <FooterText>By Clicking "Create your ChineseMe account", I agree to ChineseMe's Terms of Service.</FooterText>
        </Footer>
      </Wrapper>
    );
  }
}

Page.propTypes = {
  onSubmit: propTypes.func.isRequired
};

export default Page;
