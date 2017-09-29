import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { SelectEpisode as SelectEpisodeComponent } from '../../components';
import selectors from '../../rootSelectors';
import Immutable from 'immutable';
import { Season } from '../../models';

class SelectEpisodeScreen extends Component {
  render() {
    const season = this.props.currentSeason;
    return (
      <SelectEpisodeComponent
        episodes={this.props.episodes}
        title={season ? `Season ${season.number}` : null}
      />
    );
  }
}

SelectEpisodeScreen.propTypes = {
  episodes: propTypes.instanceOf(Immutable.OrderedMap).isRequired,
  currentSeason: propTypes.instanceOf(Season)
};

const mapStateToProps = state => {
  return {
    episodes: selectors.getCurrentSeasonEpisodes(state),
    currentSeason: selectors.getCurrentSeason(state)
  };
};

export default connect(
  mapStateToProps
)(SelectEpisodeScreen);
