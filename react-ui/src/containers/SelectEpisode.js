import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { SelectEpisode as SelectEpisodeComponent } from '../components';
// import { actions } from '../redux/episodes';
import { actions } from '../redux/entities';
// import EntitiesMap from '../models/EntitiesMap';
import Immutable from 'immutable';
// import { getEpisodes } from '../rootReducer';
import { getEntities } from '../rootReducer';

class SelectEpisodeScreen extends Component {
  componentWillMount() {
    return this.props.fetch('/episodes');
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
  fetch: propTypes.func.isRequired,
  episodes: propTypes.instanceOf(Immutable.orderedMap).isRequired
};

const mapStateToProps = state => {
  return {
    episodes: getEntities(state, 'episodes')
  };
};

export default connect(
  mapStateToProps,
  { fetch: actions.fetch }
)(SelectEpisodeScreen);
