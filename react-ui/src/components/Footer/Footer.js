import React, { Component } from 'react';
import styled from 'styled-components';
import iconFb from '../../images/iconFb.svg';
import iconTwitter from '../../images/iconTwitter.svg';
import iconMedium from '../../images/iconMedium.svg';
import { Link } from 'react-router';

const Wrapper = styled.footer`
  width: 100%;
  background-color: #f8f8f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media print {
    display: none;
  }
`;

const CopyrightWrapper = styled.div`
  text-align: center;
  font-family: 'Open Sans';
	font-size: 18px;
	color: #b2babf;
  width: 70%;
`;

const LinksWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
  font-family: 'Open Sans';
  font-size: 18px;
	font-weight: 600;
	color: #7f8c94;
  a {
    width: 150px;
    color: #7f8c94;
    text-decoration: none;
    text-align: center;
    margin-bottom: 10px;
  }
`;

const SocialMediaLinks = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  a {
    text-decoration: none;
    min-width: 0;
  }
`;

class Footer extends Component {
  render() {
    return (
      <Wrapper>
        <CopyrightWrapper>
          © 2018 ChineseMe AB All Rights Reserved.
        </CopyrightWrapper>
        <LinksWrapper>
          <Link to="/study/about">About</Link>
          {/* <a>FAQ</a>
          <a>Jobs</a> */}
          {/* <a>Contact us</a> */}
          <Link to="/study/philosophy">Our Philosophy</Link>
          <Link to="/study/terms-of-service">Terms</Link>
          <Link to="/study/privacy-policy">Privacy</Link>
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
