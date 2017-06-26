import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { ScreenButton, ProgressBar, StepsBar, ScreenWrapper } from '../.';

// 2nd level wrappers

const TopWrapper = styled.div`
  flex: 0 0 85px;
  border-bottom: solid 2px #efefef;
  display: flex;
`;

const MiddleWrapper = styled.div`
  flex: 1 0 0;
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

  render() {
    const { next, skip, progressBarOptions, stepsOptions } = this.props;
    // const { type, currentElement, totalElements } = progressBarOptions;
    return (
      <ScreenWrapper>
        <TopWrapper>
          <TopLeftWrapper>
            <ExitIcon>Exit</ExitIcon>
            <Icon name="unordered list" size="big" color="teal" />
          </TopLeftWrapper>
          <TopMiddleWrapper>
            {progressBarOptions &&
              <ProgressBar {...progressBarOptions} />
            }
          </TopMiddleWrapper>
          <TopRightWrapper>
            <Icon name="map outline" size="big" color="teal" />
            <Icon name="help circle outline" size="big" color="teal" />
          </TopRightWrapper>
        </TopWrapper>
        <MiddleWrapper></MiddleWrapper>
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
              <ScreenButton text="Next" primary />
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
  stepsOptions: propTypes.object
};

export default EpisodeScreen;
