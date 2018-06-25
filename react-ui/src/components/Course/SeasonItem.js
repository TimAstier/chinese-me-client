import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router';
import { ScreenButton } from '../.';
import styled from 'styled-components';
import assetEndpointToUrl from '../../helpers/assetEndpointToUrl';
import { Label } from 'semantic-ui-react';

const TIME_PER_EPISODE = 1.5;

const Wrapper = styled.div`
  max-width: 425px;
  background-color: #ffffff;
  flex-grow: 1;
  border-radius: 5px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);
  margin-top: 15px;
  margin-bottom: 10px;
  h3 {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 700;
    font-family: 'Open Sans';
    text-align: center;
  }
`;

const Img = styled.img`
  max-width: 100px;
  height: auto;
`;

const Header = styled.div`
  display: flex;
  padding-top: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 8px;
`;

const Summary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  max-width: 325px;
  margin-left: 15px;
  margin-right: 15px;
  font-style: italic;
  height: 100px;
  text-align: justify;
`;

const Level = styled.div`
  display: flex;
`;

const Details = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`;

const MiddleWrapper = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  border-top: 1px solid #ddd;
`;

const Footer = styled.div`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
  display: flex;
  justify-content: center;
  border-top: 1px solid #ddd;
`;

const levelColors = {
  'Beginner': 'yellow',
  'Elementary': 'olive',
  'Intermediate': 'green',
  'Upper Intermediate': 'teal',
  'Advanced': 'blue',
  'Proficient': 'violet'
};

class SeasonItem extends Component {
  _getLevelColor(level) {
    const color = levelColors[level];
    if (color) {
      return color;
    }
    return 'black';
  }

  _renderAvailability() {
    if (this.props.available) {
      return (
        <span><i><b>Coming soon...</b></i></span>
      );
    }
  }

  _renderLevelLabels() {
    if (!this.props.levels) {
      return null;
    }
    return this.props.levels
      .split(',')
      .map((l, i) => <Label color={this._getLevelColor(l.replace(/\s/g, ''))} key={i}>{l}</Label>);
  }

  render() {
    return (
      <Wrapper>
        <h3>- {this.props.name} -</h3>
        <Header>
          <Img src={assetEndpointToUrl('/images/' + this.props.image)} alt=""/>
          <Summary>
            <div>
              <b>{`${this.props.episodesCount} Episodes`}</b><br />
              { this.props.description }
            </div>
          </Summary>
        </Header>
        <MiddleWrapper>
          <Level>
            { this._renderLevelLabels() }
          </Level>
          <Details>
            <div><i>Estimated study time: <b>{`~${this.props.episodesCount * TIME_PER_EPISODE}h`}</b></i></div>
            <Label as="a" tag>
              $19.00
            </Label>
          </Details>
        </MiddleWrapper>
        <Footer>
          <Link to={`/course/season/${this.props.seasonNumber}`}>
            <ScreenButton
              primary
              text="Browse"
              width={100}
              height={35}
              fontSize={18}
            />
          </Link>
        </Footer>
      </Wrapper>
    );
  }
}

SeasonItem.propTypes = {
  price: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  available: propTypes.bool,
  seasonId: propTypes.number.isRequired,
  seasonNumber: propTypes.number.isRequired,
  episodesCount: propTypes.number.isRequired,
  description: propTypes.string.isRequired,
  levels: propTypes.string.isRequired
};

export default SeasonItem;
