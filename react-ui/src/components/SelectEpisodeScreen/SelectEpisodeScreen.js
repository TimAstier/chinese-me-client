import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { ScreenWrapper, EpisodeCard } from '../.';

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

class SelectEpisodeScreen extends Component {
  renderEpisodeCards() {
    const episodeCards = [];
    this.props.episodes.forEach((e, i) => {
      return episodeCards.push(
        <EpisodeCard
          key={i}
          number={e.get('number')}
          title={e.get('title')}
          status={e.get('status')}
          score={e.get('score')}
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

SelectEpisodeScreen.propTypes = {
  episodes: propTypes.object.isRequired,
  title: propTypes.string.isRequired
};

export default SelectEpisodeScreen;
