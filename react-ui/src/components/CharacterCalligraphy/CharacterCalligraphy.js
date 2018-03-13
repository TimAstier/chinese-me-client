import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { bookComponents as c } from '../.';
import brushIcon from '../../images/brushIcon.svg';
import { VideoPlayer } from '../../containers';
import { practiceSheet } from '../../constants/urls';
import Media from 'react-media';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  min-height: 550px;
  max-width: 100%;
`;

const TitleWrapper = styled.div`
  margin-top: -25px;
  text-align: center;
  pointer-events: none;
`;

const Img = styled.img`
  max-width: 40px;
  max-height: 40px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

const MiddleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 3px solid red;
  border-bottom: 3px solid red;
  flex-grow: 1;
`;

const VideoWrapper = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  flex: 1 0 0;
`;

const ContentWrapper = styled.div`
  flex: 1 0 0;
  overflow-y: auto;
  padding-top: 15px;
  padding-bottom: 15px;
  max-width: 650px;
  height: 450px;
  ${''/* Always display the scrollbar  */}
  ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 7px;
  };
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: rgba(0,0,0,.5);
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
  };
`;

const PrintWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'cambria';
  font-size: 16px;
  min-height: 50px;
  a {
    text-decoration: underline;
  }
`;

class CharacterCalligraphy extends Component {
  _renderVideo() {
    return (
      <VideoWrapper>
        {
          (this.props.videoUrl) ?
            <VideoPlayer
              src={this.props.videoUrl}
            />
          : <img src="http://via.placeholder.com/500x281" alt="" />
        }
      </VideoWrapper>
    );
  }

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
            <Media
              query="(max-width: 900px)"
              render={() => this._renderVideo()}
            />
            <this.props.content />
          </ContentWrapper>
          <Media
            query="(min-width: 901px)"
            render={() => this._renderVideo()}
          />
        </MiddleWrapper>
        <PrintWrapper>
          <i>
            Print out a <a href={practiceSheet} target="_blank" rel="noopener noreferrer">practice sheet</a>
          </i>
        </PrintWrapper>
      </Wrapper>
    );
  }
}

CharacterCalligraphy.propTypes = {
  content: propTypes.func.isRequired,
  character: propTypes.string.isRequired,
  videoUrl: propTypes.string
};

export default CharacterCalligraphy;
