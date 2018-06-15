import React, { Component } from 'react';
import { bookComponents as c } from '../.';
import { ScrollableWrapper, NLSignupForm } from '../.';
import styled from 'styled-components';
import { Link } from 'react-router';

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
          <c.PartTitle type="secondary">The world’s most integrated Mandarin Chinese course</c.PartTitle>
          <c.P>
            ChineseMe is the only course that systematically integrates all the dimensions of the language (vocabulary, practical situations, pronunciation tips, grammar, character writing, character etymology, calligraphy and cultural tips) into one linear and modular learning experience. The course has the form of a systematic textbook with rich content available under interactive icons. You can read more about the different features on the <Link to="/help">help page</Link>. You can learn more about our ideas and research work on our <Link to="/blog">blog</Link>.
          </c.P>
          <c.PartTitle type="secondary">Course structure</c.PartTitle>
          <c.P>The ChineseMe course is designed to be followed in a linear way. It is separated into several seasons, each season including about 10-12 episodes (or lessons). In every episode, students learn a limited number of new characters, words, sentence patterns and pronunciation, while being sure that previously learnt elements are constantly reviewed and reused.</c.P>
          <c.P>Currently, only Season 1 is available. Season 2 will be released around late June 2018 and the next ones will come soon after.</c.P>
          <c.PartTitle type="secondary">Pricing</c.PartTitle>
          <c.P>
            Every season is available for purchase at a fixed $19 price. Once purchased, you have access to all the episodes within this season, with all interactive content, and you are free to progress through the course at your own pace.
          </c.P>
          <c.P>
            The first three episodes of every season are available for free. Feel free to try them out to see if you like the course! (no account required)
          </c.P>
          <c.PartTitle type="secondary">Team</c.PartTitle>
          <c.P>The team is currently based in Stockholm and mainly composed of two people: Johan Björkstén (author) and Tim Astier (developer).</c.P>
          <c.PartTitle type="secondary">Contact</c.PartTitle>
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
