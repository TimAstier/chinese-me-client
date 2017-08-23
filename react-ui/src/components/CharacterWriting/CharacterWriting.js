import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Character } from '../../models';
import styled from 'styled-components';
import { VideoPlayer } from '../../containers';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class CharacterWriting extends Component {
  render() {
    // List of video events available here:
    // https://facebook.github.io/react/blog/2015/09/10/react-v0.14-rc1.html
    return (
      <Wrapper>
        <VideoPlayer
          width={676}
          height={380}
          src={this.props.character.writingUrl}
        />
      </Wrapper>
    );
  }
}

CharacterWriting.propTypes = {
  character: propTypes.instanceOf(Character).isRequired
};

export default CharacterWriting;
