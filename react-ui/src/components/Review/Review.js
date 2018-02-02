import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Episode } from '../../models';
import { ReviewPart as Part } from '../.';
import { ReviewFilterControl as FilterControl } from '../../containers';
import practiceNames from '../../constants/practiceNames';

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  min-height: 550px;
  align-items: center;
`;

const TopWrapper = styled.div`
  margin-top: -50px;
  ${''/* This is a sort of workaround. We should probably use a different
  parent component than EpisodeScreen. See https://robertnyman.com/2010/03/22/
  css-pointer-events-to-allow-clicks-on-underlying-elements/ */}
  ${''/* pointer-events: none; */}
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  font-size: 20px;
  color: #CD3C44;
  font-family: 'Open Sans';
`;

const Separator = styled.div`
  flex-grow: 1;
  width: 340px;
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 1000px;
`;

const Row = styled.div`
  display: flex;
`;

class Review extends Component {
  _title() {
    return 'Lesson ' + this.props.episode.number + ' - Exercises';
  }

  _filterPractices(typeLetter) {
    return this.props.episode.practices
      .filter(e => {
        // Filter out 'lesson-based' practices
        if (e.type === null) {
          return false;
        }
        // Filter out based on the 'recommended' state
        if (!e.recommended) {
          if (this.props.recommended === true) {
            return false;
          }
        }
        // Filter out based on the practice type
        return e.type.substring(0, 1) === typeLetter;
      })
      // Sort according to the order defined in practiceName.js file
      .sort((a, b) => practiceNames[a.type].order - practiceNames[b.type].order);
  }

  render() {
    return (
      <Wrapper>
        <TopWrapper>
          <Separator />
          <Separator>
            <FilterControl />
          </Separator>
          <Separator>
            <Title>
              {this._title()}
            </Title>
          </Separator>
        </TopWrapper>
        <Table>
          <Row>
            <Part
              title="PRONUNCIATION"
              items={this._filterPractices('P')}
              itemClick={this.props.itemClick}
            />
            <Part
              title="CHARACTERS"
              items={this._filterPractices('C')}
              itemClick={this.props.itemClick}
            />
          </Row>
          <Row>
            <Part
              title="WORDS"
              items={this._filterPractices('W')}
              itemClick={this.props.itemClick}
            />
            <Part
              title="PATTERNS"
              items={this._filterPractices('G')}
              itemClick={this.props.itemClick}
            />
          </Row>
        </Table>
      </Wrapper>
    );
  }
}

Review.propTypes = {
  episode: propTypes.instanceOf(Episode).isRequired,
  recommended: propTypes.bool.isRequired,
  itemClick: propTypes.func.isRequired
};

export default Review;
