import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { ProgressMenu, ScreenWrapper } from '../.';
import { ScreenButton, StepsBar, PlayAudioButton } from '../../containers';
import { Clickable } from '../Shared';
import { FeedbackModal } from '../../containers';

// 2nd level wrappers

const TopWrapper = styled.div`
  flex: 0 0 85px;
  border-bottom: solid 2px #efefef;
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
  flex: 0 0 130px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TopRightWrapper = styled.div`
  flex: 0 0 130px;
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
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopMiddleDownWrapper = styled.div`
  flex: 1 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ExitIcon = styled.div`
  font-family: Open Sans;
  font-size: 20px;
  color: #959595;
`;

class EpisodeScreen extends Component {

  renderTopMiddleWrapper() {
    const { progressMenuOptions, screenLabel, stepsOptions } = this.props;
    const Label = styled.span`
      font-family: 'Open Sans';
      font-size: 20px;
      color: #949494;
    `;
    return (
      <TopMiddleWrapper>
        <TopMiddleUpWrapper>
          {progressMenuOptions && <ProgressMenu {...progressMenuOptions} />}
          {screenLabel && <Label>{screenLabel}</Label>}
        </TopMiddleUpWrapper>
        <TopMiddleDownWrapper>
          {stepsOptions && <StepsBar {...stepsOptions} />}
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
    // const { type, currentElement, totalElements } = progressMenuOptions;
    return (
      <ScreenWrapper>
        <FeedbackModal />
        <TopWrapper>
          <TopLeftWrapper>
            <Clickable>
              <ExitIcon onClick={this.props.exit}>
                Exit
              </ExitIcon>
            </Clickable>
            <Clickable>
              <Icon
                name="unordered list"
                size="big"
                color="teal"
              />
            </Clickable>
          </TopLeftWrapper>
          {this.renderTopMiddleWrapper()}
          <TopRightWrapper>
            <Clickable>
              <Icon
                name="map outline"
                size="big"
                color="teal"
                onClick={this.props.displayEpisodeOverview}
              />
            </Clickable>
            <Clickable>
              <Icon
                name="help circle outline"
                size="big"
                color="teal"
                onClick={this.props.askQuestion}
              />
            </Clickable>
          </TopRightWrapper>
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
  progressMenuOptions: propTypes.object,
  stepsOptions: propTypes.object,
  screenLabel: propTypes.string,
  children: propTypes.object,
  askQuestion: propTypes.func.isRequired,
  displayEpisodeOverview: propTypes.func.isRequired,
  exit: propTypes.func.isRequired
};

export default EpisodeScreen;
