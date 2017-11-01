import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { SelectEpisode as SelectEpisodeComponent } from '../../components';
import s from '../../rootSelectors';
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
        currentSeasonNumber={
          this.props.currentSeason ?
          this.props.currentSeason.get('number')
          : undefined
        }
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
    episodes: s.getCurrentSeasonEpisodes(state),
    currentSeason: s.getCurrentSeason(state)
  };
};

export default connect(
  mapStateToProps
)(SelectEpisodeScreen);
