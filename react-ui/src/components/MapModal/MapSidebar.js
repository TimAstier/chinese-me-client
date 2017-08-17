import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Accordion, List } from 'semantic-ui-react';
import { Episode } from '../../models';
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

  render() {
    const renderEpisodesList = episodes => {
      return (
        <List>
          {episodes.map(e => {
            return (
              <SidebarItem
                episode={e}
                focused={e.id === 3}
                key={e.id}
                playing={this.props.currentEpisodeId === e.id}
              />
            );
          })}
        </List>
      );
    };

    // TODO: Link this to actual data
    const panels = [{
      title: 'Season 1',
      content: renderEpisodesList(this.props.episodes)
    }, {
      title: 'Season 2',
      content: renderEpisodesList(this.props.episodes),
    }, {
      title: 'Season 3',
      content: renderEpisodesList(this.props.episodes),
    }, {
      title: 'Season 4',
      content: renderEpisodesList(this.props.episodes),
    }, {
      title: 'Season 5',
      content: renderEpisodesList(this.props.episodes),
    }];

    return (
      <Wrapper>
        <ContentWrapper>
          <Accordion panels={panels} fluid />
        </ContentWrapper>
      </Wrapper>
    );
  }
}

MapSidebar.propTypes = {
  episodes: propTypes.arrayOf(propTypes.instanceOf(Episode)).isRequired,
  currentEpisodeId: propTypes.number
};

export default MapSidebar;
