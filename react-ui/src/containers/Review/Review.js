import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { Review as ReviewComponent } from '../../components';
import { Episode } from '../../models';
import s from '../../rootSelectors';
import { push } from 'react-router-redux';

class Review extends Component {
  _itemClick(practiceId) {
    return this.props.push(
      `/study/${this.props.episode.id}/practice/${practiceId}`
    );
  }

  render() {
    return (
      <ReviewComponent
        episode={this.props.episode}
        recommended={this.props.recommended}
        itemClick={this._itemClick.bind(this)}
      />
    );
  }
}

Review.propTypes = {
  episode: propTypes.instanceOf(Episode).isRequired,
  recommended: propTypes.bool.isRequired,
  push: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  episode: s.getCurrentEpisode(state),
  recommended: s.review.getRecommended(state)
});

export default connect(
  mapStateToProps,
  {
    push
  }
)(Review);
