import React, { Component } from 'react';
import propTypes from 'prop-types';
import iconPlayAudio from '../../images/iconPlayAudio.svg';
import iconAudioPlayingA from '../../images/iconAudioPlayingA.svg';
import iconAudioPlayingB from '../../images/iconAudioPlayingB.svg';
import iconAudioPlayingC from '../../images/iconAudioPlayingC.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 40px;
  width: 40px;
  :hover {
    opacity: 0.92;
  }
  cursor: pointer;
`;

class PlayAudioButton extends Component {
  // BUG: twinkling button (probably need to preload icons)

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
      () => this.tick(),
      600
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: this.state.time + 1
    });
  }

  loopPlayingIcons() {
    return this.playingIcons[this.state.time % 3];
  }

  renderImage() {
    if (!this.props.isPlaying) {
      return (
        <img
          src={iconPlayAudio}
          alt="play audio"
        />
      );
    }

    return (
      <img
        src={this.loopPlayingIcons()}
        alt="audio playing"
      />
    );
  }

  render() {
    return (
      <Wrapper onClick={this.props.onClick}>
        {this.renderImage()}
      </Wrapper>
    );
  }
}

PlayAudioButton.propTypes = {
  onClick: propTypes.func.isRequired,
  isPlaying: propTypes.bool
};

export default PlayAudioButton;
