import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Icon, Label } from 'semantic-ui-react';
import styled from 'styled-components';

import Episode from '../../models/Episode';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 140px;
  border-radius: 10px;
  border: solid 1px #e9e9e9;
  cursor: pointer;
  margin-right: 15px;
  margin-left: 15px;
  margin-top: 15px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
`;

const LockedWrapper = styled(Wrapper)`
  background-color: #f8f8f8;
`;

const NormalWrapper = styled(Wrapper)`
  background-color: #ffffff;
  box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.05);
`;

class EpisodeCard extends Component {

  renderStatus(status, score) {
    if (status === 'locked') {
      return (
        <Icon name="lock" size="big" color="grey" />
      );
    } else if (status === 'new') {
      return (
        <Label circular color="orange" size="large">NEW</Label>
      );
    }

    const renderStar = key => {
      if (key <= score) {
        return <Icon name="star" color="yellow" size="big" key={key} />;
      }
      return <Icon name="empty star" color="teal" size="big" key={key} />;
    };

    const stars = [];
    for (let i = 1; i < 4; i++) {
      stars.push(renderStar(i));
    }
    return (
      <div>
        {stars}
      </div>
    );
  }

  render() {
    const { number, title, status, score } = this.props.episode;

    const Title = styled.h1`
      font-family: 'Open Sans';
      font-size: 20px;
      color: ${status === 'locked' ? '#949494' : 'black'};
      margin-top: 7px;
    `;

    const EpisodeNumber = styled.h2`
      font-family: 'Open Sans';
      font-size: 16px;
      color: ${status === 'locked' ? '#949494' : 'black'};
      padding-top: 15px;
    `;

    if (status === 'locked') {
      return (
        <LockedWrapper>
          <EpisodeNumber>Episode {number}</EpisodeNumber>
          <Title>{title}</Title>
          {this.renderStatus(status, score)}
        </LockedWrapper>
      );
    }

    return (
      <NormalWrapper>
        <EpisodeNumber>Episode {number}</EpisodeNumber>
        <Title>{title}</Title>
        {this.renderStatus(status, score)}
      </NormalWrapper>
    );
  }
}

EpisodeCard.propTypes = {
  episode: propTypes.instanceOf(Episode).isRequired
};

export default EpisodeCard;
