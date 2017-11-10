import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { StudyVideo } from '../../components';
import s from '../../rootSelectors';
import * as models from '../../models';

class Video extends Component {

  render() {
    return <StudyVideo videoUrl={this.props.video.videoUrl} />;
  }
}

Video.propTypes = {
  video: propTypes.instanceOf(models.Video).isRequired
};

const mapStateToProps = state => ({
  video: s.getCurrentVideo(state)
});

export default connect(
  mapStateToProps
)(Video);
