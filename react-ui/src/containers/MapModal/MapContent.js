import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { MapContent as MapContentComponent } from '../../components';
import * as models from '../../models';
import s from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';

class MapContent extends Component {

  render() {
    return (
      <MapContentComponent { ...this.props } />
    );
  }
}

MapContent.propTypes = {
  focusedSeasonNumber: propTypes.number,
  episode: propTypes.instanceOf(models.Episode),
  characters: propTypes.array.isRequired,
  grammars: propTypes.array.isRequired,
  dialogs: propTypes.array.isRequired,
  practices: propTypes.array.isRequired,
  mapLinkClick: propTypes.func.isRequired,
  mapCharactersCompletedCount: propTypes.number.isRequired,
  mapDialogsCompletedCount: propTypes.number.isRequired,
  mapGrammarsCompletedCount: propTypes.number.isRequired
};

const mapStateToProps = state => ({
  focusedSeasonNumber: s.getFocusedSeasonNumber(state),
  episode: s.getFocusedEpisode(state),
  characters: s.map.getCharacters(state).toJS(),
  grammars: s.map.getGrammars(state).toJS(),
  dialogs: s.map.getDialogs(state).toJS(),
  practices: s.map.getPractices(state).toJS(),
  mapCharactersCompletedCount: s.getMapCharactersCompletedCount(state),
  mapDialogsCompletedCount: s.getMapDialogsCompletedCount(state),
  mapGrammarsCompletedCount: s.getMapGrammarsCompletedCount(state)
});

export default connect(
  mapStateToProps,
  {
    mapLinkClick: sagaActions.mapLinkClick
  }
)(MapContent);
