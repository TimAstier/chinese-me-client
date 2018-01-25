import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { bookComponents as c } from '../.';
import brushIcon from '../../images/brushIcon.svg';
import { VideoPlayer } from '../../containers';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  min-height: 550px;
`;

const TitleWrapper = styled.div`
  margin-top: -50px;
  text-align: center;
  ${''/* This is a sort of workaround. We should probably use a different
  parent component than EpisodeScreen. See https://robertnyman.com/2010/03/22/
  css-pointer-events-to-allow-clicks-on-underlying-elements/ */}
  pointer-events: none;
`;

const Img = styled.img`
  max-width:40px;
  max-height:40px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

const MiddleWrapper = styled.div`
  display: flex;
  align-items: center;
  border-top: 3px solid red;
  border-bottom: 3px solid red;
  flex-grow: 1;
`;

const VideoWrapper = styled.div`
  margin-left: 20px;
`;

const ContentWrapper = styled.div`
  overflow-y: auto;
  padding-top: 15px;
  padding-bottom: 15px;
  max-width: 650px;
  height: 480px;
`;

const PrintWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-family: 'cambria';
  font-size: 16px;
  min-height: 50px;
  a {
    text-decoration: underline;
  }
`;

class CharacterEtymology extends Component {
  render() {
    if (!this.props.content) {
      return <div>'Error: Could not find calligrphy content file.'</div>;
    }
    return (
      <Wrapper>
        <TitleWrapper>
          <c.PartTitle noMargin>
            <Title>
              <Img src={brushIcon} alt="" />
              {'CALLIGRAPHY'}
              <c.Char>{this.props.character}</c.Char>
            </Title>
          </c.PartTitle>
        </TitleWrapper>
        <MiddleWrapper>
          <ContentWrapper>
            <this.props.content />
          </ContentWrapper>
          <VideoWrapper>
            {
              (this.props.videoUrl) ?
                <VideoPlayer
                  src={this.props.videoUrl}
                  width={500}
                  height={281}
                />
              : <img src="http://via.placeholder.com/500x281" alt="" />
            }
          </VideoWrapper>
        </MiddleWrapper>
        <PrintWrapper>
          <i>
            Print out a <a href="https://s3.eu-west-2.amazonaws.com/chineseme/pdf/Exercise+sheet.pdf" target="_blank" rel="noopener noreferrer">practice sheet</a>
          </i>
        </PrintWrapper>
      </Wrapper>
    );
  }
}

CharacterEtymology.propTypes = {
  content: propTypes.func.isRequired,
  character: propTypes.string.isRequired,
  videoUrl: propTypes.string
};

export default CharacterEtymology;
