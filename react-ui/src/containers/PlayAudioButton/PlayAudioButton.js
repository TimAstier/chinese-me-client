import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { PlayAudioButton as PlayAudioButtonComponent } from '../../components';
import { actions } from '../../sagas/actions';

class PlayAudioButton extends Component {

  render() {
    return (
      <PlayAudioButtonComponent { ...this.props } />
    );
  }
}

PlayAudioButton.propTypes = {
  playAudio: propTypes.func.isRequired
};

export default connect(
  null, {
    playAudio: actions.playAudio
  })(PlayAudioButton);
