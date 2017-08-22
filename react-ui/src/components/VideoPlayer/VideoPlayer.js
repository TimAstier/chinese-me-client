import React, { Component } from 'react';
import propTypes from 'prop-types';

class VideoPlayer extends Component {

  render() {
    return (
      <video
        width={this.props.width}
        height={this.props.height}
        controls
        autoPlay={this.props.autoPlay}
        onEnded={this.props.videoEnded}
      >
        <source src={this.props.src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
}

VideoPlayer.propTypes = {
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  autoPlay: propTypes.bool,
  src: propTypes.string.isRequired,
  videoEnded: propTypes.func.isRequired
};

export default VideoPlayer;
