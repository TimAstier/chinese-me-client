import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { SelectEpisode as SelectEpisodeComponent } from '../../components';
import selectors from '../../rootSelectors';
import Immutable from 'immutable';
import { Season } from '../../models';

class SelectEpisodeScreen extends Component {

  // TODO: Add a title field in DB (in a translation table)
  title() {
    const season = this.props.currentSeason;
    if (!season) {
      return null;
    }
    if (season.number === 0) {
      return 'The Basics';
    }
    return `Season ${season.number}`;
  }

  render() {
    return (
      <SelectEpisodeComponent
        episodes={this.props.episodes}
        title={this.title()}
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
