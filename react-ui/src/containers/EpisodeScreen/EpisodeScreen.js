import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { EpisodeScreen as EpisodeScreenComponent } from '../../components';
import { actions as sagaActions } from '../../sagas/actions';
import { actions as studyActions } from '../../redux/study';
import s from '../../rootSelectors';
import * as models from '../../models';

class EpisodeScreen extends Component {
  componentDidMount() {
    this.props.runEpisodeScreen(this.props.episode.locked, this.props.url);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.episode && this.props.episode !== nextProps.episode) {
      this.props.setCurrentSeasonId(nextProps.episode.seasonId);
    }
  }

  componentDidUpdate(prevProps) {
    // Rerun study saga when the URL changes
    if (this.props.url !== prevProps.url) {
      this.props.runEpisodeScreen(this.props.episode.locked, this.props.url);
    }
  }

  componentWillUnmount() {
    this.props.unmountEpisodeScreen();
  }

  _handleExit() {
    return this.props.exit(this.props.backUrl);
  }

  render() {
    return this.props.initialized ?
      <EpisodeScreenComponent
        { ...this.props }
        exit={this._handleExit.bind(this)}
        elementType={this.props.elementType}
        url={this.props.url}
      />
      :
      <EpisodeScreenComponent
        exit={this._handleExit.bind(this)}
        url={this.props.url}
      />;
  }
}

EpisodeScreen.propTypes = {
  next: propTypes.bool,
  children: propTypes.node.isRequired,
  exit: propTypes.func.isRequired,
  playAudio: propTypes.bool,
  runEpisodeScreen: propTypes.func.isRequired,
  initialized: propTypes.bool.isRequired,
  url: propTypes.string.isRequired,
  unmountEpisodeScreen: propTypes.func.isRequired,
  episode: propTypes.instanceOf(models.Episode).isRequired,
  season: propTypes.instanceOf(models.Season).isRequired,
  setCurrentSeasonId: propTypes.func.isRequired,
  elementType: propTypes.string.isRequired,
  pause: propTypes.bool,
  hanziAgain: propTypes.bool,
  appInitialized: propTypes.bool.isRequired,
  backUrl: propTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    next: s.ui.getNextButton(state),
    playAudio: s.ui.getPlayAudioButton(state),
    pause: s.ui.getPauseButton(state),
    hanziAgain: s.ui.getHanziAgainButton(state),
    initialized: s.study.getInitialized(state),
    episode: s.getCurrentEpisode(state),
    season: s.getCurrentSeason(state),
    elementType: s.routing.getElementType(state),
    appInitialized: s.app.getInitialized(state),
    backUrl: s.getBackUrl(state)
  };
};

export default connect(
  mapStateToProps,
  {
    exit: sagaActions.exit,
    runEpisodeScreen: sagaActions.runEpisodeScreen,
    unmountEpisodeScreen: sagaActions.unmountEpisodeScreen,
    setCurrentSeasonId: studyActions.setCurrentSeasonId
  }
)(EpisodeScreen);
