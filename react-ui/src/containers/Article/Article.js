import React, { Component } from 'react';
import propTypes from 'prop-types';
import { articles } from '../../components';
import { Article as ArticleComponent } from '../../components';
import camelCase from 'lodash/camelCase';
import { capitalizeFirstLetter } from '../../utils/strings';

class Article extends Component {
  _article(slug) {
    return articles[capitalizeFirstLetter(camelCase(slug))];
  }

  render() {
    const article = this._article(this.props.router.params.slug);
    if (!article) {
      // TODO: redirect to 404
      return null;
    }
    return (
      <ArticleComponent
        article={article}
      />
    );
  }
}

Article.propTypes = {
  router: propTypes.shape({
    params: propTypes.shape({
      slug: propTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default Article;
