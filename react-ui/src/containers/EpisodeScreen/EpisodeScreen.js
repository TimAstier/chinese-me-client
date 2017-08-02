import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { EpisodeScreen as EpisodeScreenComponent } from '../../components';
import { actions } from '../../sagas/actions';
import selectors from '../../rootSelectors';

class EpisodeScreen extends Component {

  render() {
    return (
      <EpisodeScreenComponent { ...this.props } />
    );
  }
}

EpisodeScreen.propTypes = {
  next: propTypes.bool,
  skip: propTypes.bool,
  progressMenuOptions: propTypes.object,
  stepsOptions: propTypes.object,
  screenLabel: propTypes.string,
  children: propTypes.object,
  askQuestion: propTypes.func.isRequired,
  displayEpisodeOverview: propTypes.func.isRequired,
  exit: propTypes.func.isRequired,
  playAudio: propTypes.bool
};

const mapStateToProps = state => {
  return {
    next: selectors.getNextButton(state),
    skip: selectors.getSkipButton(state),
    playAudio: selectors.getPlayAudioButton(state)
  };
};

export default connect(
  mapStateToProps,
  {
    askQuestion: actions.askQuestion,
    displayEpisodeOverview: actions.displayEpisodeOverview,
    exit: actions.exit
  }
)(EpisodeScreen);
