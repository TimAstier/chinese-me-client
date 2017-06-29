import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { SelectEpisodeScreen as ChildComponent } from '../../components';
import { fetch as fetchEpisodes } from '../../redux/episodes';
import { getEpisodes } from '../../redux/episodes';

class SelectEpisodeScreen extends Component {
  componentDidMount() {
    return this.props.fetchEpisodes();
  }

  render() {
    return (
      <ChildComponent episodes={this.props.episodes} title={'Season 1'} />
    );
  }
}

SelectEpisodeScreen.propTypes = {
  fetchEpisodes: propTypes.func.isRequired,
  episodes: propTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    episodes: getEpisodes(state)
  };
};

export default connect(
  mapStateToProps,
  { fetchEpisodes }
)(SelectEpisodeScreen);
