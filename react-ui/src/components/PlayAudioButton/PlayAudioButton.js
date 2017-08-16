import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Clickable } from '../Shared';
import iconPlayAudio from '../../images/iconPlayAudio.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  :hover {
    opacity: 0.92;
  }
`;

class PlayAudioButton extends Component {

  render() {
    return (
      <Clickable>
        <Wrapper>
          <img
            src={iconPlayAudio}
            alt="play audio"
            onClick={() => this.props.playAudio()}
          />
        </Wrapper>
      </Clickable>
    );
  }
}

PlayAudioButton.propTypes = {
  playAudio: propTypes.func.isRequired
};

export default PlayAudioButton;
