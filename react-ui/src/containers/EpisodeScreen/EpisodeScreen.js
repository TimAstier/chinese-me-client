import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { EpisodeScreen as EpisodeScreenComponent } from '../../components';
import { actions as sagaActions } from '../../sagas/actions';
import selectors from '../../rootSelectors';

class EpisodeScreen extends Component {

  componentDidMount() {
    return this.props.runEpisodeScreen(this.props.location.pathname);
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
      <EpisodeScreenComponent { ...this.props } />
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
  unmountEpisodeScreen: propTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    next: selectors.getNextButton(state),
    skip: selectors.getSkipButton(state),
    playAudio: selectors.getPlayAudioButton(state),
    initialized: selectors.getInitialized(state)
  };
};

export default connect(
  mapStateToProps,
  {
    exit: sagaActions.exit,
    runEpisodeScreen: sagaActions.runEpisodeScreen,
    unmountEpisodeScreen: sagaActions.unmountEpisodeScreen
  }
)(EpisodeScreen);
