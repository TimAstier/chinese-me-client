import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { MapSidebar as MapSidebarComponent } from '../../components';
import selectors from '../../rootSelectors';
import { actions as mapActions } from '../../redux/map';
import Immutable from 'immutable';
import { Season } from '../../models';

class MapSidebar extends Component {

  render() {
    return (
      <MapSidebarComponent { ...this.props } />
    );
  }
}

MapSidebar.propTypes = {
  seasons: propTypes.instanceOf(Immutable.OrderedMap).isRequired,
  episodes: propTypes.instanceOf(Immutable.OrderedMap).isRequired,
  currentEpisodeId: propTypes.number,
  focusedEpisodeId: propTypes.number,
  currentSeason: propTypes.instanceOf(Season),
  setFocusedEpisodeId: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentEpisodeId: Number(selectors.getCurrentEpisodeId(state)),
  seasons: selectors.getSeasons(state),
  episodes: selectors.getEpisodes(state),
  focusedEpisodeId: Number(selectors.getFocusedEpisodeId(state)),
  currentSeason: selectors.getCurrentSeason(state)
});

export default connect(
  mapStateToProps,
  {
    setFocusedEpisodeId: mapActions.setFocusedEpisodeId
  }
)(MapSidebar);
