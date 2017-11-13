import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Book as BookComponent } from '../../components';
import * as content from '../../components/Book/content';
import s from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';
import * as models from '../../models';

class Book extends Component {

  componentWillMount() {
    this._init();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this._init();
    }
  }

  _init() {
    const { seasonNumber, episodeNumber } = this.props.params;
    this.props.initBook(seasonNumber, episodeNumber);
  }

  render() {
    const { seasonNumber, episodeNumber } = this.props.params;
    return (
        <BookComponent
          initialized={this.props.initialized}
          content={content[`S${seasonNumber}E${episodeNumber}`]}
          episode={this.props.episode}
          season={this.props.season}
        />
    );
  }
}

Book.propTypes = {
  params: propTypes.object.isRequired,
  initialized: propTypes.bool.isRequired,
  initBook: propTypes.func.isRequired,
  season: propTypes.instanceOf(models.Season),
  episode: propTypes.instanceOf(models.Episode),
  location: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  initialized: s.book.getInitialized(state),
  episode: s.getCurrentEpisode(state),
  season: s.getCurrentSeason(state)
});

export default connect(
  mapStateToProps,
  {
    initBook: sagaActions.initBook
  }
)(Book);
