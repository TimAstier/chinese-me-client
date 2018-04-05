import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as sagaActions } from '../../sagas/actions';
import { Episode } from '../../models';
import propTypes from 'prop-types';
import assetEndpointToUrl from '../../helpers/assetEndpointToUrl';

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
        imageUrl={assetEndpointToUrl('/Episode+Images/' + this.props.episode.imageUrl)}
      />
    );
  }
}

EpisodeCard.propTypes = {
  episode: propTypes.instanceOf(Episode).isRequired,
  startEpisode: propTypes.func.isRequired,
  seasonNumber: propTypes.number.isRequired
};

export default connect(
  null,
  {
    startEpisode: sagaActions.startEpisode
  }
)(EpisodeCard);
