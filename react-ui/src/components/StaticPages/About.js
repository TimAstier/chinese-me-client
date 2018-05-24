import React, { Component } from 'react';
import { bookComponents as c } from '../.';
import { ScrollableWrapper, NLSignupForm } from '../.';
import styled from 'styled-components';

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
              <Title>About ChineseMe</Title>
            </H1>
          </c.Bookrow>
          <c.P>ChineseMe is the first <b>integrated Chinese course</b> designed <b>for committed learners</b>.</c.P>
          <c.P>Our aim is to <b>combine the best ideas</b> for pronunciation, vocabulary, characters, sentence patterns (grammar), cultural knowledge and interactive exercises <b>in a single, integrated learning experience</b>. The course has the form of a systematic textbook with rich content available under interactive icons. You can read more about the different features on the <a href="/help">help page</a>.</c.P>
          <c.P>You can learn more about our ideas and research work on our <a href="https://blog.chinese-me.com" target="_blank" rel="noopener noreferrer">blog</a>.</c.P>
          <c.P>The ChineseMe course is designed to be followed in a linear way. It is separated into several Seasons, each Season including about 10-12 Episodes (or chapters). In every episode, students learn a limited number of new characters, words, sentence patterns and pronunciation, while being sure that previously learnt elements are constantly reviewed and reused.</c.P>
          <c.P>Currently, only Season 1 is available. Season 2 will be released around late May 2018. Every season is available for purchase for a fixed $19 price. The first three episodes of every season are available for free.</c.P>
          <c.P>The team is currently based in Stockholm and mainly composed of two people: Johan Björkstén (author) and Tim Astier (developer).</c.P>
          <c.P>You can contact us by email (<a href="mailto:hello@chinese-me.com">hello@chinese-me.com</a>), Twitter (<a href="https://twitter.com/ChineseMeHQ" target="_blank" rel="noopener noreferrer">@ChineseMeHQ</a>) or simply by clicking the <i>mail icon</i> on the top-right corner.</c.P>
          <c.P>You can also subscribe to our newsletter below to get the latest news about the project.</c.P>
          <c.P>Welcome to ChineseMe, we hope you will enjoy the course!</c.P>
          <NLSignupForm
            title="Join our mailing list"
            text="Sign up now to receive the free PDF version of our Chinese course for beginners, as well as the latest news about the project."
          />
        </c.Page>
      </ScrollableWrapper>
    );
  }
}

export default Privacy;
