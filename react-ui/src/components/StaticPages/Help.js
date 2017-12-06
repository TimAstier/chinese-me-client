import React, { Component } from 'react';
import { bookComponents as c } from '../.';
import { ScrollableWrapper } from '../.';
import styled from 'styled-components';
import { Link } from 'react-router';
import { Row } from '../Shared';
import messageIcon from '../../images/messageIcon.png';
const Preload = require('react-preload').Preload;

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

const TextBlock = styled.div`
  padding-right: 20px;
  align-self: center;
`;

class Help extends Component {

  render() {
    return (
      <Preload
        loadingIndicator={<div>...</div>}
        images={[
          'https://s3.eu-west-2.amazonaws.com/chineseme/images/black_logo.png" alt="chineseMe logo',
          'https://s3.eu-west-2.amazonaws.com/chineseme/images/toc.png'
        ]}
      >
        <ScrollableWrapper>
          <c.Page>
            <c.Bookrow marginBottom={30} center>
              <H1>
                <Title>Welcome to ChineseMe!</Title>
              </H1>
            </c.Bookrow>
            <c.P>Learning Chinese is a wonderful adventure. Our mission is to provide you with a great learning experience: the perfect course, with a reliable teacher always at your side.</c.P>
            <c.P>The course is designed to gradually introduce new piece of knowledge. But in the end, it's up to you to decide on what to study and in which order.</c.P>
            <c.P><Row><TextBlock>You can click on the ChineseMe logo to see the <b><i>Season</i></b> you're currently studying and all available <b><i>Episodes.</i></b></TextBlock><div><img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/black_logo.png" alt="chineseMe logo"/></div></Row></c.P>
            <c.P><Row><TextBlock>You can navigate through the course via the Table of Contents. <i>Completed content and exercises are shown as checked</i>.</TextBlock><div><img src="https://s3.eu-west-2.amazonaws.com/chineseme/images/toc.png" alt="table of contents icon"/></div></Row></c.P>
            <c.P><Row><TextBlock>If you have questions, comments or suggestions, we would love to hear from you! Send your <b><i>Message</i></b> via the message button.</TextBlock><div><img src={messageIcon} alt="message icon" width="40px"/></div></Row></c.P>
            <c.P>As you go along in the course, you can:</c.P>
            <c.P
              buttonOptions={{
                type: 'audio',
                data: {
                  text: '你好'
                }
              }}
            >
              Listen to <b><i>Sounds</i></b>
            </c.P>
            <c.P
              buttonOptions={{
                type: 'practice'
              }}
            >
              Test your understanding of the course through <b><i>Practice</i></b> exercises
            </c.P>
            <c.P
              buttonOptions={{
                type: 'dialog',
                top: true
              }}
            >
              Work with <b><i>Dialogs</i></b> in one of three ways:
              <ul>
                <li><b>Watch</b> to the whole dialog in natural speed</li>
                <li><b>Explore</b> individual sentences and vocabulary</li>
                <li><b>Roleplay</b> one of the actor to practice</li>
              </ul>
            </c.P>
            <c.P
              buttonOptions={{
                type: 'stroke',
              }}
            >
              Watch <b><i>Stroke order</i></b> animations of every Chinese character
            </c.P>
            <c.P>Some Chinese characters have extra resources:</c.P>
            <c.P
              buttonOptions={{
                type: 'writing'
              }}
            >
              <b><i>Calligraphy</i></b> videos, to learn how to write characters beautifully
            </c.P>
            <c.P
              buttonOptions={{
                type: 'story'
              }}
            >
              <b><i>Oracle bone</i></b> explanations, to learn the origin and stories behind the characters
            </c.P>
            <c.P
              buttonOptions={{
                type: 'exam'
              }}
            >
              At the end of every lesson or episode, you can challenge yourself by taking the <b><i>Exam</i></b>. <i>You can redo all exams later if you want to improve your score</i>.
            </c.P>
            <c.P>If you want to get started now, go to <Link to="/study/season/0/episode/1">Lesson 1</Link>. By the end of this lesson, you should have a good idea about how the Chinese language works. You will have learnt your first five Chinese characters. And you will have your own Chinese name!</c.P>
            <c.P>We wish you pleasure and success in your study.</c.P>
            <c.P>Johan & Tim</c.P>
            <c.P><i>Note: If you prefer reading the book on paper, it is available as a free download <a href="https://s3.eu-west-2.amazonaws.com/chineseme/pdf/ChineseMe+paper_version.pdf" target="_blank" rel="noopener noreferrer">here</a>.</i></c.P>
          </c.Page>
        </ScrollableWrapper>
      </Preload>
    );
  }
}

export default Help;
