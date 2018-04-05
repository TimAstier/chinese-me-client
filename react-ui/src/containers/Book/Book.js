import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Book as BookComponent } from '../../components';
import * as content from '../../components/Book/content';
import s from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';
import { actions as bookActions } from '../../redux/book';
import { actions as uiActions } from '../../redux/ui';
import * as models from '../../models';
import { imageNames } from '../../constants/urls';

class Book extends Component {
  componentWillMount() {
    this._init();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this._init();
    }
  }

  componentWillUnmount() {
    this.props.setScrollPosition(this._getBookScrollPosition());
    this.props.setInitialized(false);
  }

  _init() {
    const { seasonNumber, episodeNumber } = this.props.params;
    this.props.initBook(seasonNumber, episodeNumber);
  }

  _getBookScrollPosition = () => {
    return document.getElementById('scrollableWrapper').scrollTop;
  }

  render() {
    const { seasonNumber, episodeNumber } = this.props.params;
    return (
      <BookComponent
        initialized={this.props.initialized}
        content={content[`S${seasonNumber}E${episodeNumber}`]}
        images={imageNames[`S${seasonNumber}E${episodeNumber}`] || []}
        episode={this.props.episode}
        season={this.props.season}
        settings={this.props.settings}
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
  location: propTypes.object.isRequired,
  settings: propTypes.object.isRequired,
  setInitialized: propTypes.func.isRequired,
  setScrollPosition: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  initialized: s.book.getInitialized(state),
  episode: s.getCurrentEpisode(state),
  season: s.getCurrentSeason(state),
  settings: s.getAugmentedSettings(state)
});

export default connect(
  mapStateToProps,
  {
    initBook: sagaActions.initBook,
    setInitialized: bookActions.setInitialized,
    setScrollPosition: uiActions.setScrollPosition
  }
)(Book);
