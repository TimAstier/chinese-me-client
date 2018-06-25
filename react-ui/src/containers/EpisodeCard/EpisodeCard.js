import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions as sagaActions } from '../../sagas/actions';
import { Episode } from '../../models';
import { EpisodeCard as EpisodeCardComponent } from '../../components';
import { push } from 'react-router-redux';
import propTypes from 'prop-types';
import assetEndpointToUrl from '../../helpers/assetEndpointToUrl';
import { imageNames } from '../../constants/urls';
import swal from 'sweetalert';

class EpisodeCard extends Component {
  _imageUrl() {
    const images = imageNames[`S${this.props.seasonNumber}E${this.props.episode.number}`];
    if (images && images[0]) {
      return assetEndpointToUrl(`/images/${images[0]}`);
    }
    return 'http://via.placeholder.com/120x120';
  }

  _redirectUser = () => {
    this.props.sawNoticePopup('free_trial');
    return swal({
      title: 'Free trial',
      text: 'Only the first three episodes are available for free.\n\nPlease consider buying the full season if you like this learning experience. This allows us to continue creating more content and improving the way people learn Chinese.\n\nThank you!\n\nThe ChineseMe team',
      icon: 'info',
      button: 'Got it!'
    });
  }

  onClick() {
    if (this.props.episode.locked) {
      return () => this._redirectUser();
    }
    return () => this.props.startEpisode(
      this.props.seasonNumber,
      this.props.episode.number
    );
  }

  render() {
    return (
      <EpisodeCardComponent
        onClick={this.onClick()}
        id={this.props.episode.id}
        number={this.props.episode.number}
        title={this.props.episode.title}
        score={this.props.episode.score}
        imageUrl={this._imageUrl()}
        locked={this.props.episode.locked}
      />
    );
  }
}

EpisodeCard.propTypes = {
  episode: propTypes.instanceOf(Episode).isRequired,
  startEpisode: propTypes.func.isRequired,
  seasonNumber: propTypes.number.isRequired,
  push: propTypes.func.isRequired,
  sawNoticePopup: propTypes.func.isRequired
};

export default connect(
  null,
  {
    startEpisode: sagaActions.startEpisode,
    push,
    sawNoticePopup: sagaActions.sawNoticePopup
  }
)(EpisodeCard);
