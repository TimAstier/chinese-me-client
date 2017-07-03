import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { SelectEpisode as SelectEpisodeComponent } from '../components';
import { actions } from '../redux/episodes';
import EpisodeMap from '../models/EpisodeMap';
import { getEpisodes } from '../rootReducer';

class SelectEpisodeScreen extends Component {
  componentWillMount() {
    return this.props.fetchEpisodes();
  }

  render() {
    return (
      <SelectEpisodeComponent
        episodes={this.props.episodes}
        title={'Season 1'}
      />
    );
  }
}

SelectEpisodeScreen.propTypes = {
  fetchEpisodes: propTypes.func.isRequired,
  episodes: propTypes.instanceOf(EpisodeMap).isRequired
};

const mapStateToProps = state => {
  return {
    episodes: getEpisodes(state)
  };
};

export default connect(
  mapStateToProps,
  { fetchEpisodes: actions.fetch }
)(SelectEpisodeScreen);
