import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { EpisodeCard } from '../../containers';
import { ScrollableWrapper } from '../../containers';
import Immutable from 'immutable';

const ScreenWrapper = styled.div`
  margin: 30px auto 50px;
  min-height: 640px;
  width: 85%;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  height: 35px;
  font-family: 'Open Sans';
	font-size: 35px;
  font-weight: bold;
	color: #454545;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const EpisodeCardsWrapper = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

class SelectEpisode extends Component {
  renderEpisodeCards() {
    const episodeCards = [];
    this.props.episodes.forEach((episode, i) => {
      return episodeCards.push(
        <EpisodeCard
          key={i}
          episode={episode}
          seasonNumber={this.props.currentSeasonNumber}
        />
      );
    });
    return episodeCards;
  }

  render() {
    return (
      <ScrollableWrapper>
        <ScreenWrapper>
          <TitleWrapper>{this.props.title}</TitleWrapper>
          <EpisodeCardsWrapper>{this.renderEpisodeCards()}</EpisodeCardsWrapper>
        </ScreenWrapper>
      </ScrollableWrapper>
    );
  }
}

SelectEpisode.propTypes = {
  episodes: propTypes.instanceOf(Immutable.OrderedMap).isRequired,
  title: propTypes.string,
  currentSeasonNumber: propTypes.number
};

export default SelectEpisode;
