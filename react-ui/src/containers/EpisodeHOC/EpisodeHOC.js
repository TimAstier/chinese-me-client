import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { EpisodeScreen } from '../.';
import getParamsFromUrl from '../../utils/getParamsFromUrl';
import { actions as studyActions } from '../../redux/study';
import s from '../../rootSelectors';

class EpisodeHOC extends Component {

  componentWillMount() {
    this._setStudyData();
  }

  componentWillUpdate(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this._setStudyData();
    }
  }

  componentWillUnmount() {
    this.props.setInitialized(false);
  }

  _setStudyData() {
    const { episodeId } = getParamsFromUrl(this.props.location.pathname);
    this.props.setCurrentEpisodeId(episodeId);
    this.props.setCurrentSeasonId(this.props.episodes.get(episodeId).seasonId);
  }

  render() {
    return (
      <EpisodeScreen
        url={this.props.location.pathname}
        children={this.props.children}
      />
    );
  }
}

EpisodeHOC.propTypes = {
  episodes: propTypes.object.isRequired,
  location: propTypes.object.isRequired,
  children: propTypes.node.isRequired,
  setCurrentEpisodeId: propTypes.func.isRequired,
  setCurrentSeasonId: propTypes.func.isRequired,
  setInitialized: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  episodes: s.entities.getEpisodes(state)
});

export default connect(
  mapStateToProps,
  {
    setCurrentEpisodeId: studyActions.setCurrentEpisodeId,
    setCurrentSeasonId: studyActions.setCurrentSeasonId,
    setInitialized: studyActions.setInitialized
  }
)(EpisodeHOC);
