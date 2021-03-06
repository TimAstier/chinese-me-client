import React, { Component } from 'react';
// import propTypes from 'prop-types';
import { ScrollableWrapper, ArticleBreadcrumb } from '../.';
import styled from 'styled-components';
import assetEndpointToUrl from '../../helpers/assetEndpointToUrl';

const ScreenWrapper = styled.div`
  margin: 30px auto 50px;
  min-height: 640px;
  width: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.h1`
  margin-top: 15px;
  height: 35px;
  font-family: 'Open Sans';
	font-size: 35px;
  @media(max-width: 658px) {
    font-size: 24px;
  }
  font-weight: bold;
	color: #454545;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 10px;
`;

const Description = styled.p`
  font-size: 20px;
  font-family: 'Open Sans';
  text-align: center;
`;

const ArticlesWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// TODO: fetch articles from our DB

class Blog extends Component {
  render() {
    return (
      <ScrollableWrapper>
        <ScreenWrapper>
          <Logo src={assetEndpointToUrl('/images/homepage/square_logo_small.png')} alt="logo"/>
          <TitleWrapper>ChineseMe blog</TitleWrapper>
          <Description>A collection of high-quality articles about Mandarin Chinese <br /> and how to learn it efficiently.</Description>
          <ArticlesWrapper>
            <ArticleBreadcrumb
              path="/blog/quest-for-the-most-efficient-chinese-course"
              image="resources_to_learn_chinese.png"
              title="Quest for the most efficient Chinese course"
            />
            <ArticleBreadcrumb
              path="/blog/chinese-consonant-pairs-and-aspiration"
              image="aspirated_vs_not.png"
              title="Chinese Consonant Pairs and Aspiration"
            />
            <ArticleBreadcrumb
              path="/blog/learn-chinese-pdf"
              image="Season_1_PDF.png"
              title="PDF to Learn Chinese (Beginners)"
            />
            <ArticleBreadcrumb
              path="/blog/the-ultimate-chinese-flashcard-system"
              image="three_decks.png"
              title="The ultimate Chinese flashcard system"
            />
            <ArticleBreadcrumb
              path="/blog/do-you-really-need-to-learn-chinese-characters"
              image="chinese_characters_cover.png"
              title="Do you really need to learn Chinese characters?"
            />
            <ArticleBreadcrumb
              path="/blog/ridiculously-specific-chinese-classifiers"
              image="chinese_classifiers_by_usefulness.png"
              title="5 ridiculously specific Chinese classifiers"
            />
            <ArticleBreadcrumb
              path="/blog/saying-chameleon-in-chinese"
              image="chameleon.png"
              title='Saying "chameleon" in Chinese'
            />
            <ArticleBreadcrumb
              path="/blog/a-chinese-course-where-you-are-the-star"
              image="tea_house.png"
              title="A Chinese course where you are the star"
            />
            <ArticleBreadcrumb
              path="/blog/doing-business-in-china"
              image="illustrations/3-1.jpg"
              title="Doing business in China: is learning Chinese a good investment?"
            />
          </ArticlesWrapper>
        </ScreenWrapper>
      </ScrollableWrapper>
    );
  }
}

// Blog.propTypes = {};

export default Blog;
