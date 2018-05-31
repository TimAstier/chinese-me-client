import React, { Component } from 'react';
import { bookComponents as c } from '../.';
import { ScrollableWrapper, NLSignupForm } from '../.';
import propTypes from 'prop-types';

class Article extends Component {
  render() {
    return (
      <ScrollableWrapper>
        <c.Page>
          <this.props.article />
          <NLSignupForm
            title="Get notified of our future articles"
            text="Sign up now to receive the free PDF version of our Chinese course for beginners, as well as our latest articles about Chinese."
          />
        </c.Page>
      </ScrollableWrapper>
    );
  }
}

Article.propTypes = {
  article: propTypes.func.isRequired
};

export default Article;
