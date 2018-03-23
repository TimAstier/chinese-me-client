import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ScrollableWrapper } from '../../containers';
import * as models from '../../models';
import { ContentHOC } from '../.';
import assetEndpointToUrl from '../../helpers/assetEndpointToUrl';
// react-preloaded is a forw of react-preload which seems abandonned and not
// up-to-date with the latest releases of react
// see https://github.com/sambernard/react-preload/pull/23
const Preload = require('react-preloaded').Preload;

class Book extends Component {
  render() {
    const Content = this.props.content;
    // TODO: display unfound page
    if (this.props.initialized && Content) {
      // Preloading images allow to calculate correct scrollPosition in
      // scrollableWrapper.
      return (
        <Preload
          loadingIndicator={<div>...</div>}
          images={this.props.images.map(image => assetEndpointToUrl('/images/' + image))}
        >
          <ScrollableWrapper>
            <ContentHOC
              season={this.props.season}
              episode={this.props.episode}
              content={Content}
              settings={this.props.settings}
              images={this.props.images}
            />
          </ScrollableWrapper>
        </Preload>
      );
    }
    return null;
  }
}

Book.propTypes = {
  content: propTypes.func.isRequired,
  initialized: propTypes.bool.isRequired,
  season: propTypes.instanceOf(models.Season),
  episode: propTypes.instanceOf(models.Episode),
  settings: propTypes.object.isRequired,
  images: propTypes.array
};

export default Book;
