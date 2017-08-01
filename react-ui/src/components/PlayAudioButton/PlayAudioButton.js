import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Clickable } from '../Shared';
import { Icon } from 'semantic-ui-react';

class PlayAudioButton extends Component {

  render() {
    return (
      <Clickable>
        <Icon
          name="video play outline"
          size="huge"
          color="teal"
          onClick={() => this.props.playAudio()}
        />
      </Clickable>
    );
  }
}

PlayAudioButton.propTypes = {
  playAudio: propTypes.func.isRequired
};

export default PlayAudioButton;
