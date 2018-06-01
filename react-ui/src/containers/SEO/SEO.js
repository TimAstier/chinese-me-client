import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import SEOData from '../../constants/SEOData';
import { PRODUCTION_ROOT_URL, DEFAULT_SEO_IMAGE } from '../../constants/urls';
import assetEndpointToUrl from '../../helpers/assetEndpointToUrl';
import s from '../../rootSelectors';

class SEO extends Component {
  _isArticle() {
    return this.props.url.split('/')[1] === 'blog'
      && this.props.url.split('/')[2] !== undefined;
  }

  _title() {
    return SEOData[this.props.url] ? SEOData[this.props.url].title : 'ChineseMe';
  }

  _description() {
    return SEOData[this.props.url]
      ? SEOData[this.props.url].description
      : undefined;
  }

  _image() {
    if (SEOData[this.props.url]) {
      if (SEOData[this.props.url].image) {
        return SEOData[this.props.url].image;
      }
    }
    return assetEndpointToUrl('/images/' + DEFAULT_SEO_IMAGE);
  }

  render() {
    return (
      <Helmet>
        <title itemProp="name" lang="en">
          { this._title() }
        </title>
        <link rel="canonical" href={ PRODUCTION_ROOT_URL + this.props.url } />
        <meta name="description" content={ this._description() } />
        {
          SEOData[this.props.url] && SEOData[this.props.url].keywords &&
            <meta name="keywords" content={ SEOData[this.props.url].keywords } />
        }
        <meta property="og:title" content={ this._title() } />
        <meta property="og:type" content={this._isArticle() ? 'article' : 'website'} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:description" content={ this._description() } />
        <meta property="og:url" content={ PRODUCTION_ROOT_URL + this.props.url } />
        <meta property="og:image" content={ this._image() } />
        <meta name="twitter:site" content="@ChineseMeHQ" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ChineseMeHQ" />
        <meta name="twitter:description" content={ this._description() } />
        <meta name="twitter:title" content={ this._title() } />
        <meta name="twitter:image" content={ this._image() } />
      </Helmet>
    );
  }
}

SEO.propTypes = {
  url: propTypes.string.isRequired
};

const mapStateToProps = state => ({
  url: s.routing.getCurrentUrl(state)
});

export default connect(
  mapStateToProps
)(SEO);
