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

class Terms extends Component {
  render() {
    return (
      <ScrollableWrapper>
        <c.Page>
          <c.Bookrow marginBottom={30} center>
            <H1>
              <Title>Terms of Service</Title>
            </H1>
          </c.Bookrow>
          <c.P>Thanks for using ChineseMe AB products and services (“Services”). The Services are provided by ChineseMe AB, located at Idungatan 9, 11345 Stockholm, Sweden.</c.P>
          <c.P>We will refer to ourselves in this document as "ChineseMe AB", "we", "us" or "our".</c.P>
          <c.P>By using our Services, you are agreeing to terms enclosed in this document. Please read them carefully. Violation of any of the terms below will result in the termination of your Account.</c.P>
          <c.PartTitle type="secondary">General Conditions</c.PartTitle>
          <c.P>ChineseMe AB shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Service.</c.P>
          <c.P>You agree not to copy, sell, resell or extract any portion of the Service without the express written permission from ChineseMe AB.</c.P>
          <c.PartTitle type="secondary">Intellectual Property Information</c.PartTitle>
          <c.P>Copyright ©2018 ChineseMe AB All Rights Reserved.</c.P>
          <c.P>For purposes of these Terms of Service, "content" is defined as any information, data, communications, software, photos, video, graphics, music, sounds, and other material and services that can be viewed by users on our site. This includes message boards, chat, and other original content.</c.P>
          <c.P>By accepting these Terms of Use, you acknowledge and agree that all content presented to you on this site is protected by copyrights, trademarks, service marks, patents or other proprietary rights and laws, and is the sole property of ChineseMe AB. You are only permitted to use the content as expressly authorized by us or the specific content provider. Except for a single copy made for personal use only, you may not copy, reproduce, modify, republish, upload, post, transmit, or distribute any documents or information from this site in any form or by any means without prior written permission from us or the specific content provider, and you are solely responsible for obtaining permission before reusing any copyrighted material that is available on this site. Any unauthorized use of the materials appearing on this site may violate copyright, trademark and other applicable laws and could result in criminal or civil penalties.</c.P>
          <c.P>
            The following are registered trademarks, trademarks or service marks of ChineseMe AB. All custom graphics, icons, logos and service names are registered trademarks, trademarks or service marks of ChineseMe AB. All other trademarks or service marks are property of their respective owners. Nothing in these Terms of Use grants you any right to use any trademark, service mark, logo, and/or the name of ChineseMe AB.
          </c.P>
          <c.PartTitle type="secondary">Account Terms</c.PartTitle>
          <c.P>You must be 13 years or older to use our Services.</c.P>
          <c.P>You must be a human. Accounts registered by "bots" or other automated methods are not permitted.</c.P>
          <c.P>You are responsible for maintaining the security of your account and password (credential). ChineseMe AB cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.</c.P>
          <c.PartTitle type="secondary">Limitations of Liability</c.PartTitle>
          <c.P>ChineseMe AB is not responsible for technical failures of any kind, including, but not limited to malfunctions, interruptions and any damage to hardware or software.</c.P>
          <c.P>We shall not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses caused by using the Service.</c.P>
          <c.PartTitle type="secondary">Warranty</c.PartTitle>
          <c.P>We make no warranty. Your use of the Service is at your own risk. The service is provided on an "as is" and "as available" basis.</c.P>
          <c.P>You need to understand that we use third party vendors and hosting partners to provide the necessary hardware, software, networking, storage, and related technology required to run the Service. So we cannot be responsible for their failure.</c.P>
          <c.PartTitle type="secondary">Privacy Policy</c.PartTitle>
          <c.P>You also agree with our <a href="/study/privacy-policy">Privacy policy</a>.</c.P>
          <c.PartTitle type="secondary">Change in Terms of Service</c.PartTitle>
          <c.P>Occasionally, we may change or update our Terms of Service with or without notice.</c.P>
          <c.P>Last Updated: January 26, 2018</c.P>
          <c.PartTitle type="secondary">Contact</c.PartTitle>
          <c.P>Please feel free to contact us via the message button on the top-right corner. You can also email us at hello@chinese-me.com</c.P>
        </c.Page>
      </ScrollableWrapper>
    );
  }
}

export default Terms;
