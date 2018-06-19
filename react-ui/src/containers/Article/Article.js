import React, { Component } from 'react';
import propTypes from 'prop-types';
import { articles } from '../../components';
import { Article as ArticleComponent } from '../../components';
import camelCase from 'lodash/camelCase';
import { capitalizeFirstLetter } from '../../utils/strings';
import { PRODUCTION_ROOT_URL } from '../../constants/urls';
import SEOData from '../../constants/SEOData';

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
        article={ article }
        url={ PRODUCTION_ROOT_URL + this.props.router.getCurrentLocation().pathname }
        id={ this.props.router.params.slug }
        title= { SEOData[this.props.router.getCurrentLocation().pathname].title }
      />
    );
  }
}

Article.propTypes = {
  router: propTypes.shape({
    params: propTypes.shape({
      slug: propTypes.string.isRequired
    }).isRequired,
    getCurrentLocation: propTypes.func.isRequired
  }).isRequired
};

export default Article;
