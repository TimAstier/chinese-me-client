import React, { Component } from 'react';
import squareLogo from '../../images/squareLogo.png';
import styled from 'styled-components';
import Helmet from 'react-helmet';

const Wrapper = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  font-family: 'cambria';
  h1 {
    font-size: 40px;
  }
`;

// Returns the correct status code to crawler, following best practice from:
// https://prerender.io/documentation/best-practices

class My404Component extends Component {
  render() {
    return (
      <Wrapper>
        <Helmet>
          <meta name="prerender-status-code" content="404" />
        </Helmet>
        <a href="/"><img width="100px" height="100px" src={squareLogo} alt ="ChineseMe logo"/></a>
        <h1>Oops! Page not found...</h1>
        <h2>The page you're looking for doesn't exist or has been moved.</h2>
        <h2>您正寻找的页面已不存在或已被移动.</h2>
      </Wrapper>
    );
  }
}

export default My404Component;
