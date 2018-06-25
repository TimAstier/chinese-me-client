import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ScreenButton, Star } from '../.';
import { Spinner } from '../.';
import containsChinese from '../../utils/containsChinese';
import { MINIMUM_SCORE_TO_PASS, TWO_STARS_THRESHOLD, THREE_STARS_THRESHOLD }
  from '../../constants/exam';

const Preload = require('react-preloaded').Preload;

const Wrapper = styled.div`
  width: 250px;
  height: 291px;
  padding-top: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  background-color: #ffffff;
`;

const ImageWrapper = styled.div`
  height: 120px;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 60px;
  overflow: hidden;
  img {
    height: 100%;
    width: auto;
  }
`;

const NumberWrapper = styled.div`
  height: 20px;
  font-family: 'Open Sans';
	font-size: 14px;
	font-weight: bold;
  color: #b2babf;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const TitleWrapper = styled.div`
  height: 59px;
  font-family: ${props => props.chineseFont ? 'ChineseFont' : 'STKaitiSC' };
  font-size: 22px;
  font-weight: 900;
  color: ${props => props.locked ? '#b2babf' : '#454545'};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 95%;
  line-height: 1.1;
`;

const StatusWrapper = styled.div`
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const ButtonWrapper = styled.div`
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const StarsWrapper = styled.div`
  width: 55px;
  display: flex;
  justify-content: space-between;
`;

class EpisodeCard extends Component {
  _renderStars() {
    if (this.props.score && !this.props.locked) {
      return (
        <StarsWrapper>
          <Star filled={this.props.score >= MINIMUM_SCORE_TO_PASS} />
          <Star filled={this.props.score >= TWO_STARS_THRESHOLD} />
          <Star filled={this.props.score >= THREE_STARS_THRESHOLD} />
        </StarsWrapper>
      );
    }
    return null;
  }

  render() {
    return (
      <Wrapper>
        <Preload
          loadingIndicator={
            <ImageWrapper>
              <Spinner />
            </ImageWrapper>
          }
          images={[ this.props.imageUrl ]}
        >
          <ImageWrapper>
            <img
              src={this.props.imageUrl}
              alt={`episode ${this.props.number}`}
            />
          </ImageWrapper>
        </Preload>
        <NumberWrapper>
          {
            '- EPISODE ' + this.props.number + ' -'
          }
        </NumberWrapper>
        <TitleWrapper
          chineseFont={containsChinese(this.props.title)}
          locked={this.props.locked}
        >
          {this.props.title}
        </TitleWrapper>
        <StatusWrapper>{this._renderStars()}</StatusWrapper>
        <ButtonWrapper>
          <ScreenButton
            text="Study"
            primary={!this.props.locked}
            onClick={this.props.onClick}
            height={40}
            width={140}
            fontSize={16}
          />
        </ButtonWrapper>
      </Wrapper>
    );
  }
}

EpisodeCard.propTypes = {
  id: propTypes.number.isRequired,
  number: propTypes.number.isRequired,
  onClick: propTypes.func,
  title: propTypes.string.isRequired,
  score: propTypes.number,
  imageUrl: propTypes.string,
  locked: propTypes.bool.isRequired
};

export default EpisodeCard;
