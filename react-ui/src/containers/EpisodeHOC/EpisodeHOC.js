import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { EpisodeScreen } from '../.';
import getParamsFromUrl from '../../utils/getParamsFromUrl';
import { actions as studyActions } from '../../redux/study';

class EpisodeHOC extends Component {

  componentWillMount() {
    const { episodeId } = getParamsFromUrl(this.props.location.pathname);
    return this.props.setCurrentEpisodeId(episodeId);
  }

  componentWillUpdate(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      const { episodeId } = getParamsFromUrl(nextProps.location.pathname);
      this.props.setCurrentEpisodeId(episodeId);
    }
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
  location: propTypes.object.isRequired,
  children: propTypes.node.isRequired,
  setCurrentEpisodeId: propTypes.func.isRequired
};

export default connect(
  null,
  {
    setCurrentEpisodeId: studyActions.setCurrentEpisodeId
  }
)(EpisodeHOC);
