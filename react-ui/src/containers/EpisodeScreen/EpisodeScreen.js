import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { EpisodeScreen as EpisodeScreenComponent } from '../../components';
import { actions as sagaActions } from '../../sagas/actions';
import { actions as studyActions } from '../../redux/study';
import s from '../../rootSelectors';
import { Episode } from '../../models';

class EpisodeScreen extends Component {
  componentDidMount() {
    return this.props.runEpisodeScreen(this.props.location.pathname);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.episode && this.props.episode !== nextProps.episode) {
      return this.props.setCurrentSeasonId(nextProps.episode.seasonId);
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      return this.props.runEpisodeScreen(this.props.location.pathname);
    }
    return null;
  }

  componentWillUnmount() {
    // dispatch a signal to
    // 1: operate some cleanup in the store
    // 2: cancel study sagas
    return this.props.unmountEpisodeScreen();
  }

  render() {
    return this.props.initialized ?
      <EpisodeScreenComponent
        { ...this.props }
        elementType={this.props.elementType}
      />
      : <EpisodeScreenComponent exit={this.props.exit} />;
  }
}

EpisodeScreen.propTypes = {
  next: propTypes.bool,
  skip: propTypes.bool,
  children: propTypes.object,
  exit: propTypes.func.isRequired,
  playAudio: propTypes.bool,
  runEpisodeScreen: propTypes.func.isRequired,
  initialized: propTypes.bool.isRequired,
  location: propTypes.object.isRequired,
  unmountEpisodeScreen: propTypes.func.isRequired,
  episode: propTypes.instanceOf(Episode),
  setCurrentSeasonId: propTypes.func.isRequired,
  elementType: propTypes.string.isRequired,
  pause: propTypes.bool,
  hanziAgain: propTypes.bool
};

const mapStateToProps = state => {
  return {
    next: s.ui.getNextButton(state),
    skip: s.ui.getSkipButton(state),
    playAudio: s.ui.getPlayAudioButton(state),
    pause: s.ui.getPauseButton(state),
    hanziAgain: s.ui.getHanziAgainButton(state),
    initialized: s.study.getInitialized(state),
    episode: s.getCurrentEpisode(state),
    currentUrl: s.routing.getCurrentUrl(state),
    elementType: s.routing.getElementType(state)
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
