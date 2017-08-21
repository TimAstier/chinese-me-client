import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Episode } from '../../models';
import styled, { keyframes } from 'styled-components';
import { List, Icon } from 'semantic-ui-react';
import iconPlayingWhite from '../../images/iconPlayingWhite.svg';
import iconPlayingColor from '../../images/iconPlayingColor.svg';

const rotate360 = keyframes`
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
`;

class SidebarItem extends Component {

  render() {
    const { episode, focused, playing } = this.props;

    const textColor = (focused, locked) => {
      if (locked) {
        return '#b2babf';
      }
      return focused ? '#ffffff' : '#454545';
    };

    const Wrapper = styled.div`
      height: 32px;
      display: flex;
      align-items: center;
      :hover {
        background-color: ${focused ? '#55b6ff' : '#deeaf0'};
      }
      background-color: ${focused ? '#55b6ff' : 'none'};
      cursor: pointer;
    `;

    const StyledItem = styled.span`
      margin-left: 35px;
      display: flex;
      padding-top: 3px;
      color: ${textColor(focused, episode.locked)};
    `;

    const CheckWrapper = styled.div`
      width: 17px;
      margin-left: -5px;
    `;

    const ItemNumber = styled.div`
      font-family: 'Open Sans';
      font-size: 16px;
      margin-left: 5px;
    `;

    const ItemTitle = styled.div`
      margin-left: 5px;
      font-size: 16px;
      font-weight: 900;
      font-family: 'STKaitiSC';
      width: 160px;
    `;

    const PlayingIconWrapper = styled.div`
      width: 20px;
      height: 20px;
      display: inline-block;
	    animation: ${rotate360} 2s linear infinite;
    `;

    // TODO: triangle on the right of focused episode
    // TODO: Change checkmark into svg icon with right color
    return (
      <Wrapper onClick={() => this.props.setFocusedEpisodeId(episode.id)}>
        <List.Item>
          <StyledItem>
            <CheckWrapper>
              {episode.completed && <Icon name="checkmark" color="green"/>}
            </CheckWrapper>
            <ItemNumber>{episode.number + '.'}</ItemNumber>
            <ItemTitle>
              {episode.title}
            </ItemTitle>
            {playing &&
              <PlayingIconWrapper>
                <img src={focused ? iconPlayingWhite : iconPlayingColor} alt="playing-icon"/>
              </PlayingIconWrapper>
            }
          </StyledItem>
        </List.Item>
      </Wrapper>
    );
  }
}

SidebarItem.propTypes = {
  episode: propTypes.instanceOf(Episode).isRequired,
  focused: propTypes.bool.isRequired,
  playing: propTypes.bool,
  setFocusedEpisodeId: propTypes.func.isRequired
};

export default SidebarItem;
