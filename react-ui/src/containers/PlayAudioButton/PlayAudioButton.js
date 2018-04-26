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
    if (!(this.props.keyPress === false)) {
      document.addEventListener('keydown', this.handleEnterKeyPress);
    }
  }

  componentWillUnmount() {
    if (!(this.props.keyPress === false)) {
      document.removeEventListener('keydown', this.handleEnterKeyPress);
    }
  }

  _playAudio() {
    if (this.props.onClick) {
      return this.props.onClick;
    }
    return () => {
      if (this.props.trackClick) {
        this.props.clickedBookButton({
          type: 'sound',
          src: this.props.url,
          text: this.props.text
        });
      }
      this.props.playAudio(
        this.props.url,
        this.props.slowUrl,
        this.props.text,
        this.props.slow,
        this.props.toggleSlow,
        this.props.origin
      );
    };
  }

  handleEnterKeyPress(event) {
    if (event.keyCode === 32) {
      return this._playAudio()();
    }
    return null;
  }

  render() {
    return (
      <PlayAudioButtonComponent
        onClick={this._playAudio()}
        small={this.props.small}
        big={this.props.big}
        isPlaying={this.props.isPlaying}
        isLoading={this.props.isLoading}
        printLink={this.props.printLink}
        currentUrl={this.props.currentUrl}
        requireActive={this.props.requireActive}
      />
    );
  }
}

PlayAudioButton.propTypes = {
  playAudio: propTypes.func.isRequired,
  onClick: propTypes.func,
  isPlaying: propTypes.bool.isRequired,
  isLoading: propTypes.bool.isRequired,
  url: propTypes.string,
  slowUrl: propTypes.string,
  text: propTypes.string,
  keyPress: propTypes.bool,
  requireActive: propTypes.bool,
  small: propTypes.bool,
  big: propTypes.bool,
  toggleSlow: propTypes.bool,
  slow: propTypes.bool,
  origin: propTypes.string,
  trackClick: propTypes.bool,
  clickedBookButton: propTypes.func.isRequired,
  printLink: propTypes.bool,
  currentUrl: propTypes.string.isRequired
};

const mapStateToProps = state => ({
  isPlaying: s.audio.getIsPlaying(state),
  isLoading: s.audio.getIsLoading(state),
  currentUrl: s.routing.getCurrentUrl(state)
});

export default connect(
  mapStateToProps,
  {
    playAudio: sagaActions.playAudio,
    clickedBookButton: sagaActions.clickedBookButton
  })(PlayAudioButton);
