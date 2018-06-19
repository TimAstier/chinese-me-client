import React, { Component } from 'react';
import { bookComponents as c } from '../.';
import { ScrollableWrapper, NLSignupForm } from '../.';
import propTypes from 'prop-types';
import { DiscussionEmbed } from 'disqus-react';
import styled from 'styled-components';

const DisqusWrapper = styled.div`
  width: 100%;
  margin-top: 40px;
  @media (max-width: 800px) {
    padding-left: 5px;
    padding-right: 5px;
  }
  padding-left: 30px;
  padding-right: 30px;
`;

class Article extends Component {
  render() {
    const disqusShortname = 'chineseme';
    const disqusConfig = {
      url: this.props.url,
      identifier: this.props.id,
      title: this.props.title
    };
    return (
      <ScrollableWrapper>
        <c.Page>
          <this.props.article />
          <NLSignupForm
            title="Get notified of our future articles"
            text="Sign up now to receive the free PDF version of our Chinese course for beginners, as well as our latest articles about Chinese."
          />
          <DisqusWrapper>
            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
          </DisqusWrapper>
        </c.Page>
      </ScrollableWrapper>
    );
  }
}

Article.propTypes = {
  article: propTypes.func.isRequired,
  id: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
  title: propTypes.string.isRequired
};

export default Article;
