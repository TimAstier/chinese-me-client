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
  render() {
    return (
      <Bookrow marginBottom={30} center>
        <H1>
          <Title>
            {this.props.episodeNumber + '. ' + this.props.title}
          </Title>
        </H1>
      </Bookrow>
    );
  }
}

LessonTitle.propTypes = {
  episodeNumber: propTypes.number.isRequired,
  title: propTypes.string.isRequired
};

export default LessonTitle;
