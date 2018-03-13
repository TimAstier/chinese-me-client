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
  align-items: center;
`;

const TopWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Table = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 10px;
  max-width: 1000px;
  width: 100%;
  overflow-y: scroll;
`;

class Review extends Component {
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
          <FilterControl />
        </TopWrapper>
        <Table>
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
