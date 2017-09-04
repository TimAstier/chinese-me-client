import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { SelectEpisode as SelectEpisodeComponent } from '../../components';
import selectors from '../../rootSelectors';
import Immutable from 'immutable';

class SelectEpisodeScreen extends Component {
  render() {
    // TODO: Set season number from real data
    return (
      <SelectEpisodeComponent
        episodes={this.props.episodes}
        title={'Season 1'}
      />
    );
  }
}

SelectEpisodeScreen.propTypes = {
  episodes: propTypes.instanceOf(Immutable.OrderedMap).isRequired
};

const mapStateToProps = state => {
  return {
    episodes: selectors.getCurrentSeasonEpisodes(state)
  };
};

export default connect(
  mapStateToProps
)(SelectEpisodeScreen);
