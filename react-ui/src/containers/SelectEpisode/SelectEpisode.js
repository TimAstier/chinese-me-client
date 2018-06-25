import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { replace } from 'react-router-redux';

import { SelectEpisode as SelectEpisodeComponent } from '../../components';
import s from '../../rootSelectors';
import Immutable from 'immutable';
import { Season } from '../../models';
import { actions as studyActions } from '../../redux/study';
import { actions as mapActions } from '../../redux/map';
import { actions as sagaActions } from '../../sagas/actions';

class SelectEpisodeScreen extends Component {
  componentWillMount() {
    const currentSeason = this.props.seasons
      .find(obj => obj.get('number') === Number(this.props.params.seasonNumber));
    if (!currentSeason) {
      return this.props.replace('/404');
    }
    return this.props.setCurrentSeasonId(currentSeason.id);
  }

  componentDidMount() {
    this.props.setCurrentEpisodeId(null);
    this.props.setFocusedEpisodeId(null);
  }

  _initialized() {
    if (!this.props.currentSeason) {
      return false;
    }
    if (this.props.isAuthenticated === false) {
      return true;
    }
    return this.props.userSettings.get('giftCode') !== undefined;
  }

  // TODO: Add a title field in DB (in a translation table)
  render() {
    return (
      <SelectEpisodeComponent
        episodes={this.props.episodes}
        seasonNumber={Number(this.props.params.seasonNumber)}
        userEmail={ this.props.userEmail }
        initialized={ this._initialized() }
        giftCode={ this.props.userSettings ?
          this.props.userSettings.get('giftCode')
          : false
        }
        season={ this.props.currentSeason }
        unlockSeason={this.props.unlockSeason}
      />
    );
  }
}

SelectEpisodeScreen.propTypes = {
  episodes: propTypes.instanceOf(Immutable.OrderedMap).isRequired,
  seasons: propTypes.instanceOf(Immutable.OrderedMap).isRequired,
  currentSeason: propTypes.instanceOf(Season),
  setCurrentEpisodeId: propTypes.func.isRequired,
  setCurrentSeasonId: propTypes.func.isRequired,
  setFocusedEpisodeId: propTypes.func.isRequired,
  params: propTypes.object.isRequired,
  replace: propTypes.func.isRequired,
  userEmail: propTypes.string,
  userSettings: propTypes.object.isRequired,
  unlockSeason: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    episodes: s.getCurrentSeasonEpisodes(state),
    seasons: s.entities.getSeasons(state),
    currentSeason: s.getCurrentSeason(state),
    userEmail: s.auth.getCurrentUserEmail(state),
    userSettings: s.settings.getSettings(state),
    isAuthenticated: s.auth.getIsAuthenticated(state)
  };
};

export default connect(
  mapStateToProps,
  {
    setCurrentEpisodeId: studyActions.setCurrentEpisodeId,
    setCurrentSeasonId: studyActions.setCurrentSeasonId,
    setFocusedEpisodeId: mapActions.setFocusedEpisodeId,
    unlockSeason: sagaActions.unlockSeason,
    replace
  }
)(SelectEpisodeScreen);
