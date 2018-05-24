import React, { Component } from 'react';
import { bookComponents as c } from '../.';
import { ScrollableWrapper } from '../.';
import styled from 'styled-components';
// import { Link } from 'react-router';
// import { Row } from '../Shared';

const Title = styled.span`
  font-size: 34px;
  font-style: bold;
  font-family: 'Cambria';
  color: #C0504D;
`;

const H1 = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

class Privacy extends Component {
  render() {
    return (
      <ScrollableWrapper>
        <c.Page>
          <c.Bookrow marginBottom={30} center>
            <H1>
              <Title>Privacy Policy</Title>
            </H1>
          </c.Bookrow>
          <c.PartTitle type="secondary">Does this application collect information about you?</c.PartTitle>
          <c.P>Yes, we collect some information from you when you register on our site or fill out a form.</c.P>
          <c.PartTitle type="secondary">Why do we gather information from you?</c.PartTitle>
          <c.P>Any of information we gather may be used in some of listed below ways:</c.P>
          <c.Bookrow>
            <c.Ul>
              <li>- Tailoring a website to improve our service.</li>
              <li>- Personalize your experience to suit your individual needs.</li>
            </c.Ul>
          </c.Bookrow>
          <c.P>We will not sell your private data that we collect on our site to any business partner, without your permission.</c.P>
          <c.PartTitle type="secondary">Is my personal data secure?</c.PartTitle>
          <c.P>We provide reasonable administrative, technical security measures to protect your personal information. However, despite of any our efforts, no security sytems are 100% effective so we cannot warrant the security of your personal information.</c.P>
          <c.PartTitle type="secondary">What are cookies? Why do we use them?</c.PartTitle>
          <c.P>A cookie, also known as browser/web cookie, is a small piece of data sent from a website and stored on a user's computer while the user is browsing web. We use them to identify you and let you access your account data.</c.P>
          <c.PartTitle type="secondary">Third party links</c.PartTitle>
          <c.P>This web site contains links to other web sites and third party links. Please note that when you click on one of these links you are redirected to another web site on which privacy policy may differ from ours. This Privacy Policy covers the usage of cookies by ChineseMe and does not cover the usage of cookies by any third party websites.</c.P>
          <c.PartTitle type="secondary">Do we comply with COPPA?</c.PartTitle>
          <c.P>No, this website is not directed to children under 13.</c.P>
          <c.PartTitle type="secondary">Terms of Service</c.PartTitle>
          <c.P>Please also read our <a href="/terms-of-service">Terms of Service</a>.</c.P>
          <c.PartTitle type="secondary">How can I contact ChineseMe with questions or concerns?</c.PartTitle>
          <c.P>Please feel free to contact us via the message button on the top-right corner. You can also email us at hello@chinese-me.com</c.P>
          <c.PartTitle type="secondary">Will this website privacy policy change in future?</c.PartTitle>
          <c.P>Occasionally, we may change or update our privacy policy here.</c.P>
          <c.P>Last Updated: January 26, 2018</c.P>
        </c.Page>
      </ScrollableWrapper>
    );
  }
}

export default Privacy;
