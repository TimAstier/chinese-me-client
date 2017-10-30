import React, { Component } from 'react';
import propTypes from 'prop-types';

class VideoPlayer extends Component {
  componentDidMount() {
    this.videoTag = this.refs.videoTag;
    this.handleEnterKeyPress = event => {
      if (event.keyCode === 32) {
        return this.videoTag.paused ? this.videoTag.play() : this.videoTag.pause();
      }
      return null;
    };
    this.handleDblClick = () => {
      if (this.videoTag.requestFullscreen) {
        this.videoTag.requestFullscreen();
      } else if (this.videoTag.mozRequestFullScreen) {
        this.videoTag.mozRequestFullScreen();
      } else if (this.videoTag.webkitRequestFullscreen) {
        this.videoTag.webkitRequestFullscreen();
      }
    };
    document.addEventListener('keydown', this.handleEnterKeyPress);
    document.addEventListener('dblclick', this.handleDblClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEnterKeyPress);
    document.removeEventListener('dblclick', this.handleDblClick);
  }

  render() {
    return (
      <video
        ref="videoTag"
        width={this.props.width}
        height={this.props.height}
        controls
        autoPlay={this.props.autoPlay}
        onEnded={this.props.onEnded}
        src={this.props.src}
      />
    );
  }
}

VideoPlayer.propTypes = {
  width: propTypes.number.isRequired,
  height: propTypes.number.isRequired,
  autoPlay: propTypes.bool,
  src: propTypes.string,
  onEnded: propTypes.func.isRequired
};

export default VideoPlayer;
