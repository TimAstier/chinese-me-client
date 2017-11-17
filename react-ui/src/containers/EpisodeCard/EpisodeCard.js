import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as sagaActions } from '../../sagas/actions';
import { Episode } from '../../models';
import propTypes from 'prop-types';

import { EpisodeCard as EpisodeCardComponent } from '../../components';

class EpisodeCard extends Component {
  onClick() {
    return () => this.props.startEpisode(
      this.props.seasonNumber,
      this.props.episode.number
    );
  }

  render() {
    return (
      <EpisodeCardComponent
        onClick={this.onClick()}
        id={this.props.episode.id}
        number={this.props.episode.number}
        title={this.props.episode.title}
        score={this.props.episode.score}
        imageUrl={this.props.episode.imageUrl}
        seasonNumber={this.props.seasonNumber}
      />
    );
  }
}

EpisodeCard.propTypes = {
  episode: propTypes.instanceOf(Episode).isRequired,
  startEpisode: propTypes.func.isRequired,
  seasonNumber: propTypes.number
};

export default connect(
  null,
  {
    startEpisode: sagaActions.startEpisode
  }
)(EpisodeCard);
