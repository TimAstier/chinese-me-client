import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { EpisodeCard } from '../../containers';
import { ScrollableAppWrapper } from '../Shared';
import * as models from '../../models';

const ScreenWrapper = styled.div`
  margin: 30px auto 50px;
  min-height: 640px;
  width: 1200px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  height: 75px;
  font-family: 'Open Sans';
	font-size: 35px;
  font-weight: bold;
	color: #454545;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const EpisodeCardsWrapper = styled.div`
  margin: 16px 40px 50px;
  display: flex;
  flex-wrap: wrap;
`;

class SelectEpisode extends Component {
  renderEpisodeCards() {
    const episodeCards = [];
    this.props.episodes.forEach((episode, i) => {
      return episodeCards.push(
        <EpisodeCard
          key={i}
          episode={episode}
        />
      );
    });
    return episodeCards;
  }

  render() {
    return (
      <ScrollableAppWrapper>
        <ScreenWrapper>
          <TitleWrapper>{'Episodes in ' + this.props.title}</TitleWrapper>
          <EpisodeCardsWrapper>{this.renderEpisodeCards()}</EpisodeCardsWrapper>
        </ScreenWrapper>
      </ScrollableAppWrapper>
    );
  }
}

SelectEpisode.propTypes = {
  episodes: propTypes.instanceOf(models.EpisodeMap).isRequired,
  title: propTypes.string.isRequired
};

export default SelectEpisode;
