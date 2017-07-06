import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { ProgressBar, ScreenWrapper } from '../.';
import { ScreenButton, StepsBar } from '../../containers';
import { Clickable } from '../Shared';

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
  justify-content: center;
  align-items: center;
`;

const ExitIcon = styled.div`
  font-family: Open Sans;
  font-size: 20px;
  color: #959595;
`;

class EpisodeScreen extends Component {

  renderTopMiddleWrapperContent() {
    const { progressBarOptions, screenLabel } = this.props;
    const Label = styled.span`
      font-family: 'Open Sans';
      font-size: 20px;
      color: #949494;
    `;
    if (progressBarOptions) {
      return <ProgressBar {...progressBarOptions} />;
    } else if (screenLabel) {
      return <Label>{screenLabel}</Label>;
    }
    return null;
  }

  render() {
    const { next, skip, stepsOptions } = this.props;
    // const { type, currentElement, totalElements } = progressBarOptions;
    return (
      <ScreenWrapper>
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
          <TopMiddleWrapper>
            {this.renderTopMiddleWrapperContent()}
          </TopMiddleWrapper>
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
              <ScreenButton text="Skip" />
            }
          </BottomLeftWrapper>
          <BottomMiddleWrapper>
            {stepsOptions &&
              <StepsBar {...stepsOptions} />
            }
          </BottomMiddleWrapper>
          <BottomRightWrapper>
            {next &&
              <ScreenButton
                text="Next"
                primary
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
  progressBarOptions: propTypes.object,
  stepsOptions: propTypes.object,
  screenLabel: propTypes.string,
  children: propTypes.object,
  askQuestion: propTypes.func.isRequired,
  displayEpisodeOverview: propTypes.func.isRequired,
  exit: propTypes.func.isRequired
};

export default EpisodeScreen;
