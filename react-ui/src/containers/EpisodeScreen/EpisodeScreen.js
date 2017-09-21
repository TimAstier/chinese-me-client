import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { EpisodeScreen as EpisodeScreenComponent } from '../../components';
import { actions as sagaActions } from '../../sagas/actions';
import { actions as studyActions } from '../../redux/study';
import selectors from '../../rootSelectors';

class EpisodeScreen extends Component {

  componentDidMount() {
    return this.props.initScreen(this.props.location.pathname);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      return this.props.initScreen(this.props.location.pathname);
    }
    return null;
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
  initScreen: propTypes.func.isRequired,
  initialized: propTypes.bool.isRequired,
  location: propTypes.object.isRequired
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
    initScreen: studyActions.initScreen
  }
)(EpisodeScreen);
