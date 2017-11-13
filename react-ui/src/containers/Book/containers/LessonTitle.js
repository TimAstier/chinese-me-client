import React, { Component } from 'react';
import propTypes from 'prop-types';
import { bookComponents as c } from '../../../components';
import * as models from '../../../models';

class LessonTitle extends Component {

  render() {
    return (
      <c.LessonTitle
        seasonNumber={this.props.seasonNumber}
        episodeNumber={this.props.episode.number}
        title={this.props.episode.title}
      />
    );
  }
}

LessonTitle.propTypes = {
  seasonNumber: propTypes.number.isRequired,
  episode: propTypes.instanceOf(models.Episode).isRequired
};

export default LessonTitle;
