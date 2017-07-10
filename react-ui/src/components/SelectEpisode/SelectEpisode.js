import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { ScreenWrapper } from '../.';
import { EpisodeCard } from '../../containers';
import * as models from '../../models';

const TitleWrapper = styled.div`
  flex: 1 0 0;
  font-family: 'Open Sans';
	font-size: 30px;
	color: #454545;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EpisodeCardsWrapper = styled.div`
  flex: 12 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: auto;
  height: 0px;

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
      <ScreenWrapper>
        <TitleWrapper>{this.props.title}</TitleWrapper>
        <EpisodeCardsWrapper>{this.renderEpisodeCards()}</EpisodeCardsWrapper>
      </ScreenWrapper>
    );
  }
}

SelectEpisode.propTypes = {
  episodes: propTypes.instanceOf(models.EpisodeMap).isRequired,
  title: propTypes.string.isRequired
};

export default SelectEpisode;
