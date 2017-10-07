import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { PlayAudioButton as PlayAudioButtonComponent } from '../../components';
import { actions as sagaActions } from '../../sagas/actions';
import selectors from '../../rootSelectors';

class PlayAudioButton extends Component {
  constructor() {
    super();
    this.handleEnterKeyPress = this.handleEnterKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEnterKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEnterKeyPress);
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
          : () => this.props.playAudio()
        }
        isPlaying={this.props.isPlaying}
      />
    );
  }
}

PlayAudioButton.propTypes = {
  playAudio: propTypes.func.isRequired,
  onClick: propTypes.func,
  isPlaying: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isPlaying: selectors.getIsPlaying(state)
});

export default connect(
  mapStateToProps,
  {
    playAudio: sagaActions.playAudio
  })(PlayAudioButton);
