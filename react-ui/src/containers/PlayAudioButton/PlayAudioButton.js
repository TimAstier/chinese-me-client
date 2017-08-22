import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { PlayAudioButton as PlayAudioButtonComponent } from '../../components';
import { actions } from '../../sagas/actions';
import selectors from '../../rootSelectors';

class PlayAudioButton extends Component {

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
    playAudio: actions.playAudio
  })(PlayAudioButton);
