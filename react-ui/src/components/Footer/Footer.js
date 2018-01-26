import React, { Component } from 'react';
import styled from 'styled-components';
import iconFb from '../../images/iconFb.svg';
import iconTwitter from '../../images/iconTwitter.svg';
import iconMedium from '../../images/iconMedium.svg';

const Wrapper = styled.footer`
  height: 148px;
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CopyrightWrapper = styled.div`
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-family: 'Open Sans';
	font-size: 18px;
	color: #b2babf;
`;

const LinksWrapper = styled.div`
  height: 50px;
  ${''/* width: 700px; */}
  width: 500px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: 'Open Sans';
  font-size: 18px;
	font-weight: 600;
	line-height: 1.0;
	color: #7f8c94;
  a {
    color: #7f8c94;
    text-decoration: none;
  }
`;

const SocialMediaLinks = styled.div`
  width: 107px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  a {
    text-decoration: none;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <CopyrightWrapper>
          © 2017 ChineseMe AB All Rights Reserved.
        </CopyrightWrapper>
        <LinksWrapper>
          <a href="/study/about">
            About
          </a>
          {/* <a>FAQ</a>
          <a>Jobs</a> */}
          {/* <a>Contact us</a> */}
          <a href="/study/philosophy">
            Our Philosophy
          </a>
          <a href="/study/terms-of-service">
            Terms
          </a>
          <a href="/study/privacy-policy">
            Privacy
          </a>
          <SocialMediaLinks>
            <a
              href="https://www.facebook.com/learnChinese.chinese.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iconFb} alt="Link to ChineseMe Facebook"/>
            </a>
            <a
              href="https://twitter.com/chinesemehq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iconTwitter} alt="Link to ChineseMe Twitter"/>
            </a>
            <a
              href="https://blog.chinese-me.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={iconMedium} alt="Link to ChineseMe Blog"/>
            </a>
          </SocialMediaLinks>
        </LinksWrapper>
      </Wrapper>
    );
  }
}

export default Footer;
