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
              <Title>Chinese isn’t difficult - just different!</Title>
            </H1>
          </c.Bookrow>
          <c.PartTitle type="secondary">Welcome to ChineseMe!</c.PartTitle>
          <c.P>Chinese has a reputation for being difficult. We believe this is mainly because the language is so different from what we are used to: pronunciation, vocabulary, writing system, grammar and cultural context can all seem unfamiliar.</c.P>
          <c.P>ChineseMe is an integrated language course that specifically addresses these differences. <i>The Basics</i> is a 10-lesson introduction course for total beginners. <i>Season 1</i> is a mini soap opera soon to be released. Both courses will be available free of charge as printable pdf’s.</c.P>
          <c.P>In this beta release, interactive features such as sound recordings, exercises, calligraphy videos and character history are also free - but they will soon become a USD 19.95 monthly subscription feature. The first few lessons of <i>The Basics</i> will remain free, though.</c.P>
          <c.P>The beta release has been tested for the browsers Chrome, Firefox and Safari on PC and Mac, as well as for Explorer on PC. It currently does not work smoothly on phones and tablets.</c.P>
          <c.P>Click <a href="/study/philosophy">here</a> to learn more about the philosophy behind ChineseMe.</c.P>
        </c.Page>
      </ScrollableWrapper>
    );
  }
}

export default Privacy;
