import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { MapContent as MapContentComponent } from '../../components';
import * as models from '../../models';
import s from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';
import { actions as uiActions } from '../../redux/ui';
import { push } from 'react-router-redux';
import swal from 'sweetalert';

class MapContent extends Component {
  _redirectUser = () => {
    return swal({
      title: 'Free trial',
      text: 'Only the first three episodes are available for free.\n\nPlease consider buying the book in the store if you like this learning experience. This allows us to continue creating more content and improving the way people learn Chinese.\n\nThank you!\n\nThe ChineseMe team',
      icon: 'info',
      buttons: ['Maybe later', 'Go to bookstore']
    }).then(bookstore => {
      if (bookstore) {
        this.props.closeMapModal();
        return this.props.push('/study/books');
      }
      return null;
    });
  }

  _handleMapLinkClick = link => {
    if (this.props.episode.locked) {
      return this._redirectUser();
    }
    return this.props.mapLinkClick(link);
  }

  render() {
    return (
      <MapContentComponent
        handleMapLinkClick={this._handleMapLinkClick}
        { ...this.props }
      />
    );
  }
}

MapContent.propTypes = {
  focusedSeasonNumber: propTypes.number,
  episode: propTypes.instanceOf(models.Episode),
  characters: propTypes.array.isRequired,
  grammars: propTypes.array.isRequired,
  pronunciations: propTypes.array.isRequired,
  dialogs: propTypes.array.isRequired,
  mapLinkClick: propTypes.func.isRequired,
  mapCharactersCompletedCount: propTypes.number.isRequired,
  mapDialogsCompletedCount: propTypes.number.isRequired,
  mapGrammarsCompletedCount: propTypes.number.isRequired,
  push: propTypes.func.isRequired,
  closeMapModal: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  focusedSeasonNumber: s.getFocusedSeasonNumber(state),
  episode: s.getFocusedEpisode(state),
  characters: s.map.getCharacters(state).toJS(),
  grammars: s.map.getGrammars(state).toJS(),
  pronunciations: s.map.getPronunciations(state).toJS(),
  dialogs: s.map.getDialogs(state).toJS(),
  mapCharactersCompletedCount: s.getMapCharactersCompletedCount(state),
  mapDialogsCompletedCount: s.getMapDialogsCompletedCount(state),
  mapGrammarsCompletedCount: s.getMapGrammarsCompletedCount(state)
});

export default connect(
  mapStateToProps,
  {
    mapLinkClick: sagaActions.mapLinkClick,
    push,
    closeMapModal: uiActions.closeMapModal
  }
)(MapContent);
