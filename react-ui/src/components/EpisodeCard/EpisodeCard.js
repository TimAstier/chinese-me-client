import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import iconLock from '../../images/iconLock.svg';
import { ScreenButton, Star } from '../.';


const Wrapper = styled.div`
  width: 250px;
  height: 281px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px;
`;

const LockedWrapper = styled(Wrapper)`
  background-color: #f8f8f8;
`;

const NormalWrapper = styled(Wrapper)`
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
  font-family: 'STKaitiSC';
  font-size: 24px;
  font-weight: 900;
  color: ${props => props.locked ? '#b2babf' : '#454545'};
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

const NewLabel = styled.div`
  width: 53px;
  height: 25px;
  border-radius: 12.5px;
  background-color: #f66858;
  font-family: 'Open Sans';
	font-size: 14px;
	font-weight: 600;
	color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StarsWrapper = styled.div`
  width: 55px;
  display: flex;
  justify-content: space-between;
`;

class EpisodeCard extends Component {
  renderStars() {
    return (
      <StarsWrapper>
        <Star filled={this.props.score >= 7} />
        <Star filled={this.props.score >= 8} />
        <Star filled={this.props.score >= 9} />
      </StarsWrapper>
    );
  }

  renderStatus() {
    if (this.props.locked) {
      return null;
    } else if (this.props.score) {
      return this.renderStars();
    }
    return <NewLabel>New</NewLabel>;
  }

  renderButtonText() {
    if (this.props.locked) {
      return 'Unlock';
    } else if (this.props.score) {
      return 'Study again';
    }
    return 'Start';
  }

  render() {
    const Wrapper = this.props.locked ? LockedWrapper : NormalWrapper;
    return (
      <Wrapper>
        <ImageWrapper>
          <img
            src={this.props.locked ? iconLock : this.props.imageUrl}
            alt={`episode ${this.props.number}`}
          />
        </ImageWrapper>
        <NumberWrapper>{'Episode ' + this.props.number}</NumberWrapper>
        <TitleWrapper locked={this.props.locked}>
          {this.props.title}
        </TitleWrapper>
        <StatusWrapper>{this.renderStatus()}</StatusWrapper>
        <ButtonWrapper>
          {!this.props.locked &&
            <ScreenButton
              text={this.renderButtonText()}
              primary={!this.props.score}
              onClick={this.props.onClick}
              height={40}
              width={140}
              fontSize={16}
            />
          }

        </ButtonWrapper>
      </Wrapper>
    );
  }
}

EpisodeCard.propTypes = {
  id: propTypes.number.isRequired,
  number: propTypes.number.isRequired,
  onClick: propTypes.func,
  locked: propTypes.bool.isRequired,
  title: propTypes.string.isRequired,
  score: propTypes.number,
  imageUrl: propTypes.string
};

export default EpisodeCard;
