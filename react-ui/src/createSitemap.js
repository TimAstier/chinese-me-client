/* eslint-disable */
// File not using es2015 because used by a node script without babel

// Take URLs data from the SEOData constant file and dynamically create sitemap
var sm = require('sitemap');
var fs = require ('fs');
var SEOData = require('./constants/SEOData');

var urls = [];

Object.keys(SEOData).forEach((key, index) => {
  if (SEOData[key].hasOwnProperty('priority')) {
    urls.push({
      url: key,
      changefreq: SEOData[key].changefreq,
      priority: SEOData[key].priority
    })
  }
});

const sitemap = sm.createSitemap({
  hostname: 'https://www.chinese-me.com',
  urls: urls
});

fs.writeFileSync('build/sitemap.xml', sitemap.toString());
