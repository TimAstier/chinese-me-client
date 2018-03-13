import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { VideoPlayer as VideoPlayerComponent } from '../../components';
import s from '../../rootSelectors';
import { actions as sagaActions } from '../../sagas/actions';

class VideoPlayer extends Component {
  render() {
    return (
      <VideoPlayerComponent
        width={this.props.width || '100%'}
        height={this.props.height || 'auto'}
        autoPlay={this.props.autoPlay}
        src={this.props.src}
        onEnded={() => this.props.videoEnded(this.props.src)}
      />
    );
  }
}

VideoPlayer.propTypes = {
  width: propTypes.number,
  height: propTypes.number,
  autoPlay: propTypes.bool,
  src: propTypes.string,
  videoEnded: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  autoPlay: s.video.getAutoPlay(state)
});

export default connect(
  mapStateToProps,
  {
    videoEnded: sagaActions.videoEnded
  }
)(VideoPlayer);
