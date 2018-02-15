import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Accordion, List } from 'semantic-ui-react';
import SidebarItem from './SidebarItem';
import Immutable from 'immutable';
import { Season } from '../../models';

const Wrapper = styled.div`
  min-width: 277px;
  height: 610px;
  border-radius: 15px;
  background-color: #f2f7fa;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  height: 550px;
  overflow-y: auto;
  .accordion .title {
    font-family: 'Open Sans' !important;
	  font-size: 18px !important;
	  font-weight: 600;
	  color: #454545;
    margin-left: 27px;
  }
  .accordion .content {
    margin-top: -10px;
    margin-bottom: -10px;
  }
`;

class MapSidebar extends Component {
  _renderEpisodesList(seasonId, seasonNumber) {
    // convert to array to avoid calling .map() on an ordered List
    // (not officially supported)
    const episodesArray = [];
    const episodes = this.props.episodes
      .filter(e => e.seasonId === seasonId)
      .sortBy(e => e.number);
    episodes.valueSeq().forEach(episode => episodesArray.push(episode));
    return (
      <List>
        {episodesArray.map(e => {
          return (
            <SidebarItem
              episode={e}
              label={seasonNumber !== 0 ? 'Episode ' : 'Lesson '}
              focused={e.id === this.props.focusedEpisodeId}
              key={e.id}
              playing={this.props.currentEpisodeId === e.id}
              setFocusedEpisodeId={this.props.setFocusedEpisodeId}
            />
          );
        })}
      </List>
    );
  }

  _generatePanels() {
    const seasons = this.props.seasons.sortBy(e => e.number);
    const panels = [];
    seasons.valueSeq().forEach((season, i) => {
      // TODO: Add a title field in DB (in a translation table)
      const title = season.number === 0 ? 'The Basics' : 'Season '
        + season.number;
      return panels.push({
        title,
        content: {
          content: (
            this._renderEpisodesList(season.id, season.number)
          ),
          key: `content-${i}`
        }
      });
    });
    return panels;
  }

  render() {
    const { currentSeason } = this.props;
    const defaultActiveIndex = currentSeason ? currentSeason.number : undefined;
    return (
      <Wrapper>
        <ContentWrapper>
          <Accordion
            panels={this._generatePanels()}
            fluid
            defaultActiveIndex={defaultActiveIndex}
          />
        </ContentWrapper>
      </Wrapper>
    );
  }
}

MapSidebar.propTypes = {
  seasons: propTypes.instanceOf(Immutable.OrderedMap).isRequired,
  episodes: propTypes.instanceOf(Immutable.OrderedMap).isRequired,
  currentEpisodeId: propTypes.number,
  focusedEpisodeId: propTypes.number,
  setFocusedEpisodeId: propTypes.func.isRequired,
  currentSeason: propTypes.instanceOf(Season)
};

export default MapSidebar;
