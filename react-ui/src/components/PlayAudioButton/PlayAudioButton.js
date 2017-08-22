import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Clickable } from '../Shared';
import iconPlayAudio from '../../images/iconPlayAudio.svg';
import iconAudioPlayingA from '../../images/iconAudioPlayingA.svg';
import iconAudioPlayingB from '../../images/iconAudioPlayingB.svg';
import iconAudioPlayingC from '../../images/iconAudioPlayingC.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  :hover {
    opacity: 0.92;
  }
`;

class PlayAudioButton extends Component {

  // TODO: preload icons
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
          onClick={this.props.onClick}
        />
      );
    }

    return (
      <img
        src={this.loopPlayingIcons()}
        alt="audio playing"
        onClick={this.props.onClick}
      />
    );
  }

  render() {
    return (
      <Clickable>
        <Wrapper>
          {this.renderImage()}
        </Wrapper>
      </Clickable>
    );
  }
}

PlayAudioButton.propTypes = {
  onClick: propTypes.func.isRequired,
  isPlaying: propTypes.bool
};

export default PlayAudioButton;
