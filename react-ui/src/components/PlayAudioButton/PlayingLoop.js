import React, { Component } from 'react';
import propTypes from 'prop-types';
import iconAudioPlayingA from '../../images/iconAudioPlayingA.svg';
import iconAudioPlayingB from '../../images/iconAudioPlayingB.svg';
import iconAudioPlayingC from '../../images/iconAudioPlayingC.svg';

// NOTE: icons need to be preloaded in order to avoid twinkling effects

class PlayingLoop extends Component {
  // Timer from react docs:
  // https://facebook.github.io/react/docs/state-and-lifecycle.html
  constructor(props) {
    super(props);
    this.state = { time: 0 };
    this.playingIcons = [
      iconAudioPlayingA,
      iconAudioPlayingB,
      iconAudioPlayingC
    ];
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this._tick(),
      600
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  _tick() {
    this.setState({
      time: this.state.time + 1
    });
  }

  _loopPlayingIcons() {
    return this.playingIcons[this.state.time % 3];
  }

  render() {
    return (
      <img
        src={this._loopPlayingIcons()}
        alt=""
        height={this.props.size}
        width={this.props.size}
      />
    );
  }
}

PlayingLoop.propTypes = {
  size: propTypes.number.isRequired
};

export default PlayingLoop;
