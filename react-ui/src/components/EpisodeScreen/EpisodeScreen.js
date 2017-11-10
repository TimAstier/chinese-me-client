import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ScreenWrapper } from '../.';
import TopMiddleWrapper from './TopMiddleWrapper';
import { ScreenButton, PlayAudioButton, PauseButton, HanziAgainButton }
  from '../../containers';
import { Clickable } from '../Shared';

// 2nd level wrappers

const TopWrapper = styled.div`
  flex: 0 0 80px;
  display: flex;
`;

const MiddleWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
`;

const BottomWrapper = styled.div`
  flex: 0 0 100px;
  display: flex;
`;

// 3rd level wrappers

const BottomLeftWrapper = styled.div`
  flex: 0 0 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomRightWrapper = styled.div`
  flex: 0 0 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BottomMiddleWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopLeftWrapper = styled.div`
  flex: 0 0 100px;
  display: flex;
  justify-content: center;
  align-items: center;
	font-family: 'Open Sans';
	font-size: 20px;
	color: #b2babf;
`;

const TopRightWrapper = styled.div`
  flex: 0 0 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ExitIcon = styled.div`
  font-family: Open Sans;
  
  color: #959595;
  div:nth-child(2) {
    font-size: 14px;
  }
`;

class EpisodeScreen extends Component {

  renderBottomMiddleWrapper() {
    const { playAudio, pause, hanziAgain } = this.props;
    if (playAudio) {
      return <PlayAudioButton />;
    }
    if (pause) {
      return <PauseButton />;
    }
    if (hanziAgain) {
      return <HanziAgainButton />;
    }
    return null;
  }

  render() {
    const { next } = this.props;
    return (
      <ScreenWrapper>
        <TopWrapper>
          <TopLeftWrapper>
            <Clickable>
              <ExitIcon onClick={this.props.exit}>
                Exit
              </ExitIcon>
            </Clickable>
          </TopLeftWrapper>
          <TopMiddleWrapper elementType={this.props.elementType} />
          <TopRightWrapper />
        </TopWrapper>
        <MiddleWrapper>
          {this.props.children}
        </MiddleWrapper>
        <BottomWrapper>
          <BottomLeftWrapper />
          <BottomMiddleWrapper>
            {this.renderBottomMiddleWrapper()}
          </BottomMiddleWrapper>
          <BottomRightWrapper>
            {next &&
              <ScreenButton
                text="Next"
                primary
                action="next"
              />
            }
          </BottomRightWrapper>
        </BottomWrapper>
      </ScreenWrapper>
    );
  }
}

EpisodeScreen.propTypes = {
  elementType: propTypes.string,
  next: propTypes.bool,
  playAudio: propTypes.bool,
  hanziAgain: propTypes.bool,
  pause: propTypes.bool,
  children: propTypes.object,
  exit: propTypes.func.isRequired
};

export default EpisodeScreen;
