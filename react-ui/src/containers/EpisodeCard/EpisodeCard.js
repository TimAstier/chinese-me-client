import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as studyActions } from '../../redux/study';
import { Episode } from '../../models';
import propTypes from 'prop-types';

import { EpisodeCard as EpisodeCardComponent } from '../../components';

class EpisodeCard extends Component {

  render() {
    return (
      <EpisodeCardComponent { ...this.props } />
    );
  }
}

EpisodeCard.propTypes = {
  episode: propTypes.instanceOf(Episode).isRequired,
  startEpisode: propTypes.func.isRequired
};

export default connect(
  null,
  {
    startEpisode: studyActions.startEpisode
  }
)(EpisodeCard);
