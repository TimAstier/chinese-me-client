import React, { Component } from 'react';
import propTypes from 'prop-types';
import { ScrollableAppWrapper } from '../Shared';
import * as models from '../../models';
import { ContentHOC } from '../.';

class Book extends Component {
  render() {
    const Content = this.props.content;
    // TODO: display unfound page
    if (this.props.initialized && Content) {
      return (
        <ScrollableAppWrapper>
          <ContentHOC
            book={this.props.book}
            content={Content}
           />
        </ScrollableAppWrapper>
      );
    }
    return null;
  }
}

Book.propTypes = {
  content: propTypes.func.isRequired,
  initialized: propTypes.bool.isRequired,
  book: propTypes.instanceOf(models.Book)
};

export default Book;
