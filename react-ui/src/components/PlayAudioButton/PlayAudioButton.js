import React, { Component } from 'react';
import propTypes from 'prop-types';
import iconPlayAudio from '../../images/iconPlayAudio.svg';
import iconAudioPlayingA from '../../images/iconAudioPlayingA.svg';
import iconAudioPlayingB from '../../images/iconAudioPlayingB.svg';
import iconAudioPlayingC from '../../images/iconAudioPlayingC.svg';
import styled from 'styled-components';
import { PRODUCTION_ROOT_URL, PDF_VERSION} from '../../constants/urls';

const Wrapper = styled.div`
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  :hover {
    opacity: 0.92;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  a {
    pointer-events: none;
  }
  @media print {
    a {
      pointer-events: auto;
    }
  }
  @media (max-width: 500px) {
    width: 25px;
    height: 25px;
  }
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
      () => this._tick(),
      600
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  _size() {
    if (this.props.small) {
      return 30;
    }
    if (this.props.big) {
      return 80;
    }
    return 40;
  }

  _tick() {
    this.setState({
      time: this.state.time + 1
    });
  }

  _loopPlayingIcons() {
    return this.playingIcons[this.state.time % 3];
  }

  _renderImage() {
    if (!this.props.isPlaying) {
      return (
        <img
          src={iconPlayAudio}
          alt="play audio"
          height={this._size()}
          width={this._size()}
        />
      );
    }

    return (
      <img
        src={this._loopPlayingIcons()}
        alt="audio playing"
        height={this._size()}
        width={this._size()}
      />
    );
  }

  render() {
    return (
      <Wrapper
        onClick={this.props.onClick}
        size={this._size()}
      >
        <a href={PRODUCTION_ROOT_URL + this.props.currentUrl + '/?utm_source=pdf_v' + PDF_VERSION}>
          {this._renderImage()}
        </a>
      </Wrapper>
    );
  }
}

PlayAudioButton.propTypes = {
  onClick: propTypes.func.isRequired,
  isPlaying: propTypes.bool,
  small: propTypes.bool,
  big: propTypes.bool,
  printLink: propTypes.bool,
  currentUrl: propTypes.string.isRequired
};

export default PlayAudioButton;
