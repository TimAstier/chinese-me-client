import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as studyActions } from '../../redux/study';
import { Episode } from '../../models';
import propTypes from 'prop-types';

import { EpisodeCard as EpisodeCardComponent } from '../../components';

class EpisodeCard extends Component {
  onClick() {
    return this.props.episode.locked ? undefined :
      () => this.props.startEpisode(this.props.episode.id);
  }

  render() {
    return (
      <EpisodeCardComponent
        onClick={this.onClick()}
        id={this.props.episode.id}
        number={this.props.episode.number}
        locked={this.props.episode.locked}
        title={this.props.episode.title}
        score={this.props.episode.score}
        imageUrl={this.props.episode.imageUrl}
      />
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
