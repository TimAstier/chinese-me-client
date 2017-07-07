import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import { EpisodeScreen as EpisodeScreenComponent } from '../components';
import { actions } from '../redux/study';
import selectors from '../rootSelectors';

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
  progressBarOptions: propTypes.object,
  stepsOptions: propTypes.object,
  screenLabel: propTypes.string,
  children: propTypes.object,
  askQuestion: propTypes.func.isRequired,
  displayEpisodeOverview: propTypes.func.isRequired,
  exit: propTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    next: selectors.getNextButton(state),
    skip: selectors.getSkipButton(state)
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
