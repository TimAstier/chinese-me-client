import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Bookrow } from './.';

const H1 = styled.h1`
  text-align: center;
  margin-bottom: 40px;
`;

const Title = styled.span`
  font-size: 34px;
  font-style: bold;
  font-family: 'Cambria';
  color: #C0504D;
`;

class LessonTitle extends Component {

  _label() {
    const type = this.props.seasonNumber === 0 ? 'LESSON ' : 'EPISODE ';
    return type + this.props.episodeNumber + ': ';
  }

  _title() {
    return this._label() + this.props.title;
  }

  render() {
    return (
      <Bookrow marginBottom={30} center>
        <H1>
          <Title>{this._title()}</Title>
        </H1>
      </Bookrow>
    );
  }
}

LessonTitle.propTypes = {
  episodeNumber: propTypes.number.isRequired,
  seasonNumber: propTypes.number.isRequired,
  title: propTypes.string.isRequired
};

export default LessonTitle;
