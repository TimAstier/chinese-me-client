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

const ChineseText = styled.span`
  font-family: Kai;
`;

class LessonTitle extends Component {
  _label() {
    const type = this.props.seasonNumber === 0 ? 'LESSON ' : 'EPISODE ';
    return type + this.props.episodeNumber + ': ';
  }

  _title() {
    return <span>{this._label()}<ChineseText>{this.props.title}</ChineseText></span>;
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
  seasonNumber: propTypes.number.isRequired,
  episodeNumber: propTypes.number.isRequired,
  title: propTypes.string.isRequired
};

export default LessonTitle;
