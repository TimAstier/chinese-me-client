import React, { Component } from 'react';
import propTypes from 'prop-types';

let videoRef;

class VideoPlayer extends Component {
  constructor() {
    super();
    this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEnterKeyPress);
    document.addEventListener('dblclick', this.handleDblClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEnterKeyPress);
    document.removeEventListener('dblclick', this.handleDblClick);
  }

  handleEnterKeyPress(event) {
    if (event.keyCode === 32) {
      return videoRef.paused ? videoRef.play() : videoRef.pause();
    }
    return null;
  }

  handleDblClick() {
    if (videoRef.requestFullscreen) {
      videoRef.requestFullscreen();
    } else if (videoRef.mozRequestFullScreen) {
      videoRef.mozRequestFullScreen();
    } else if (videoRef.webkitRequestFullscreen) {
      videoRef.webkitRequestFullscreen();
    }
  }

  render() {
    return (
      <video
        ref={video => {videoRef = video;}}
        width={this.props.width}
        height={this.props.height}
        controls
        autoPlay={this.props.autoPlay}
        onEnded={this.props.onEnded}
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
  onEnded: propTypes.func.isRequired
};

export default VideoPlayer;
