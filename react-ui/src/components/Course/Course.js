import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Immutable from 'immutable';
import { SeasonItem, ScrollableWrapper } from '../.';
import { Breadcrumb } from 'semantic-ui-react';
import { Link } from 'react-router';

const Header = styled.div`
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
  h1 {
    margin-top: 5px;
    margin-bottom: 0;
    text-align: center;
    font-family: 'Open Sans';
  	font-size: 35px;
    font-weight: bold;
  	color: #454545;
  }
  h2 {
    margin-top: 25px;
    margin-bottom: 25px;
    height: 20px;
    font-family: 'Open Sans';
  	font-size: 20px;
  	color: #454545;
    font-weight: 100;
    text-align: center;
    font-style: italic;
  }
`;

const SeasonItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 425px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
`;

class Course extends Component {
  _renderBookItems() {
    if (this.props.seasons.size === 0) {
      return null;
    }
    const seasonItems = this.props.seasons.valueSeq().map(s => {
      return (
        <SeasonItem
          key={s.id}
          price={s.price}
          image={s.image}
          name={s.name}
          available={s.available}
          seasonId={s.id}
          seasonNumber={s.number}
          episodesCount={s.episodes.length}
          description={s.description}
          levels={s.levels}
        />
      );
    });
    return <SeasonItemsWrapper>{seasonItems}</SeasonItemsWrapper>;
  }

  render() {
    return (
      <ScrollableWrapper>
        <Header>
          <Breadcrumb>
            <Breadcrumb.Section>
              <Link to="/">Home</Link>
            </Breadcrumb.Section>
            <Breadcrumb.Divider icon="right chevron" />
            <Breadcrumb.Section active>
              Course
            </Breadcrumb.Section>
          </Breadcrumb>
          <h1>The integrated Chinese course</h1>
          <h2>Pick up a Season:</h2>
        </Header>
        { this._renderBookItems() }
      </ScrollableWrapper>
    );
  }
}

Course.propTypes = {
  seasons: propTypes.instanceOf(Immutable.OrderedMap).isRequired
};

export default Course;
