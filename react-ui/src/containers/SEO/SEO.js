import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import SEOData from '../../constants/SEOData';
import s from '../../rootSelectors';

class SEO extends Component {
  render() {
    if (!SEOData[this.props.url]) {
      return <Helmet title="ChineseMe" />;
    }
    return (
      <Helmet
        title={SEOData[this.props.url].title}
      >
        {
          SEOData[this.props.url].description &&
            <meta name="description" content={ SEOData[this.props.url].description } />
        }
        {
          SEOData[this.props.url].keywords &&
            <meta name="keywords" content={ SEOData[this.props.url].keywords } />
        }
        {/* Meta for social media share */}
        {/* <meta property="og:title" content="Learn Mandarin Chinese - ChineseMe" />
          <meta property="og:description" content="The integrated Chinese course for committed learners. ChineseMe is based on useful situations and covers pronunciation, grammar, calligraphy, character etymology and cultural tips." />
          <meta property="og:url" content="https://www.chinese-me.com" />
          <meta property="og:image" content="https://www.chinese-me.com/images/ChineseMe_social.png">
          <meta property="og:url" content="https://www.chinese-me.com">
        */}
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
