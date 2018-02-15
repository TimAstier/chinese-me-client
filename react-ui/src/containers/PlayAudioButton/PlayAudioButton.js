import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { PlayAudioButton as PlayAudioButtonComponent } from '../../components';
import { actions as sagaActions } from '../../sagas/actions';
import s from '../../rootSelectors';

class PlayAudioButton extends Component {
  constructor() {
    super();
    this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
  }

  componentDidMount() {
    if (!this.props.keyPress === false) {
      document.addEventListener('keydown', this.handleEnterKeyPress);
    }
  }

  componentWillUnmount() {
    if (!this.props.keyPress === false) {
      document.removeEventListener('keydown', this.handleEnterKeyPress);
    }
  }

  handleEnterKeyPress(event) {
    if (event.keyCode === 32) {
      return this.props.onClick ? this.props.onClick() : this.props.playAudio();
    }
    return null;
  }

  render() {
    return (
      <PlayAudioButtonComponent
        onClick={this.props.onClick ?
          this.props.onClick
          : () => {
            this.props.playAudio(
              this.props.url,
              this.props.slowUrl,
              this.props.text,
              this.props.slow,
              this.props.toggleSlow,
              this.props.origin
            );
          }
        }
        small={this.props.small}
        big={this.props.big}
        isPlaying={this.props.animation === false ? false : this.props.isPlaying}
      />
    );
  }
}

PlayAudioButton.propTypes = {
  playAudio: propTypes.func.isRequired,
  onClick: propTypes.func,
  isPlaying: propTypes.bool.isRequired,
  url: propTypes.string,
  slowUrl: propTypes.string,
  text: propTypes.string,
  keyPress: propTypes.bool,
  animation: propTypes.bool,
  small: propTypes.bool,
  big: propTypes.bool,
  toggleSlow: propTypes.bool,
  slow: propTypes.bool,
  origin: propTypes.string
};

const mapStateToProps = state => ({
  isPlaying: s.audio.getIsPlaying(state)
});

export default connect(
  mapStateToProps,
  {
    playAudio: sagaActions.playAudio
  })(PlayAudioButton);
