import React, { Component } from 'react';
import styled from 'styled-components';
import { OnboardingScreen } from '../.';
import iconMailSent from '../../images/iconMailSent.svg';

const ImageWrapper = styled.div`
  height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const MainMessage = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

const Text = styled.div`
  font-family: 'Open Sans';
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  color: #000000;

`;

const FooterText = styled.div`
  font-family: 'Open Sans';
  flex-grow: 1;
  padding-top: 40px;
  font-size: 16px;
  color: #bfbfbf;
`;

const Link = styled.span`
  color: #55b6ff;
`;

class EmailSentPage extends Component {
  render() {
    return (
      <OnboardingScreen>
        <ImageWrapper>
          <img src={iconMailSent} alt="mail sent" />
        </ImageWrapper>
        <MainMessage>
          <Text>An email has been sent to you with an activation link.</Text>
          <Text>Please check your emails to activate your account.</Text>
        </MainMessage>
        <FooterText>
          Haven't received any email? <Link>Contact us.</Link>
        </FooterText>
      </OnboardingScreen>
    );
  }
}

export default EmailSentPage;
