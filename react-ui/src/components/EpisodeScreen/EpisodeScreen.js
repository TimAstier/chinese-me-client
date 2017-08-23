import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ScreenWrapper } from '../.';
import { ElementsNav, ScreenButton, PlayAudioButton } from '../../containers';
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

const TopMiddleWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TopMiddleUpWrapper = styled.div`
  height: 43px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orangered;
`;

const TopMiddleDownWrapper = styled.div`
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const ExitIcon = styled.div`
  font-family: Open Sans;
  font-size: 20px;
  color: #959595;
`;

class EpisodeScreen extends Component {

  renderTopMiddleWrapper() {
    return (
      <TopMiddleWrapper>
        <TopMiddleUpWrapper>
          // TODO: progressBar
        </TopMiddleUpWrapper>
        <TopMiddleDownWrapper>
          <ElementsNav />
        </TopMiddleDownWrapper>
      </TopMiddleWrapper>
    );
  }

  renderBottomMiddleWrapper() {
    const { playAudio } = this.props;
    if (playAudio) {
      return <PlayAudioButton />;
    }
    return null;
  }

  render() {
    const { next, skip } = this.props;
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
          {this.renderTopMiddleWrapper()}
          <TopRightWrapper />
        </TopWrapper>
        <MiddleWrapper>
          {this.props.children}
        </MiddleWrapper>
        <BottomWrapper>
          <BottomLeftWrapper>
            {skip &&
              <ScreenButton
                text="Skip"
                action="skip"
              />
            }
          </BottomLeftWrapper>
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
  next: propTypes.bool,
  skip: propTypes.bool,
  playAudio: propTypes.bool,
  children: propTypes.object,
  exit: propTypes.func.isRequired
};

export default EpisodeScreen;
