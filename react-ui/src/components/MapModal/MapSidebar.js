import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Accordion, List } from 'semantic-ui-react';
import * as models from '../../models';
import SidebarItem from './SidebarItem';

const Wrapper = styled.div`
  width: 277px;
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

  renderEpisodesList(seasonId) {
    // TODO: move this into an util func
    const episodesArray = [];
    this.props.episodes.valueSeq().forEach(episode => {
      episodesArray.push(episode);
    });
    const filteredEpisodes = episodesArray.filter(e => {
      return e.seasonId === seasonId;
    });
    return (
      <List>
        {filteredEpisodes.map(e => {
          return (
            <SidebarItem
              episode={e}
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

  generatePanels() {
    const { seasons } = this.props;
    const panels = [];
    seasons.valueSeq().forEach(season => {
      return panels.push({
        title: 'Season ' + season.number,
        content: this.renderEpisodesList(season.id)
      });
    });
    return panels;
  }

  render() {
    const { episodes, seasons, focusedEpisodeId } = this.props;
    let focusedSeasonId = 0;
    let defaultActiveIndex = undefined;
    if (focusedEpisodeId) {
      focusedSeasonId = episodes.get(String(focusedEpisodeId)).seasonId;
      defaultActiveIndex = seasons.get(String(focusedSeasonId)).number - 1;
    }
    return (
      <Wrapper>
        <ContentWrapper>
          <Accordion
            panels={this.generatePanels()}
            fluid
            defaultActiveIndex={defaultActiveIndex}
            exclusive
          />
        </ContentWrapper>
      </Wrapper>
    );
  }
}

MapSidebar.propTypes = {
  seasons: propTypes.instanceOf(models.SeasonMap).isRequired,
  episodes: propTypes.instanceOf(models.EpisodeMap).isRequired,
  currentEpisodeId: propTypes.number,
  focusedEpisodeId: propTypes.number,
  setFocusedEpisodeId: propTypes.func.isRequired
};

export default MapSidebar;
