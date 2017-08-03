import React, { Component } from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainMessage = styled.div`
height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 40px;
  margin-bottom: 45px;
`;

const Text = styled.div`
  font-family: 'Open Sans';
  font-size: 25px;
  color: #454545;
`;

const FooterText = styled.div`
  font-family: 'Open Sans';
  font-size: 18px;
  color: #bfbfbf;
`;

class EmailSentPage extends Component {
  render() {
    return (
      <Wrapper>
        <Icon name="mail" size="massive" color="blue" />
        <MainMessage>
          <Text>An email has been sent to you with an activation link.</Text>
          <Text>Please check your emails to activate your account.</Text>
        </MainMessage>
        <FooterText>Haven't received any email? Contact us.</FooterText>
      </Wrapper>
    );
  }
}

export default EmailSentPage;
