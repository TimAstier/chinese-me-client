import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { MapContent as MapContentComponent } from '../../components';
import * as models from '../../models';
import selectors from '../../rootSelectors';
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
  mapLinkClick: propTypes.func.isRequired,
  mapCharactersCompletedCount: propTypes.number.isRequired,
  mapDialogsCompletedCount: propTypes.number.isRequired,
  mapGrammarsCompletedCount: propTypes.number.isRequired
};

const mapStateToProps = state => ({
  focusedSeasonNumber: selectors.getFocusedSeasonNumber(state),
  episode: selectors.getFocusedEpisode(state),
  characters: selectors.getMapCharacters(state).toJS(),
  grammars: selectors.getMapGrammars(state).toJS(),
  dialogs: selectors.getMapDialogs(state).toJS(),
  mapCharactersCompletedCount: selectors.getMapCharactersCompletedCount(state),
  mapDialogsCompletedCount: selectors.getMapDialogsCompletedCount(state),
  mapGrammarsCompletedCount: selectors.getMapGrammarsCompletedCount(state)
});

export default connect(
  mapStateToProps,
  {
    mapLinkClick: sagaActions.mapLinkClick
  }
)(MapContent);
