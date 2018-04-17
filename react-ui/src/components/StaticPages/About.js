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
              <Title>About ChineseMe</Title>
            </H1>
          </c.Bookrow>
          <c.P>ChineseMe is an <a href="https://blog.chinese-me.com/a-chinese-course-where-you-are-the-star-aac9e21c1c49">integrated Chinese course</a> designed for committed learners.</c.P>
          <c.P>Our aim is to combine the best ideas for pronunciation, vocabulary, characters, sentence patterns (grammar), cultural knowledge and interactive exercises in a single, integrated learning experience. The course has the form of a systematic textbook with rich content available under interactive icons: sound, HD videos of calligraphy, character etymology and interactive exercises. You can read more about the different features on the <a href="/study/philosophy">help page</a>.</c.P>
          <c.P>The course has been designed to be followed in a linear way. It is separated into several Seasons, each Season including about 10-12 Episodes (or chapters). In every episode, students learn a limited number of new characters, words, sentence patterns and pronunciation, while being sure that previously learnt elements are constantly reviewed and reused.</c.P>
          <c.P>Currently, only Season 1 is available. Season 2 will be released around late May 2018. Every season is available for purchase for a fixed $19 price. The first three episodes of every season are available for free.</c.P>
          <c.P>The team is currently based in Stockholm and mainly composed of two people: Johan Björkstén (author) and Tim Astier (developer). If you want to contact us, you can write an email at <i>hello@chinese-me.com</i> or find us on <a href="https://twitter.com/ChineseMeHQ">Twitter</a>.</c.P>
          <c.P>If you want to be get latest news about the project, you're can subscribe to our newsletter on the <a href="https://www.chinese-me.com">homepage</a>.</c.P>
        </c.Page>
      </ScrollableWrapper>
    );
  }
}

export default Privacy;
