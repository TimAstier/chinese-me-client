import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { ScreenButton, Star } from '../.';
import containsChinese from '../../utils/containsChinese';


const Wrapper = styled.div`
  width: 250px;
  height: 281px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
  background-color: #ffffff;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.05);
`;

const ImageWrapper = styled.div`
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const NumberWrapper = styled.div`
  height: 29px;
  font-family: 'Open Sans';
	font-size: 14px;
	font-weight: bold;
  color: #b2babf;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const TitleWrapper = styled.div`
  height: 34px;
  font-family: ${props => props.chineseFont ? 'ChineseFont' : 'STKaitiSC' };
  font-size: 24px;
  font-weight: 900;
  color: #454545;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const StatusWrapper = styled.div`
  height: 37px;
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
    if (this.props.score) {
      return (
        <StarsWrapper>
          <Star filled={this.props.score >= 7} />
          <Star filled={this.props.score >= 8} />
          <Star filled={this.props.score >= 9} />
        </StarsWrapper>
      );
    }
    return null;
  }

  render() {
    return (
      <Wrapper>
        <ImageWrapper>
          <img
            src={this.props.imageUrl}
            alt={`episode ${this.props.number}`}
          />
        </ImageWrapper>
        <NumberWrapper>
          {
            (this.props.currentSeasonNumber !== 0 ? 'Episode ' : 'Lesson ')
              + this.props.number
          }
        </NumberWrapper>
        <TitleWrapper
          chineseFont={containsChinese(this.props.title)}
        >
          {this.props.title}
        </TitleWrapper>
        <StatusWrapper>{this._renderStars()}</StatusWrapper>
        <ButtonWrapper>
          <ScreenButton
            text="Study"
            primary={!this.props.score}
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
  currentSeasonNumber: propTypes.number
};

export default EpisodeCard;
