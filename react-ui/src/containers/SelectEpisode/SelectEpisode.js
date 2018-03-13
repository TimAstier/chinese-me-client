import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import { SelectEpisode as SelectEpisodeComponent } from '../../components';
import s from '../../rootSelectors';
import Immutable from 'immutable';
import { Season } from '../../models';
import { actions as studyActions } from '../../redux/study';
import { actions as mapActions } from '../../redux/map';

class SelectEpisodeScreen extends Component {
  componentDidMount() {
    this.props.setCurrentEpisodeId(null);
    this.props.setFocusedEpisodeId(null);
  }

  // TODO: Add a title field in DB (in a translation table)
  _title() {
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
        title={this._title()}
        seasonNumber={this.props.currentSeason.number}
      />
    );
  }
}

SelectEpisodeScreen.propTypes = {
  episodes: propTypes.instanceOf(Immutable.OrderedMap).isRequired,
  currentSeason: propTypes.instanceOf(Season),
  setCurrentEpisodeId: propTypes.func.isRequired,
  setFocusedEpisodeId: propTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    episodes: s.getCurrentSeasonEpisodes(state),
    currentSeason: s.getCurrentSeason(state)
  };
};

export default connect(
  mapStateToProps,
  {
    setCurrentEpisodeId: studyActions.setCurrentEpisodeId,
    setFocusedEpisodeId: mapActions.setFocusedEpisodeId
  }
)(SelectEpisodeScreen);
