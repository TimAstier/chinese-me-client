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
  episode: propTypes.instanceOf(models.Episode),
  characters: propTypes.array.isRequired,
  grammars: propTypes.array.isRequired,
  dialogs: propTypes.array.isRequired,
  mapLinkClick: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  episode: selectors.getFocusedEpisode(state),
  characters: selectors.getMapCharacters(state).toJS(),
  grammars: selectors.getMapGrammars(state).toJS(),
  dialogs: selectors.getMapDialogs(state).toJS()
});

export default connect(
  mapStateToProps,
  {
    mapLinkClick: sagaActions.mapLinkClick
  }
)(MapContent);
